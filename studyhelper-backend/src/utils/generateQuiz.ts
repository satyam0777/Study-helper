import genAI from '../config/gemini'; // Assuming your Gemini config is here
import { GenerationConfig, ModelParams, Part } from '@google/generative-ai';

// Interface for a single quiz question
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Interface for quiz generation options
export interface QuizOptions {
  numberOfQuestions: number;
  difficulty: 'easy' | 'medium' | 'hard';
  questionType: 'multiple-choice' | 'true-false' | 'short-answer' | 'mixed';
  topic?: string;
}

/**
 * Generates a quiz from a given piece of content using the Gemini API.
 * @param content The source text to create the quiz from.
 * @param options Configuration options for the quiz.
 * @returns A promise that resolves to an array of QuizQuestion objects.
 */
export const generateQuiz = async (
  content: string,
  options: QuizOptions
): Promise<QuizQuestion[]> => {
  try {
    // 1. Define the system instruction to set the AI's role.
    const systemInstruction: Part = {
      text: "You are an expert quiz generator. Create educational quizzes that test comprehension and critical thinking. Your response must be in JSON format.",
    };

    // 2. Create a specific prompt for the user's request.
    const prompt = `
      Create a ${options.difficulty} quiz with exactly ${options.numberOfQuestions} ${options.questionType} questions based on the following content.
      ${options.topic ? `The quiz should focus on the topic: ${options.topic}.` : ''}

      Content:
      ---
      ${content}
      ---

      Requirements:
      - For multiple-choice questions, provide exactly 4 options. For true/false, provide two options: "True" and "False".
      - For every question, include a clear and concise explanation for why the correct answer is right.
      - Ensure the questions test understanding and critical thinking, not just simple memorization.
    `;

    // 3. Configure the model to use JSON output with a specific schema.
    const generationConfig: GenerationConfig = {
      responseMimeType: "application/json",
      responseSchema: {
        type: "ARRAY" as any, // Using type assertion to bypass type definition issues
        items: {
          type: "OBJECT" as any,
          properties: {
            question: { type: "STRING" as any },
            options: { type: "ARRAY" as any, items: { type: "STRING" as any } },
            correctAnswer: { type: "STRING" as any },
            explanation: { type: "STRING" as any },
            difficulty: { type: "STRING" as any, enum: ["easy", "medium", "hard"] },
          },
          required: ["question", "options", "correctAnswer", "explanation", "difficulty"],
        },
      },
    };

    const modelParams: ModelParams = {
      model: "gemini-2.5-pro",
      systemInstruction,
      generationConfig,
    };

    const model = genAI.getGenerativeModel(modelParams);

    // 4. Call the API and get the response.
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    if (!responseText) {
      throw new Error('No response from Gemini API');
    }

    // 5. Parse the validated JSON string.
    return JSON.parse(responseText);

  } catch (error) {
    console.error('Error generating quiz with Gemini:', error);
    throw new Error('Failed to generate quiz. Please check the content and try again.');
  }
};

