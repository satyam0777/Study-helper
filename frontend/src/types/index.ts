// src/types/index.ts
export interface User {
  id: string;
  username: string;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
  };
}

export interface AuthResponse {
  success: boolean;
  data: {
    token: string;
    user: User;
  };
}

// Summary Types
export interface SummaryData {
  summary: string;
  keyPoints: string[];
}

// Quiz Types
export interface QuizQuestion {
  question: string;
  options?: string[];
  answer: string;
  explanation?: string;
}

export interface QuizData {
  quiz: QuizQuestion[];
}

// Image Types
export interface ImageData {
  imageUrl: string;
}

// --- Correct Message Type Definition ---

// 1. Create a base for all messages
interface BaseMessage {
  id: string;
  role: 'user' | 'assistant';
}

// 2. Define each specific message type
interface TextMessage extends BaseMessage {
  type: 'text' | 'error';
  content: string;
}

interface SummaryMessage extends BaseMessage {
  type: 'summary';
  content: SummaryData;
}

interface QuizMessage extends BaseMessage {
  type: 'quiz';
  content: QuizData;
}

interface ImageMessage extends BaseMessage {
  type: 'image';
  content: ImageData;
}

interface FlashcardsMessage extends BaseMessage {
  type: 'flashcards';
  content: { flashcards: string[] };
}

export type Message = TextMessage | SummaryMessage | QuizMessage | ImageMessage | FlashcardsMessage;