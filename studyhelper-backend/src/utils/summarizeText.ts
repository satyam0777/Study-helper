import genAI from '../config/gemini'; // Assuming your Gemini config is here
import { GenerationConfig, ModelParams, Part } from '@google/generative-ai';

// Interface for summary generation options
export interface SummaryOptions {
  length: 'short' | 'medium' | 'long';
  style: 'bullet-points' | 'paragraph' | 'outline';
  focusAreas?: string[];
}

// Interface for the returned summary object
export interface SummaryResult {
  summary: string;
  keyPoints: string[];
  wordCount: number;
}

/**
 * Summarizes a given piece of text using the Gemini API.
 * @param text The source text to summarize.
 * @param options Configuration options for the summary.
 * @returns A promise that resolves to a SummaryResult object.
 */
export const summarizeText = async (
  text: string,
  options: SummaryOptions = { length: 'medium', style: 'paragraph' }
): Promise<SummaryResult> => {
  try {
    const lengthInstructions = {
      short: 'in 2-3 concise sentences',
      medium: 'in one or two detailed paragraphs',
      long: 'in three to four comprehensive paragraphs'
    };

    const styleInstructions = {
      'bullet-points': 'Format the summary as a list of clear bullet points',
      'paragraph': 'Write the summary in a coherent paragraph format',
      'outline': 'Create a structured outline of the text for the summary'
    };

    const focusInstruction = options.focusAreas?.length 
      ? `Pay special attention to the following topics: ${options.focusAreas.join(', ')}.` 
      : '';

    // 1. Define the system instruction.
    const systemInstruction: Part = {
      text: "You are an expert at creating clear, concise, and accurate summaries that capture the essential information of a text. Your response must be in JSON format.",
    };

    // 2. Create the user prompt.
    const prompt = `
      Summarize the following text ${lengthInstructions[options.length]}.
      ${styleInstructions[options.style]}.
      ${focusInstruction}

      Also, extract between 5 and 7 of the most important key points from the text as a separate list.

      Text to summarize:
      ---
      ${text}
      ---
    `;

    // 3. Configure the model for JSON output.
    const generationConfig: GenerationConfig = {
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT" as any,
        properties: {
          summary: { type: "STRING" as any },
          keyPoints: { type: "ARRAY" as any, items: { type: "STRING" as any } },
        },
        required: ["summary", "keyPoints"],
      },
    };

    const modelParams: ModelParams = {
      model: "gemini-2.5-pro",
      systemInstruction,
      generationConfig,
    };

    const model = genAI.getGenerativeModel(modelParams);

    // 4. Call the API.
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    if (!responseText) {
      throw new Error('No response from Gemini API');
    }
    
    // 5. Parse the response and construct the final object.
    const aiResult = JSON.parse(responseText);

    return {
      summary: aiResult.summary,
      keyPoints: aiResult.keyPoints,
      wordCount: text.trim().split(/\s+/).length, // Calculate word count from original text
    };

  } catch (error) {
    console.error('Error summarizing text with Gemini:', error);
    throw new Error('Failed to summarize text. Please check the content and try again.');
  }
};

