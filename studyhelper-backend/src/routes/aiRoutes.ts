
import { Router, Response } from 'express';
import { AuthRequest, authenticateToken } from '../middlewares/authMiddleware';
// import { aiLimiter } from '../middlewares/rateLimiter';
import { simpleRateLimiter } from '../middlewares/rateLimiter';
import genAI from '../config/gemini';


import { generateQuiz } from '../utils/generateQuiz';
import { summarizeText } from '../utils/summarizeText';
import { generateImage } from '../utils/generateImage';
import { generateFlashcards } from '../utils/flashcards';

// Import your database models
import Chat from '../models/Chat';
import User from '../models/User';

// Import your Joi validation schemas
import { aiValidation } from '../utils/validation';

const router = Router();

// Apply authentication and rate limiting to all routes in this file
router.use(authenticateToken);
router.use(simpleRateLimiter);

/**
 * @route   POST /api/ai/ask
 * @desc    Ask a general question to the Gemini model
 * @access  Private
 */
router.post('/ask', async (req: AuthRequest, res: Response) => {
      try {
    const { question } = req.body;

    // --- ADD THIS VALIDATION ---
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: "The 'question' field is required and must be a string." });
    }
    // -------------------------

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
    const result = await model.generateContent(question);

    // Format the answer as Markdown for a rich, readable response
    res.json({ success: true, data: result.response.text() });
  } catch (error) {
    // Check your server logs for the output of this console.error!
    console.error("Error in /ask route:", error);
    res.status(500).json({ error: "AI request failed" });
  }
});

/**
 * @route   POST /api/ai/summary
 * @desc    Generate a summary from text
 * @access  Private
 */
router.post('/summary', async (req: AuthRequest, res: Response) => {
    try {
        // Accept type: 'paragraph' | 'keypoints' | 'bullets' from frontend
        const { text, type = 'paragraph' } = req.body;
        if (!text || typeof text !== 'string') {
            return res.status(400).json({ error: "The 'text' field is required and must be a string." });
        }

        // Map type to summarizeText options
        let style: 'paragraph' | 'bullet-points' | 'outline' = 'paragraph';
        if (type === 'keypoints' || type === 'bullets') style = 'bullet-points';
        if (type === 'paragraph') style = 'paragraph';

        // Optionally, allow for future expansion (outline, etc.)
        const length: 'short' | 'medium' | 'long' = 'medium';
        const result = await summarizeText(text, { length, style });

        // Save chat
        const userId = req.user!._id;
        const chat = new Chat({
            userId,
            type: 'summary',
            input: { text, type },
            output: { text: result.summary },
            metadata: { model: 'gemini-2.5-pro' }
        });
        await chat.save();

        res.json({
            success: true,
            data: {
                summary: result.summary,
                keyPoints: result.keyPoints,
                originalWordCount: text.split(' ').length,
                chatId: chat._id
            }
        });
    } catch (error) {
        console.error('Error creating summary:', error);
        res.status(500).json({ error: 'Failed to create summary' });
    }
});

/**
 * @route   POST /api/ai/quiz
 * @desc    Generate a quiz from content
 * @access  Private
 */
router.post('/quiz', async (req: AuthRequest, res: Response) => {
    try {
        const { content, numberOfQuestions = 5, difficulty = 'medium', questionType = 'multiple-choice' } = req.body;
        if (!content) {
            return res.status(400).json({ error: 'Content is required' });
        }

        const userId = req.user!._id;
        const questions = await generateQuiz(content, { numberOfQuestions, difficulty, questionType });

        const chat = new Chat({
            userId,
            type: 'quiz',
            input: { text: content, numberOfQuestions, difficulty, questionType },
            output: { quiz: { questions } },
            metadata: { model: 'gemini-2.5-pro' }
        });
        await chat.save();

        res.json({
            success: true,
            data: {
                quiz: questions,
                chatId: chat._id,
                totalQuestions: questions.length
            }
        });
    } catch (error) {
        console.error('Error creating quiz:', error);
        res.status(500).json({ error: 'Failed to create quiz' });
    }
});

/**
 * @route   POST /api/ai/flashcards
 * @desc    Generate flashcards from content
 * @access  Private
 */
router.post('/flashcards', async (req: AuthRequest, res: Response) => {
    try {
        const { content, type = 'basic' } = req.body;
        if (!content) {
            return res.status(400).json({ error: 'Content is required' });
        }

        const userId = req.user!._id;
        const flashcards = await generateFlashcards(content, type);

        const chat = new Chat({
            userId,
            type: 'flashcard',
            input: { text: content, type },
            output: { flashcards },
            metadata: { model: 'gemini-2.5-pro' }
        });
        await chat.save();

        res.json({
            success: true,
            data: {
                flashcards,
                chatId: chat._id,
                totalCards: flashcards.length
            }
        });
    } catch (error) {
        console.error('Error creating flashcards:', error);
        res.status(500).json({ error: 'Failed to create flashcards' });
    }
});

/**
 * @route   POST /api/ai/image
 * @desc    Generate an image from a prompt
 * @access  Private
 */
router.post('/image', async (req: AuthRequest, res: Response) => {
    try {
        const { error: validationError, value } = aiValidation.generateImage.validate(req.body);
        if (validationError) {
            return res.status(400).json({ error: validationError.details[0].message });
        }

        const { prompt, style } = value;
        const userId = req.user!._id;
        const user = await User.findById(userId);

        if (user!.subscription.plan === 'free' && user!.subscription.usage.imagesGenerated >= 10) {
            return res.status(429).json({
                error: 'Daily image generation limit reached for free plan.',
                upgrade: true
            });
        }

        const result = await generateImage(prompt, { style });

        if (result.error) {
            // The generateImage function now returns an error object, not throws
            return res.status(500).json({ error: result.error });
        }

        const chat = new Chat({
            userId,
            type: 'image',
            input: { imagePrompt: prompt },
            output: { imageUrl: result.imageUrl },
            metadata: { model: 'gemini-2.5-pro' }
        });
        await chat.save();

        await User.findByIdAndUpdate(userId, {
            $inc: { 'subscription.usage.imagesGenerated': 1 }
        });

        res.json({
            success: true,
            data: {
                imageUrl: result.imageUrl,
                chatId: chat._id
            }
        });
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Failed to generate image' });
    }
});




export default router;


// import { Router } from 'express';
// import { authenticateToken } from '../middlewares/authMiddleware';
// import { simpleRateLimiter } from '../middlewares/rateLimiter';

// import {
//   askQuestion,
//   createSummary,
//   createQuiz,
//   createFlashcards,
//   createImage
// } from '../controllers/aiController';

// const router = Router();

// router.use(authenticateToken);
// router.use(simpleRateLimiter);

// // Define routes and link to controllers
// router.post('/ask', askQuestion);
// router.post('/summary', createSummary);
// router.post('/quiz', createQuiz);
// router.post('/flashcards', createFlashcards);
// router.post('/image', createImage);

// export default router;
