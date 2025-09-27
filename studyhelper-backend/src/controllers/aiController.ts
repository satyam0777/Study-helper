

// import { Response } from 'express';
// import { AuthRequest } from '../middlewares/authMiddleware';
// import genAI from '../config/gemini';
// import { generateQuiz } from '../utils/generateQuiz';
// import { summarizeText } from '../utils/summarizeText';
// import { generateImage } from '../utils/generateImage';
// import { generateFlashcards } from '../utils/flashcards';

// import Chat from '../models/Chat';
// import User from '../models/User';
// import { aiValidation } from '../utils/validation';



// export const askQuestion = async (req: AuthRequest, res: Response) => {
//   try {
//     const { question } = req.body;

//     if (!question || typeof question !== 'string') {
//       return res.status(400).json({ error: "The 'question' field is required and must be a string." });
//     }

//     // ✅ Updated model version
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });
//     const result = await model.generateContent(question);

//     res.json({ answer: result.response.text() });
//   } catch (error) {
//     console.error("Error in /ask controller:", error);
//     res.status(500).json({ error: "AI request failed" });
//   }
// };



// export const createSummary = async (req: AuthRequest, res: Response) => {
//   try {
//     const { error, value } = aiValidation.summarize.validate(req.body);
//     if (error) return res.status(400).json({ error: error.details[0].message });

//     const { text, length, style, focusAreas } = value;
//     const userId = req.user!._id;

//     const result = await summarizeText(text, { length, style, focusAreas });

//     const chat = new Chat({
//       userId,
//       type: 'summary',
//       input: { text },
//       output: { text: result.summary },
//       metadata: { model: 'gemini-1.5-flash' }
//     });
//     await chat.save();

//     res.json({
//       success: true,
//       data: {
//         summary: result.summary,
//         keyPoints: result.keyPoints,
//         originalWordCount: text.split(' ').length,
//         chatId: chat._id
//       }
//     });
//   } catch (error) {
//     console.error('Error creating summary:', error);
//     res.status(500).json({ error: 'Failed to create summary' });
//   }
// };


// export const createQuiz = async (req: AuthRequest, res: Response) => {
//   try {
//     const { error, value } = aiValidation.generateQuiz.validate(req.body);
//     if (error) return res.status(400).json({ error: error.details[0].message });

//     const { content, numberOfQuestions, difficulty, questionType } = value;
//     const userId = req.user!._id;

//     const questions = await generateQuiz(content, { numberOfQuestions, difficulty, questionType });

//     const chat = new Chat({
//       userId,
//       type: 'quiz',
//       input: { text: content },
//       output: { quiz: { questions } },
//       metadata: { model: 'gemini-1.5-flash' }
//     });
//     await chat.save();

//     res.json({
//       success: true,
//       data: {
//         quiz: questions,
//         chatId: chat._id,
//         totalQuestions: questions.length
//       }
//     });
//   } catch (error) {
//     console.error('Error creating quiz:', error);
//     res.status(500).json({ error: 'Failed to create quiz' });
//   }
// };


// export const createFlashcards = async (req: AuthRequest, res: Response) => {
//   try {
//     const { content, numberOfCards = 10 } = req.body;
//     if (!content) return res.status(400).json({ error: 'Content is required' });

//     const userId = req.user!._id;
//     const flashcards = await generateFlashcards(content, numberOfCards);

//     const chat = new Chat({
//       userId,
//       type: 'flashcard',
//       input: { text: content },
//       output: { flashcards },
//       metadata: { model: 'gemini-1.5-flash' }
//     });
//     await chat.save();

//     res.json({
//       success: true,
//       data: {
//         flashcards,
//         chatId: chat._id,
//         totalCards: flashcards.length
//       }
//     });
//   } catch (error) {
//     console.error('Error creating flashcards:', error);
//     res.status(500).json({ error: 'Failed to create flashcards' });
//   }
// };


// export const createImage = async (req: AuthRequest, res: Response) => {
//   try {
//     const { error: validationError, value } = aiValidation.generateImage.validate(req.body);
//     if (validationError) return res.status(400).json({ error: validationError.details[0].message });

//     const { prompt, style } = value;
//     const userId = req.user!._id;
//     const user = await User.findById(userId);

//     if (user!.subscription.plan === 'free' && user!.subscription.usage.imagesGenerated >= 10) {
//       return res.status(429).json({
//         error: 'Daily image generation limit reached for free plan.',
//         upgrade: true
//       });
//     }

//     const result = await generateImage(prompt, { style });
//     if (result.error) return res.status(500).json({ error: result.error });

//     const chat = new Chat({
//       userId,
//       type: 'image',
//       input: { imagePrompt: prompt },
//       output: { imageUrl: result.imageUrl },
//       metadata: { model: 'imagen-3.0-generate-002' }
//     });
//     await chat.save();

//     await User.findByIdAndUpdate(userId, {
//       $inc: { 'subscription.usage.imagesGenerated': 1 }
//     });

//     res.json({
//       success: true,
//       data: { imageUrl: result.imageUrl, chatId: chat._id }
//     });
//   } catch (error) {
//     console.error('Error generating image:', error);
//     res.status(500).json({ error: 'Failed to generate image' });
//   }
// };
