
import apiClient from './apiClient';
import type { AuthResponse, SummaryData, QuizData, ImageData } from '../types';

// Auth
export const loginUser = (data: any) => apiClient.post<AuthResponse>('/auth/login', data);
export const registerUser = (data: any) => apiClient.post<AuthResponse>('/auth/register', data);
export const getProfile = () => apiClient.get('/auth/profile');

// AI Features
export const askQuestion = (question: string) => apiClient.post('/ai/ask', { question });
export const generateSummary = (text: string, type: 'paragraph' | 'keypoints' | 'bullets') =>
	apiClient.post<{data: SummaryData}>('/ai/summary', { text, type });
export const generateQuiz = (
	content: string,
	numberOfQuestions: number = 5,
	difficulty: 'easy' | 'medium' | 'hard' = 'medium',
	questionType: 'multiple-choice' | 'true-false' | 'short-answer' | 'mixed' = 'multiple-choice'
) =>
	apiClient.post<{data: QuizData}>('/ai/quiz', {
		content,
		numberOfQuestions,
		difficulty,
		questionType
	});
export const generateImage = (prompt: string) => apiClient.post<{data: ImageData}>('/ai/image', { prompt });
export const generateFlashcards = (
	content: string,
	type: 'basic' | 'qa' | 'cloze' = 'basic'
) =>
	apiClient.post<{data: {flashcards: string[]}}>('/ai/flashcards', { content, type });