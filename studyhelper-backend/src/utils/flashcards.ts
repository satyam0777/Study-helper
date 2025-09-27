import genAI from '../config/gemini'; // Assuming your Gemini config is here
import { GenerationConfig, ModelParams, Part } from '@google/generative-ai';

// The Flashcard interface remains the same
export interface Flashcard {
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

/**
 * Generates flashcards from a given piece of content using the Gemini API.
 * @param content The source text to create flashcards from.
 * @param numberOfCards The number of flashcards to generate.
 * @returns A promise that resolves to an array of Flashcard objects.
 */
export const generateFlashcards = async (
  content: string,
  numberOfCards: number = 10
): Promise<Flashcard[]> => {
  try {
    // 1. Define the system instruction to set the AI's role.
    const systemInstruction: Part = {
      text: "You are an expert at creating effective flashcards for studying. Your response must be in JSON format.",
    };

    // 2. Create a specific prompt for the user's request.
    const prompt = `
      Create exactly ${numberOfCards} flashcards from the following content.
      Each flashcard should have a clear question/term on the front and a comprehensive answer/definition on the back.
      Include a mix of difficulty levels ('easy', 'medium', 'hard') and at least two relevant tags for each card.

      Content:
      ---
      ${content}
      ---
    `;

    // 3. Configure the model to use JSON output with a specific schema.
    const generationConfig: GenerationConfig = {
      responseMimeType: "application/json",
      responseSchema: {
        type: "ARRAY" as any, // Using type assertion to bypass type definition issues
        items: {
          type: "OBJECT" as any,
          properties: {
            front: { type: "STRING" as any },
            back: { type: "STRING" as any },
            difficulty: { type: "STRING" as any, enum: ["easy", "medium", "hard"] },
            tags: { type: "ARRAY" as any, items: { type: "STRING" as any } },
          },
          required: ["front", "back", "difficulty", "tags"],
        },
      },
    };
    
    const modelParams: ModelParams = {
      model: "gemini-2.5-pro", // Use a modern, capable model
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
    console.error('Error generating flashcards with Gemini:', error);
    // Re-throw a more specific error for the caller to handle.
    throw new Error('Failed to generate flashcards. Please check the content and try again.');
  }
};