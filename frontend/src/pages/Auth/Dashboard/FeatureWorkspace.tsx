// // src/pages/Dashboard/FeatureWorkspace.tsx
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import type { Message } from '../../../types';
// import * as api from '../../../api';
// import toast from 'react-hot-toast';

// // Import feature-specific response renderers
// import SummaryResponse from '../../../components/features/SummaryResponse';
// import QuizResponse from '../../../components/features/QuizResponse';
// import FlashcardsResponse from '../../../components/features/FlashcardsResponse';
// import ReactMarkdown from 'react-markdown';

// const FeatureWorkspace = () => {
//   const { featureId } = useParams<{ featureId: string }>();
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [summaryType, setSummaryType] = useState<'paragraph' | 'keypoints' | 'bullets'>('paragraph');
//   const [quizOptions, setQuizOptions] = useState({
//     numberOfQuestions: 5,
//     difficulty: 'medium',
//     questionType: 'multiple-choice',
//   });
//   const [flashcardType, setFlashcardType] = useState<'basic' | 'qa' | 'cloze'>('basic');

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     setIsLoading(true);
//     const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input, type: 'text' };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     try {
//       let response;
//       switch (featureId) {
//         case 'ask':
//           response = await api.askQuestion(input);
//           addAssistantMessage(response.data.data, 'text');
//           break;
//         case 'summary':
//           response = await api.generateSummary(input, summaryType);
//           addAssistantMessage(response.data.data, 'summary');
//           break;
//         case 'quiz':
//           response = await api.generateQuiz(input, quizOptions.numberOfQuestions, quizOptions.difficulty, quizOptions.questionType);
//           addAssistantMessage(response.data.data, 'quiz');
//           break;
//         case 'flashcards':
//           response = await api.generateFlashcards(input, flashcardType);
//           addAssistantMessage(response.data.data, 'flashcards');
//           break;
//         case 'image':
//           response = await api.generateImage(input);
//           addAssistantMessage(response.data.data, 'image');
//           break;
//         default:
//           throw new Error('Unknown feature');
//       }
//     } catch (error: any) {
//       const errorMessage = error.response?.data?.error || 'An error occurred.';
//       toast.error(errorMessage);
//       addAssistantMessage(errorMessage, 'error');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const addAssistantMessage = (content: any, type: Message['type']) => {
//     const assistantMessage: Message = { id: Date.now().toString(), role: 'assistant', content, type };
//     setMessages(prev => [...prev, assistantMessage]);
//   };

//   const renderMessageContent = (message: Message) => {
//     switch (message.type) {
//       case 'text':
//         return (
//           <div className="p-3 bg-gray-100 rounded-lg mb-2 prose prose-indigo max-w-none">
//             <ReactMarkdown>{message.content}</ReactMarkdown>
//           </div>
//         );
//       case 'summary':
//         return <SummaryResponse data={message.content} />;
//       case 'quiz':
//         return <QuizResponse data={message.content} />;
//       case 'flashcards':
//         return <FlashcardsResponse data={message.content} />;
//       case 'image':
//         return (
//           <div className="flex flex-col items-center">
//             <img src={message.content.imageUrl} alt="Generated" className="rounded-lg max-w-sm mb-2" />
//             <button className="bg-indigo-600 text-white px-3 py-1 rounded" onClick={() => navigator.clipboard.writeText(message.content.imageUrl)}>Copy Image URL</button>
//           </div>
//         );
//       case 'error':
//         return <p className="text-red-500">{message.content}</p>;
//       default:
//         return <p>Unsupported message type</p>;
//     }
//   };

//   // Feature titles and prompts
//   const featureTitles: Record<string, string> = {
//     ask: 'Ask AI',
//     summary: 'Generate Summary',
//     quiz: 'Quiz Generator',
//     flashcards: 'Flashcards',
//     image: 'Image Generation',
//   };
//   const featurePrompts: Record<string, string> = {
//     ask: 'Type your question...',
//     summary: 'Paste text to summarize...',
//     quiz: 'Paste text to generate quiz...',
//     flashcards: 'Paste text to generate flashcards...',
//     image: 'Describe the image you want...',
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-1 overflow-y-auto p-4">
//         <h2 className="text-2xl font-bold mb-4">{featureTitles[featureId || 'ask']}</h2>
//         {messages.map(msg => (
//           <div key={msg.id} className={`chat ${msg.role === 'user' ? 'chat-end' : 'chat-start'}`}>
//             <div className="chat-bubble">
//               {renderMessageContent(msg)}
//             </div>
//           </div>
//         ))}
//         {isLoading && <div className="text-center">AI is thinking...</div>}
//       </div>
//       <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder={featurePrompts[featureId || 'ask']}
//           className="w-full p-2 border rounded"
//           disabled={isLoading}
//         />
//         {featureId === 'summary' && (
//           <select
//             value={summaryType}
//             onChange={e => setSummaryType(e.target.value as 'paragraph' | 'keypoints' | 'bullets')}
//             className="p-2 border rounded bg-white"
//             disabled={isLoading}
//             title="Summary Type"
//           >
//             <option value="paragraph">Paragraph</option>
//             <option value="keypoints">Key Points</option>
//             <option value="bullets">Bullet List</option>
//           </select>
//         )}
//         {featureId === 'quiz' && (
//           <>
//             <input
//               type="number"
//               min={1}
//               max={20}
//               value={quizOptions.numberOfQuestions}
//               onChange={e => setQuizOptions(q => ({ ...q, numberOfQuestions: Number(e.target.value) }))}
//               className="p-2 border rounded w-20"
//               disabled={isLoading}
//               title="Number of Questions"
//             />
//             <select
//               value={quizOptions.difficulty}
//               onChange={e => setQuizOptions(q => ({ ...q, difficulty: e.target.value }))}
//               className="p-2 border rounded bg-white"
//               disabled={isLoading}
//               title="Difficulty"
//             >
//               <option value="easy">Easy</option>
//               <option value="medium">Medium</option>
//               <option value="hard">Hard</option>
//             </select>
//             <select
//               value={quizOptions.questionType}
//               onChange={e => setQuizOptions(q => ({ ...q, questionType: e.target.value }))}
//               className="p-2 border rounded bg-white"
//               disabled={isLoading}
//               title="Question Type"
//             >
//               <option value="multiple-choice">Multiple Choice</option>
//               <option value="true-false">True/False</option>
//               <option value="short-answer">Short Answer</option>
//               <option value="mixed">Mixed</option>
//             </select>
//           </>
//         )}
//         {featureId === 'flashcards' && (
//           <select
//             value={flashcardType}
//             onChange={e => setFlashcardType(e.target.value as 'basic' | 'qa' | 'cloze')}
//             className="p-2 border rounded bg-white"
//             disabled={isLoading}
//             title="Flashcard Type"
//           >
//             <option value="basic">Basic</option>
//             <option value="qa">Q&A</option>
//             <option value="cloze">Cloze</option>
//           </select>
//         )}
//         <button
//           type="submit"
//           disabled={isLoading || !input.trim()}
//           className="bg-indigo-600 text-white px-4 py-2 rounded"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FeatureWorkspace;



// src/pages/Dashboard/FeatureWorkspace.tsx
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import type { Message } from '../../../types';
// import * as api from '../../../api';
// import toast from 'react-hot-toast';

// // Import feature-specific response renderers
// import SummaryResponse from '../../../components/features/SummaryResponse';
// import QuizResponse from '../../../components/features/QuizResponse';
// import FlashcardsResponse from '../../../components/features/FlashcardsResponse';
// import ReactMarkdown from 'react-markdown';

// const FeatureWorkspace = () => {
//   const { featureId } = useParams<{ featureId: string }>();
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [summaryType, setSummaryType] = useState<'paragraph' | 'keypoints' | 'bullets'>('paragraph');
//   const [quizOptions, setQuizOptions] = useState({
//     numberOfQuestions: 5,
//     difficulty: 'medium',
//     questionType: 'multiple-choice',
//   });
//   const [flashcardType, setFlashcardType] = useState<'basic' | 'qa' | 'cloze'>('basic');

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     setIsLoading(true);
//     const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input, type: 'text' };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     try {
//       let response;
//       switch (featureId) {
//         case 'ask':
//           response = await api.askQuestion(input);
//           addAssistantMessage(response.data.data, 'text');
//           break;
//         case 'summary':
//           response = await api.generateSummary(input, summaryType);
//           addAssistantMessage(response.data.data, 'summary');
//           break;
//         case 'quiz':
//           response = await api.generateQuiz(input, quizOptions.numberOfQuestions, quizOptions.difficulty, quizOptions.questionType);
//           addAssistantMessage(response.data.data, 'quiz');
//           break;
//         case 'flashcards':
//           response = await api.generateFlashcards(input, flashcardType);
//           addAssistantMessage(response.data.data, 'flashcards');
//           break;
//         case 'image':
//           response = await api.generateImage(input);
//           addAssistantMessage(response.data.data, 'image');
//           break;
//         default:
//           throw new Error('Unknown feature');
//       }
//     } catch (error: any) {
//       const errorMessage = error.response?.data?.error || 'An error occurred.';
//       toast.error(errorMessage);
//       addAssistantMessage(errorMessage, 'error');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const addAssistantMessage = (content: any, type: Message['type']) => {
//     const assistantMessage: Message = { id: Date.now().toString(), role: 'assistant', content, type };
//     setMessages(prev => [...prev, assistantMessage]);
//   };

//   const renderMessageContent = (message: Message) => {
//     switch (message.type) {
//       case 'text':
//         return (
//           <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl mb-3 border border-slate-200 dark:border-slate-700 shadow-sm prose prose-slate dark:prose-invert max-w-none">
//             <ReactMarkdown>{message.content}</ReactMarkdown>
//           </div>
//         );
//       case 'summary':
//         return <SummaryResponse data={message.content} />;
//       case 'quiz':
//         return <QuizResponse data={message.content} />;
//       case 'flashcards':
//         return <FlashcardsResponse data={message.content} />;
//       case 'image':
//         return (
//           <div className="flex flex-col items-center space-y-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
//             <img 
//               src={message.content.imageUrl} 
//               alt="Generated" 
//               className="rounded-xl max-w-sm shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform duration-300" 
//             />
//             <button 
//               className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105" 
//               onClick={() => navigator.clipboard.writeText(message.content.imageUrl)}
//             >
//               📋 Copy Image URL
//             </button>
//           </div>
//         );
//       case 'error':
//         return (
//           <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
//             <p className="text-red-600 dark:text-red-400 font-medium">❌ {message.content}</p>
//           </div>
//         );
//       default:
//         return (
//           <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
//             <p className="text-yellow-700 dark:text-yellow-300">⚠️ Unsupported message type</p>
//           </div>
//         );
//     }
//   };

//   // Feature titles and prompts
//   const featureTitles: Record<string, string> = {
//     ask: '🤖 Ask AI',
//     summary: '📄 Generate Summary',
//     quiz: '❓ Quiz Generator',
//     flashcards: '🗂️ Flashcards',
//     image: '🎨 Image Generation',
//   };
//   const featurePrompts: Record<string, string> = {
//     ask: 'Type your question...',
//     summary: 'Paste text to summarize...',
//     quiz: 'Paste text to generate quiz...',
//     flashcards: 'Paste text to generate flashcards...',
//     image: 'Describe the image you want...',
//   };

//   const getFeatureGradient = (featureId: string) => {
//     const gradients: Record<string, string> = {
//       ask: 'from-blue-600 to-indigo-600',
//       summary: 'from-emerald-600 to-teal-600',
//       quiz: 'from-purple-600 to-pink-600',
//       flashcards: 'from-orange-600 to-red-600',
//       image: 'from-violet-600 to-purple-600',
//     };
//     return gradients[featureId] || 'from-indigo-600 to-purple-600';
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
//       {/* Header */}
//       <div className="flex-shrink-0 p-6 border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
//         <div className="flex items-center space-x-3">
//           <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getFeatureGradient(featureId || 'ask')} flex items-center justify-center shadow-lg`}>
//             <span className="text-2xl">
//               {featureId === 'ask' ? '🤖' : featureId === 'summary' ? '📄' : featureId === 'quiz' ? '❓' : featureId === 'flashcards' ? '🗂️' : '🎨'}
//             </span>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
//               {featureTitles[featureId || 'ask']}
//             </h2>
//             <p className="text-slate-500 dark:text-slate-400 text-sm">AI-powered assistance at your fingertips</p>
//           </div>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-6 space-y-4">
//         {messages.length === 0 && (
//           <div className="flex items-center justify-center h-full">
//             <div className="text-center max-w-md">
//               <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getFeatureGradient(featureId || 'ask')} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
//                 <span className="text-3xl">
//                   {featureId === 'ask' ? '🤖' : featureId === 'summary' ? '📄' : featureId === 'quiz' ? '❓' : featureId === 'flashcards' ? '🗂️' : '🎨'}
//                 </span>
//               </div>
//               <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
//                 Ready to help you learn!
//               </h3>
//               <p className="text-slate-500 dark:text-slate-400">
//                 Start by typing your {featureId === 'ask' ? 'question' : featureId === 'image' ? 'description' : 'content'} below.
//               </p>
//             </div>
//           </div>
//         )}
        
//         {messages.map(msg => (
//           <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
//             <div className={`max-w-4xl ${msg.role === 'user' ? 'ml-12' : 'mr-12'}`}>
//               {msg.role === 'user' ? (
//                 <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-2xl rounded-tr-md shadow-lg">
//                   <p className="font-medium">{msg.content}</p>
//                 </div>
//               ) : (
//                 <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-md shadow-lg border border-slate-200 dark:border-slate-700">
//                   {renderMessageContent(msg)}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
        
//         {isLoading && (
//           <div className="flex justify-start animate-fade-in">
//             <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-md shadow-lg border border-slate-200 dark:border-slate-700 p-6 max-w-xs">
//               <div className="flex items-center space-x-3">
//                 <div className="flex space-x-1">
//                   <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
//                   <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                   <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                 </div>
//                 <p className="text-slate-600 dark:text-slate-400 font-medium">AI is thinking...</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Input Form */}
//       <div className="flex-shrink-0 p-6 border-t border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
//         <form onSubmit={handleSendMessage} className="flex flex-wrap gap-3 items-end">
//           <div className="flex-1 min-w-0">
//             <textarea
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' && !e.shiftKey) {
//                   e.preventDefault();
//                   handleSendMessage(e);
//                 }
//               }}
//               placeholder={featurePrompts[featureId || 'ask']}
//               className="w-full p-4 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-sm"
//               disabled={isLoading}
//               rows={1}
//               style={{ minHeight: '56px', maxHeight: '120px' }}
//             />
//           </div>

//           {/* Feature-specific controls */}
//           <div className="flex flex-wrap gap-2">
//             {featureId === 'summary' && (
//               <select
//                 value={summaryType}
//                 onChange={e => setSummaryType(e.target.value as 'paragraph' | 'keypoints' | 'bullets')}
//                 className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 shadow-sm"
//                 disabled={isLoading}
//                 title="Summary Type"
//               >
//                 <option value="paragraph">📝 Paragraph</option>
//                 <option value="keypoints">🔑 Key Points</option>
//                 <option value="bullets">• Bullet List</option>
//               </select>
//             )}
            
//             {featureId === 'quiz' && (
//               <>
//                 <input
//                   type="number"
//                   min={1}
//                   max={20}
//                   value={quizOptions.numberOfQuestions}
//                   onChange={e => setQuizOptions(q => ({ ...q, numberOfQuestions: Number(e.target.value) }))}
//                   className="w-20 px-3 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm text-center"
//                   disabled={isLoading}
//                   title="Number of Questions"
//                 />
//                 <select
//                   value={quizOptions.difficulty}
//                   onChange={e => setQuizOptions(q => ({ ...q, difficulty: e.target.value }))}
//                   className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm"
//                   disabled={isLoading}
//                   title="Difficulty"
//                 >
//                   <option value="easy">😊 Easy</option>
//                   <option value="medium">🤔 Medium</option>
//                   <option value="hard">😰 Hard</option>
//                 </select>
//                 <select
//                   value={quizOptions.questionType}
//                   onChange={e => setQuizOptions(q => ({ ...q, questionType: e.target.value }))}
//                   className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm"
//                   disabled={isLoading}
//                   title="Question Type"
//                 >
//                   <option value="multiple-choice">🔤 Multiple Choice</option>
//                   <option value="true-false">✅ True/False</option>
//                   <option value="short-answer">📝 Short Answer</option>
//                   <option value="mixed">🎯 Mixed</option>
//                 </select>
//               </>
//             )}
            
//             {featureId === 'flashcards' && (
//               <select
//                 value={flashcardType}
//                 onChange={e => setFlashcardType(e.target.value as 'basic' | 'qa' | 'cloze')}
//                 className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 shadow-sm"
//                 disabled={isLoading}
//                 title="Flashcard Type"
//               >
//                 <option value="basic">📚 Basic</option>
//                 <option value="qa">❓ Q&A</option>
//                 <option value="cloze">🔤 Cloze</option>
//               </select>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading || !input.trim()}
//             className={`px-6 py-3 bg-gradient-to-r ${getFeatureGradient(featureId || 'ask')} hover:shadow-lg text-white rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2`}
//           >
//             {isLoading ? (
//               <>
//                 <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                 <span>Sending...</span>
//               </>
//             ) : (
//               <>
//                 <span>Send</span>
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                 </svg>
//               </>
//             )}
//           </button>
//         </form>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FeatureWorkspace;





// src/pages/Dashboard/FeatureWorkspace.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Message } from '../../../types';
import * as api from '../../../api';
import toast from 'react-hot-toast';

// Import feature-specific response renderers
import SummaryResponse from '../../../components/features/SummaryResponse';
import QuizResponse from '../../../components/features/QuizResponse';
import FlashcardsResponse from '../../../components/features/FlashcardsResponse';
import type { Message, Difficulty } from '../../../types';

import ReactMarkdown from 'react-markdown';

const FeatureWorkspace = () => {
  const { featureId } = useParams<{ featureId: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [summaryType, setSummaryType] = useState<'paragraph' | 'keypoints' | 'bullets'>('paragraph');
  // const [quizOptions, setQuizOptions] = useState({
  //   numberOfQuestions: 5,
  //   difficulty: 'medium',
  //   questionType: 'multiple-choice',
  // });
  const [quizOptions, setQuizOptions] = useState<{
  numberOfQuestions: number;
  difficulty: Difficulty;
  questionType: string;
}>({
  numberOfQuestions: 5,
  difficulty: 'medium',
  questionType: 'multiple-choice',
});

  const [flashcardType, setFlashcardType] = useState<'basic' | 'qa' | 'cloze'>('basic');

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setIsLoading(true);
    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input, type: 'text' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    try {
      let response;
      switch (featureId) {
        case 'ask':
          response = await api.askQuestion(input);
          addAssistantMessage(response.data.data, 'text');
          break;
        case 'summary':
          response = await api.generateSummary(input, summaryType);
          addAssistantMessage(response.data.data, 'summary');
          break;
        case 'quiz':
          response = await api.generateQuiz(input, quizOptions.numberOfQuestions, quizOptions.difficulty, quizOptions.questionType);
          addAssistantMessage(response.data.data, 'quiz');
          break;
        case 'flashcards':
          response = await api.generateFlashcards(input, flashcardType);
          addAssistantMessage(response.data.data, 'flashcards');
          break;
        case 'image':
          response = await api.generateImage(input);
          addAssistantMessage(response.data.data, 'image');
          break;
        default:
          throw new Error('Unknown feature');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'An error occurred.';
      toast.error(errorMessage);
      addAssistantMessage(errorMessage, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const addAssistantMessage = (content: any, type: Message['type']) => {
    const assistantMessage: Message = { id: Date.now().toString(), role: 'assistant', content, type };
    setMessages(prev => [...prev, assistantMessage]);
  };

  const renderMessageContent = (message: Message) => {
    switch (message.type) {
      case 'text':
        return (
          <div className="p-6">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <div className="text-slate-800 dark:text-slate-100 leading-relaxed">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 mt-6">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2 mt-4">{children}</h3>,
                    p: ({ children }) => <p className="text-slate-700 dark:text-slate-300 mb-4 leading-7 text-base">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700 dark:text-slate-300 ml-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-4 text-slate-700 dark:text-slate-300 ml-2">{children}</ol>,
                    li: ({ children }) => <li className="text-slate-700 dark:text-slate-300 leading-6">{children}</li>,
                    strong: ({ children }) => <strong className="font-semibold text-slate-900 dark:text-white">{children}</strong>,
                    em: ({ children }) => <em className="italic text-slate-800 dark:text-slate-200">{children}</em>,
                    code: ({ children }) => <code className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded font-mono text-sm border border-slate-200 dark:border-slate-700">{children}</code>,
                    pre: ({ children }) => <pre className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 overflow-x-auto mb-4">{children}</pre>,
                    blockquote: ({ children }) => <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-r-lg mb-4 italic text-slate-700 dark:text-slate-300">{children}</blockquote>,
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        );
      case 'summary':
        return (
          <div className="p-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                <span className="mr-2">📄</span> Summary Generated
              </h4>
            </div>
            <SummaryResponse data={message.content} />
          </div>
        );
      case 'quiz':
        return (
          <div className="p-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center">
                <span className="mr-2">❓</span> Quiz Generated
              </h4>
            </div>
            <QuizResponse data={message.content} />
          </div>
        );
      case 'flashcards':
        return (
          <div className="p-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center">
                <span className="mr-2">🗂️</span> Flashcards Generated
              </h4>
            </div>
            <FlashcardsResponse data={message.content} />
          </div>
        );
      case 'image':
        return (
          <div className="p-6">
            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-violet-800 dark:text-violet-200 mb-2 flex items-center">
                <span className="mr-2">🎨</span> Image Generated
              </h4>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img 
                src={message.content.imageUrl} 
                alt="Generated" 
                className="rounded-xl max-w-md w-full shadow-xl border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform duration-300" 
              />
              <button 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2" 
                onClick={() => {
                  navigator.clipboard.writeText(message.content.imageUrl);
                  toast.success('Image URL copied to clipboard!');
                }}
              >
                <span>📋</span>
                <span>Copy Image URL</span>
              </button>
            </div>
          </div>
        );
      case 'error':
        return (
          <div className="p-6">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center">
                    <span className="text-red-600 dark:text-red-400">❌</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-1">Error occurred</h4>
                  <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <span className="text-yellow-600 dark:text-yellow-400 text-xl">⚠️</span>
                <p className="text-yellow-800 dark:text-yellow-200 font-medium">Unsupported message type</p>
              </div>
            </div>
          </div>
        );
    }
  };

  // Feature titles and prompts
  const featureTitles: Record<string, string> = {
    ask: '🤖 Ask AI',
    summary: '📄 Generate Summary',
    quiz: '❓ Quiz Generator',
    flashcards: '🗂️ Flashcards',
    image: '🎨 Image Generation',
  };
  const featurePrompts: Record<string, string> = {
    ask: 'Type your question...',
    summary: 'Paste text to summarize...',
    quiz: 'Paste text to generate quiz...',
    flashcards: 'Paste text to generate flashcards...',
    image: 'Describe the image you want...',
  };

  const getFeatureGradient = (featureId: string) => {
    const gradients: Record<string, string> = {
      ask: 'from-blue-600 to-indigo-600',
      summary: 'from-emerald-600 to-teal-600',
      quiz: 'from-purple-600 to-pink-600',
      flashcards: 'from-orange-600 to-red-600',
      image: 'from-violet-600 to-purple-600',
    };
    return gradients[featureId] || 'from-indigo-600 to-purple-600';
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="flex-shrink-0 p-6 border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getFeatureGradient(featureId || 'ask')} flex items-center justify-center shadow-lg`}>
            <span className="text-2xl">
              {featureId === 'ask' ? '🤖' : featureId === 'summary' ? '📄' : featureId === 'quiz' ? '❓' : featureId === 'flashcards' ? '🗂️' : '🎨'}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              {featureTitles[featureId || 'ask']}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">AI-powered assistance at your fingertips</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center max-w-md">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getFeatureGradient(featureId || 'ask')} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <span className="text-3xl">
                  {featureId === 'ask' ? '🤖' : featureId === 'summary' ? '📄' : featureId === 'quiz' ? '❓' : featureId === 'flashcards' ? '🗂️' : '🎨'}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Ready to help you learn!
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Start by typing your {featureId === 'ask' ? 'question' : featureId === 'image' ? 'description' : 'content'} below.
              </p>
            </div>
          </div>
        )}
        
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
            <div className={`max-w-4xl ${msg.role === 'user' ? 'ml-12' : 'mr-12'}`}>
              {msg.role === 'user' ? (
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-2xl rounded-tr-md shadow-lg">
                  <p className="font-medium">{msg.content}</p>
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-md shadow-lg border border-slate-200 dark:border-slate-700">
                  {renderMessageContent(msg)}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-md shadow-lg border border-slate-200 dark:border-slate-700 p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">AI is thinking...</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <div className="flex-shrink-0 p-6 border-t border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <form onSubmit={handleSendMessage} className="flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-0">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
              placeholder={featurePrompts[featureId || 'ask']}
              className="w-full p-4 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-sm"
              disabled={isLoading}
              rows={1}
              style={{ minHeight: '56px', maxHeight: '120px' }}
            />
          </div>

          {/* Feature-specific controls */}
          <div className="flex flex-wrap gap-2">
            {featureId === 'summary' && (
              <select
                value={summaryType}
                onChange={e => setSummaryType(e.target.value as 'paragraph' | 'keypoints' | 'bullets')}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 shadow-sm"
                disabled={isLoading}
                title="Summary Type"
              >
                <option value="paragraph">📝 Paragraph</option>
                <option value="keypoints">🔑 Key Points</option>
                <option value="bullets">• Bullet List</option>
              </select>
            )}
            
            {featureId === 'quiz' && (
              <>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={quizOptions.numberOfQuestions}
                  // onChange={e => setQuizOptions(q => ({ ...q, numberOfQuestions: Number(e.target.value) }))}
                  onChange={e => setQuizOptions(q => ({ ...q, difficulty: e.target.value as Difficulty }))}

                  className="w-20 px-3 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm text-center"
                  disabled={isLoading}
                  title="Number of Questions"
                />
                <select
                  value={quizOptions.difficulty}
                  onChange={e => setQuizOptions(q => ({ ...q, difficulty: e.target.value }))}
                  className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm"
                  disabled={isLoading}
                  title="Difficulty"
                >
                  <option value="easy">😊 Easy</option>
                  <option value="medium">🤔 Medium</option>
                  <option value="hard">😰 Hard</option>
                </select>
                <select
                  value={quizOptions.questionType}
                  onChange={e => setQuizOptions(q => ({ ...q, questionType: e.target.value }))}
                  className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm"
                  disabled={isLoading}
                  title="Question Type"
                >
                  <option value="multiple-choice">🔤 Multiple Choice</option>
                  <option value="true-false">✅ True/False</option>
                  <option value="short-answer">📝 Short Answer</option>
                  <option value="mixed">🎯 Mixed</option>
                </select>
              </>
            )}
            
            {featureId === 'flashcards' && (
              <select
                value={flashcardType}
                onChange={e => setFlashcardType(e.target.value as 'basic' | 'qa' | 'cloze')}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 shadow-sm"
                disabled={isLoading}
                title="Flashcard Type"
              >
                <option value="basic">📚 Basic</option>
                <option value="qa">❓ Q&A</option>
                <option value="cloze">🔤 Cloze</option>
              </select>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={`px-6 py-3 bg-gradient-to-r ${getFeatureGradient(featureId || 'ask')} hover:shadow-lg text-white rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FeatureWorkspace;