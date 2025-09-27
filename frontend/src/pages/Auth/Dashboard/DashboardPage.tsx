// // src/pages/Dashboard/DashboardPage.tsx

// import { Link } from 'react-router-dom';
// import { ChatBubbleLeftRightIcon, DocumentTextIcon, QuestionMarkCircleIcon, PhotoIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline';

// const features = [
//   { id: 'ask', name: 'Ask AI', icon: ChatBubbleLeftRightIcon, path: '/feature/ask' },
//   { id: 'summary', name: 'Generate Summary', icon: DocumentTextIcon, path: '/feature/summary' },
//   { id: 'quiz', name: 'Quiz Generator', icon: QuestionMarkCircleIcon, path: '/feature/quiz' },
//   { id: 'flashcards', name: 'Flashcards', icon: DocumentArrowUpIcon, path: '/feature/flashcards' },
//   { id: 'image', name: 'Image Generation', icon: PhotoIcon, path: '/feature/image' },
// ];

// const DashboardPage = () => {
//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="flex items-center gap-3 mb-8">
//         <span className="inline-block bg-indigo-600 rounded-full p-2">
//           <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#6366F1"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="white" fontFamily="Arial" fontWeight="bold">AI</text></svg>
//         </span>
//         <h1 className="text-4xl font-bold text-indigo-700 tracking-tight">StudyHelperAI Dashboard</h1>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {features.map((feature) => (
//           <Link key={feature.id} to={feature.path} className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
//             <feature.icon className="h-10 w-10 text-indigo-500 mb-4" />
//             <h3 className="text-xl font-semibold">{feature.name}</h3>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;


// import { useState, useEffect } from 'react';

// // Mock icons since we can't import heroicons
// const ChatIcon = () => (
//   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//   </svg>
// );

// const DocumentIcon = () => (
//   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//   </svg>
// );

// const QuizIcon = () => (
//   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//   </svg>
// );

// const FlashcardIcon = () => (
//   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//   </svg>
// );

// const ImageIcon = () => (
//   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//   </svg>
// );

// const features = [
//   { 
//     id: 'ask', 
//     name: 'Ask AI', 
//     description: 'Get instant answers to your questions',
//     icon: ChatIcon, 
//     path: '/feature/ask',
//     color: 'from-blue-500 to-purple-600',
//     emoji: '🤖',
//     stats: '24/7 Available'
//   },
//   { 
//     id: 'summary', 
//     name: 'Generate Summary', 
//     description: 'Create concise summaries from any content',
//     icon: DocumentIcon, 
//     path: '/feature/summary',
//     color: 'from-green-500 to-teal-600',
//     emoji: '📄',
//     stats: 'Smart Analysis'
//   },
//   { 
//     id: 'quiz', 
//     name: 'Quiz Generator', 
//     description: 'Test your knowledge with AI-generated quizzes',
//     icon: QuizIcon, 
//     path: '/feature/quiz',
//     color: 'from-orange-500 to-red-600',
//     emoji: '🧠',
//     stats: 'Adaptive Learning'
//   },
//   { 
//     id: 'flashcards', 
//     name: 'Flashcards', 
//     description: 'Study efficiently with smart flashcards',
//     icon: FlashcardIcon, 
//     path: '/feature/flashcards',
//     color: 'from-pink-500 to-rose-600',
//     emoji: '📚',
//     stats: 'Memory Boost'
//   },
//   { 
//     id: 'image', 
//     name: 'Image Generation', 
//     description: 'Create visual content with AI',
//     icon: ImageIcon, 
//     path: '/feature/image',
//     color: 'from-purple-500 to-indigo-600',
//     emoji: '🎨',
//     stats: 'Creative AI'
//   },
// ];

// const DashboardPage = () => {
//   const [greeting, setGreeting] = useState('');
//   const [currentTime, setCurrentTime] = useState('');

//   useEffect(() => {
//     const updateGreeting = () => {
//       const hour = new Date().getHours();
//       if (hour < 12) setGreeting('Good Morning');
//       else if (hour < 17) setGreeting('Good Afternoon');
//       else setGreeting('Good Evening');
//     };

//     const updateTime = () => {
//       setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
//     };

//     updateGreeting();
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       <div className="relative z-10 p-8">
//         {/* Header Section */}
//         <div className="mb-12 animate-fade-in-up">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 animate-pulse">
//                   <span className="text-2xl text-white">🤖</span>
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-bounce delay-1000">
//                   <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
//                 </div>
//               </div>
//               <div>
//                 <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-2">
//                   {greeting}! 👋
//                 </h1>
//                 <p className="text-gray-400 text-lg">Welcome back to StudyHelper AI</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <div className="text-3xl font-bold text-white mb-1">{currentTime}</div>
//               <div className="text-gray-400">Let's learn something new today</div>
//             </div>
//           </div>

//           {/* Stats Bar */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//             <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-fade-in-up delay-300">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-blue-500/20 rounded-xl">
//                   <span className="text-xl">⚡</span>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-white">Fast</div>
//                   <div className="text-gray-400 text-sm">AI Responses</div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-fade-in-up delay-500">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-green-500/20 rounded-xl">
//                   <span className="text-xl">🎯</span>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-white">Smart</div>
//                   <div className="text-gray-400 text-sm">Learning</div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-fade-in-up delay-700">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-purple-500/20 rounded-xl">
//                   <span className="text-xl">🚀</span>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-white">Boost</div>
//                   <div className="text-gray-400 text-sm">Productivity</div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-fade-in-up delay-900">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-pink-500/20 rounded-xl">
//                   <span className="text-xl">✨</span>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-white">Magic</div>
//                   <div className="text-gray-400 text-sm">AI Tools</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="mb-8 animate-fade-in-up delay-1000">
//           <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
//             <span>🛠️</span>
//             <span>AI-Powered Tools</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature, index) => (
//               <a
//                 key={feature.id}
//                 href={feature.path}
//                 className={`group relative block p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 animate-fade-in-up`}
//                 style={{ animationDelay: `${1200 + index * 200}ms` }}
//               >
//                 {/* Gradient overlay */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
                
//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Icon and emoji */}
//                   <div className="flex items-center justify-between mb-6">
//                     <div className={`p-4 bg-gradient-to-r ${feature.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-6`}>
//                       <feature.icon className="text-white" />
//                     </div>
//                     <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
//                       {feature.emoji}
//                     </div>
//                   </div>

//                   {/* Title and description */}
//                   <div className="mb-4">
//                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
//                       {feature.name}
//                     </h3>
//                     <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
//                       {feature.description}
//                     </p>
//                   </div>

//                   {/* Stats */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
//                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                       <span>{feature.stats}</span>
//                     </div>
//                     <svg className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Hover effect border */}
//                 <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-500/50 transition-colors duration-300"></div>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="animate-fade-in-up delay-2000">
//           <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
//             <span>⚡</span>
//             <span>Quick Actions</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
//               <div className="flex items-center space-x-4">
//                 <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
//                   <span className="text-2xl">💡</span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-1">Need Help?</h3>
//                   <p className="text-gray-400 text-sm">Ask AI anything you want to learn</p>
//                 </div>
//                 <svg className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
//               <div className="flex items-center space-x-4">
//                 <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors duration-300">
//                   <span className="text-2xl">🎓</span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-1">Start Learning</h3>
//                   <p className="text-gray-400 text-sm">Generate your first quiz or summary</p>
//                 </div>
//                 <svg className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .delay-300 { animation-delay: 300ms; }
//         .delay-500 { animation-delay: 500ms; }
//         .delay-700 { animation-delay: 700ms; }
//         .delay-900 { animation-delay: 900ms; }
//         .delay-1000 { animation-delay: 1000ms; }
//         .delay-1200 { animation-delay: 1200ms; }
//         .delay-2000 { animation-delay: 2000ms; }
//       `}</style>
//     </div>
//   );
// };

// export default DashboardPage;


// import { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../../../context/AuthContext';

// // Mock icons since we can't import heroicons
// const ChatIcon = () => (
//   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//   </svg>
// );

// const DocumentIcon = () => (
//   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//   </svg>
// );

// const QuizIcon = () => (
//   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//   </svg>
// );

// const FlashcardIcon = () => (
//   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//   </svg>
// );

// const ImageIcon = () => (
//   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//   </svg>
// );

// const features = [
//   { 
//     id: 'ask', 
//     name: 'Ask AI', 
//     description: 'Get instant answers to your questions',
//     icon: ChatIcon, 
//     path: '/feature/ask',
//     color: 'from-blue-500 to-purple-600',
//     emoji: '🤖',
//     stats: '24/7 Available'
//   },
//   { 
//     id: 'summary', 
//     name: 'Generate Summary', 
//     description: 'Create concise summaries from any content',
//     icon: DocumentIcon, 
//     path: '/feature/summary',
//     color: 'from-green-500 to-teal-600',
//     emoji: '📄',
//     stats: 'Smart Analysis'
//   },
//   { 
//     id: 'quiz', 
//     name: 'Quiz Generator', 
//     description: 'Test your knowledge with AI-generated quizzes',
//     icon: QuizIcon, 
//     path: '/feature/quiz',
//     color: 'from-orange-500 to-red-600',
//     emoji: '🧠',
//     stats: 'Adaptive Learning'
//   },
//   { 
//     id: 'flashcards', 
//     name: 'Flashcards', 
//     description: 'Study efficiently with smart flashcards',
//     icon: FlashcardIcon, 
//     path: '/feature/flashcards',
//     color: 'from-pink-500 to-rose-600',
//     emoji: '📚',
//     stats: 'Memory Boost'
//   },
//   { 
//     id: 'image', 
//     name: 'Image Generation', 
//     description: 'Create visual content with AI',
//     icon: ImageIcon, 
//     path: '/feature/image',
//     color: 'from-purple-500 to-indigo-600',
//     emoji: '🎨',
//     stats: 'Creative AI'
//   },
// ];


// const DashboardPage = () => {
//   const [greeting, setGreeting] = useState('');
//   const [currentTime, setCurrentTime] = useState('');
//   const auth = useContext(AuthContext);
//   const user = auth?.user;
//   const firstName = user?.profile?.firstName || user?.username || 'User';

//   useEffect(() => {
//     const updateGreeting = () => {
//       const hour = new Date().getHours();
//       if (hour < 12) setGreeting('Good Morning');
//       else if (hour < 17) setGreeting('Good Afternoon');
//       else setGreeting('Good Evening');
//     };
//     const updateTime = () => {
//       setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
//     };
//     updateGreeting();
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
//       {/* Subtle background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 p-8">
//         {/* Header Section */}
//         <div className="mb-12 animate-fade-in-up">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 animate-pulse">
//                   <span className="text-2xl text-white">🤖</span>
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-bounce delay-1000">
//                   <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
//                 </div>
//               </div>
//               <div>
//                 <h1 className="text-4xl font-bold text-gray-800 mb-2">
//                   {greeting}, {firstName}! 👋
//                 </h1>
//                 <p className="text-gray-600 text-lg">Welcome back to StudyHelper AI</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <div className="text-3xl font-bold text-gray-800 mb-1">{currentTime}</div>
//               <div className="text-gray-600">Let's learn something new today</div>
//             </div>
//           </div>

//           {/* Stats Bar */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//             <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 shadow-sm animate-fade-in-up delay-300">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-blue-100 rounded-xl">
//                   <span className="text-xl">⚡</span>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-800">Fast</div>
//                   <div className="text-gray-600 text-sm">AI Responses</div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 shadow-sm animate-fade-in-up delay-500">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-green-100 rounded-xl">
//                   <span className="text-xl">🎯</span>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-800">Smart</div>
//                   <div className="text-gray-600 text-sm">Learning</div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 shadow-sm animate-fade-in-up delay-700">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-purple-100 rounded-xl">
//                   <span className="text-xl">🚀</span>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-800">Boost</div>
//                   <div className="text-gray-600 text-sm">Productivity</div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 shadow-sm animate-fade-in-up delay-900">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-pink-100 rounded-xl">
//                   <span className="text-xl">✨</span>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-800">Magic</div>
//                   <div className="text-gray-600 text-sm">AI Tools</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="mb-8 animate-fade-in-up delay-1000">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
//             <span>🛠️</span>
//             <span>AI-Powered Tools</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature, index) => (
//               <a
//                 key={feature.id}
//                 href={feature.path}
//                 className={`group relative block p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 transform hover:scale-105 animate-fade-in-up`}
//                 style={{ animationDelay: `${1200 + index * 200}ms` }}
//               >
//                 {/* Gradient overlay */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Icon and emoji */}
//                   <div className="flex items-center justify-between mb-6">
//                     <div className={`p-4 bg-gradient-to-r ${feature.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-6`}>
//                       <feature.icon />
//                     </div>
//                     <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
//                       {feature.emoji}
//                     </div>
//                   </div>
//                   {/* Title and description */}
//                   <div className="mb-4">
//                     <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
//                       {feature.name}
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//                       {feature.description}
//                     </p>
//                   </div>
//                   {/* Stats */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
//                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                       <span>{feature.stats}</span>
//                     </div>
//                     <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </div>
//                 </div>
//                 {/* Hover effect border */}
//                 <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-500/20 transition-colors duration-300"></div>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="animate-fade-in-up delay-2000">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
//             <span>⚡</span>
//             <span>Quick Actions</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 cursor-pointer group">
//               <div className="flex items-center space-x-4">
//                 <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
//                   <span className="text-2xl">💡</span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-1">Need Help?</h3>
//                   <p className="text-gray-600 text-sm">Ask AI anything you want to learn</p>
//                 </div>
//                 <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </div>
//             </div>
//             <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 cursor-pointer group">
//               <div className="flex items-center space-x-4">
//                 <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-300">
//                   <span className="text-2xl">🎓</span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-1">Start Learning</h3>
//                   <p className="text-gray-600 text-sm">Generate your first quiz or summary</p>
//                 </div>
//                 <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .delay-300 { animation-delay: 300ms; }
//         .delay-500 { animation-delay: 500ms; }
//         .delay-700 { animation-delay: 700ms; }
//         .delay-900 { animation-delay: 900ms; }
//         .delay-1000 { animation-delay: 1000ms; }
//         .delay-1200 { animation-delay: 1200ms; }
//         .delay-2000 { animation-delay: 2000ms; }
//       `}</style>
//     </div>
//   );
// };

// export default DashboardPage;




import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

// Mock icons since we can't import heroicons
const ChatIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const QuizIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FlashcardIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const ImageIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const features = [
  { 
    id: 'ask', 
    name: 'Ask AI', 
    description: 'Get instant answers to your questions',
    icon: ChatIcon, 
    path: '/feature/ask',
    color: 'from-blue-500 to-purple-600',
    emoji: '🤖',
    stats: '24/7 Available'
  },
  { 
    id: 'summary', 
    name: 'Generate Summary', 
    description: 'Create concise summaries from any content',
    icon: DocumentIcon, 
    path: '/feature/summary',
    color: 'from-green-500 to-teal-600',
    emoji: '📄',
    stats: 'Smart Analysis'
  },
  { 
    id: 'quiz', 
    name: 'Quiz Generator', 
    description: 'Test your knowledge with AI-generated quizzes',
    icon: QuizIcon, 
    path: '/feature/quiz',
    color: 'from-orange-500 to-red-600',
    emoji: '🧠',
    stats: 'Adaptive Learning'
  },
  { 
    id: 'flashcards', 
    name: 'Flashcards', 
    description: 'Study efficiently with smart flashcards',
    icon: FlashcardIcon, 
    path: '/feature/flashcards',
    color: 'from-pink-500 to-rose-600',
    emoji: '📚',
    stats: 'Memory Boost'
  },
  { 
    id: 'image', 
    name: 'Image Generation', 
    description: 'Create visual content with AI',
    icon: ImageIcon, 
    path: '/feature/image',
    color: 'from-purple-500 to-indigo-600',
    emoji: '🎨',
    stats: 'Creative AI'
  },
];


const DashboardPage = () => {
  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const auth = useContext(AuthContext);
  const user = auth?.user;
  const firstName = user?.profile?.firstName || user?.username || 'User';

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting('Good Morning');
      else if (hour < 17) setGreeting('Good Afternoon');
      else setGreeting('Good Evening');
    };
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateGreeting();
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Header Section */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 animate-pulse">
                  <span className="text-2xl text-white">🤖</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-bounce delay-1000">
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {greeting}, {firstName}! 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Welcome back to StudyHelper AI</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">{currentTime}</div>
              <div className="text-gray-600 dark:text-gray-400">Let's learn something new today</div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 dark:border-slate-700 shadow-sm animate-fade-in-up delay-300">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Fast</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">AI Responses</div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 dark:border-slate-700 shadow-sm animate-fade-in-up delay-500">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Smart</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Learning</div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 dark:border-slate-700 shadow-sm animate-fade-in-up delay-700">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Boost</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Productivity</div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 dark:border-slate-700 shadow-sm animate-fade-in-up delay-900">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Magic</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">AI Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-8 animate-fade-in-up delay-1000">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center space-x-3">
            <span>🛠️</span>
            <span>AI-Powered Tools</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <a
                key={feature.id}
                href={feature.path}
                className={`group relative block p-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${1200 + index * 200}ms` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and emoji */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 bg-gradient-to-r ${feature.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-6`}>
                      <feature.icon />
                    </div>
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {feature.emoji}
                    </div>
                  </div>
                  {/* Title and description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>{feature.stats}</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-500/20 transition-colors duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="animate-fade-in-up delay-2000">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center space-x-3">
            <span>⚡</span>
            <span>Quick Actions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Need Help?</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Ask AI anything you want to learn</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors duration-300">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Start Learning</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Generate your first quiz or summary</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-900 { animation-delay: 900ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1200 { animation-delay: 1200ms; }
        .delay-2000 { animation-delay: 2000ms; }
      `}</style>
    </div>
  );
};

export default DashboardPage;