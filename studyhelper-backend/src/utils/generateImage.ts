

import dotenv from 'dotenv';
import genAI from "../config/gemini";


dotenv.config();

// --- TYPE DEFINITIONS for API responses ---

// For successful Imagen API response
interface ImagenPrediction {
    bytesBase64Encoded: string;
}
interface ImagenSuccessResponse {
    predictions: ImagenPrediction[];
}

// For Gemini/Imagen API error response
interface ApiErrorDetail {
    message: string;
}
interface ApiErrorResponse {
    error?: ApiErrorDetail;
}


// --- IMAGE GENERATION ---

export interface ImageGenerationOptions {
    style: 'natural' | 'cartoon' | 'artistic' | 'diagram' | 'infographic';
}
export interface ImageResult {
    imageUrl?: string;
    error?: string;
}

export const generateImage = async (
    prompt: string,
    options: ImageGenerationOptions = { style: 'natural' }
): Promise<ImageResult> => {
    try {
        const apiKey = process.env.GOOGLE_API_KEY;
        if (!apiKey) {
            console.error("GOOGLE_API_KEY is not set.");
            return { error: "Server configuration error: Missing API Key." };
        }

        const styleModifiers = {
            natural: 'photorealistic, natural lighting, high detail',
            cartoon: 'vibrant cartoon style, friendly characters, colorful',
            artistic: 'artistic illustration, creative and expressive, painterly style',
            diagram: 'clear and simple diagram, educational, 2D vector style',
            infographic: 'professional infographic style, data visualization'
        };

        const enhancedPrompt = `${prompt}, in a ${styleModifiers[options.style]}.`;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;
        
        const payload = {
            instances: [{ prompt: enhancedPrompt }],
            parameters: { "sampleCount": 1 }
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            // FIX: Cast the JSON body to our defined error type
            const errorBody = await response.json() as ApiErrorResponse;
            const errorMessage = errorBody.error?.message || `API request failed with status ${response.status}`;
            console.error('Gemini API Error:', errorMessage);
            return { error: `Failed to generate image: ${errorMessage}` };
        }

        // FIX: Cast the JSON body to our defined success type
        const result = await response.json() as ImagenSuccessResponse;

        if (!result.predictions || result.predictions.length === 0 || !result.predictions[0].bytesBase64Encoded) {
            console.error('Invalid response structure from Gemini API');
            return { error: 'No image data returned from the API.' };
        }

        const imageUrl = `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
        return { imageUrl };

    } catch (error) {
        console.error('Internal server error in generateImage:', error);
        return { error: 'An unexpected error occurred while generating the image.' };
    }
};


// --- QUIZ GENERATION ---

// export const generateQuiz = async (
//     content: string,
//     options: QuizOptions
// ): Promise<QuizQuestion[]> => {
//     // ... (implementation from previous steps)
//     return []; // Placeholder
// };


// // --- SUMMARY GENERATION ---

// export const summarizeText = async (
//     text: string,
//     options: SummaryOptions
// ): Promise<{ summary: string; keyPoints: string[]; wordCount: number; }> => {
//     // ... (implementation from previous steps)
//     return { summary: '', keyPoints: [], wordCount: 0 }; // Placeholder
// };


// // --- FLASHCARD GENERATION ---

// export const generateFlashcards = async (
//     content: string,
//     numberOfCards: number
// ): Promise<Flashcard[]> => {
//     // ... (implementation from previous steps)
//     return []; // Placeholder
// };

