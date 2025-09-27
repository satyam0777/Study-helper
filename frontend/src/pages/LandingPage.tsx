// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
//         <h1 className="text-4xl font-bold mb-4 text-indigo-700">Welcome to Study Helper AI</h1>
//         <p className="mb-8 text-gray-600">Your AI-powered assistant for smarter studying. Register or log in to get started!</p>
//         <div className="flex flex-col gap-4">
//           <Link to="/register" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">Register</Link>
//           <Link to="/login" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;



// import { useState } from 'react';

// const LandingPage = () => {
//   const [showAbout, setShowAbout] = useState(false);

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       {/* Floating AI elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 text-blue-400/20 text-6xl animate-bounce delay-300">🧠</div>
//         <div className="absolute top-32 right-20 text-purple-400/20 text-4xl animate-bounce delay-700">⚡</div>
//         <div className="absolute bottom-40 left-20 text-indigo-400/20 text-5xl animate-bounce delay-1000">🚀</div>
//         <div className="absolute bottom-20 right-10 text-cyan-400/20 text-3xl animate-bounce delay-1500">💡</div>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-lg text-center border border-white/20 animate-fade-in-up">
//         {/* AI-themed header with glowing effect */}
//         <div className="mb-8">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6 animate-pulse shadow-lg shadow-purple-500/50">
//             <span className="text-3xl text-white">🤖</span>
//           </div>
//           <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
//             StudyHelper AI
//           </h1>
//           <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full animate-pulse"></div>
//         </div>

//         <p className="mb-10 text-gray-300 text-lg leading-relaxed animate-fade-in-up delay-300">
//           Your AI-powered assistant for smarter studying. Unlock the future of learning with intelligent conversations and personalized guidance.
//         </p>

//         {/* Action buttons with hover effects */}
//         <div className="flex flex-col gap-4 mb-8">
//           <a 
//             href="/register" 
//             className="group relative w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 animate-fade-in-up delay-500 block text-center no-underline"
//           >
//             <span className="relative z-10">Start Your AI Journey</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//           </a>
          
//           <a 
//             href="/login" 
//             className="group relative w-full py-4 px-6 bg-white/10 text-white rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm animate-fade-in-up delay-700 block text-center no-underline"
//           >
//             <span className="relative z-10">Welcome Back</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </a>
//         </div>

//         {/* AI features preview */}
//         <div className="flex justify-center space-x-8 mb-8 opacity-60">
//           <div className="text-center animate-fade-in-up delay-1000">
//             <div className="text-2xl mb-2">💬</div>
//             <div className="text-xs text-gray-400">Smart Chat</div>
//           </div>
//           <div className="text-center animate-fade-in-up delay-1200">
//             <div className="text-2xl mb-2">📚</div>
//             <div className="text-xs text-gray-400">Study Guide</div>
//           </div>
//           <div className="text-center animate-fade-in-up delay-1400">
//             <div className="text-2xl mb-2">🎯</div>
//             <div className="text-xs text-gray-400">Personalized</div>
//           </div>
//         </div>
//       </div>

//       {/* Made by section */}
//       <div className="relative z-10 mt-8 animate-fade-in-up delay-1600">
//         <p className="text-gray-400 text-sm mb-2">Made with ❤️ by</p>
//         <button
//           onClick={() => setShowAbout(!showAbout)}
//           className="text-purple-400 hover:text-purple-300 font-semibold text-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg px-3 py-1"
//         >
//           Satyam
//         </button>
//       </div>

//       {/* About modal */}
//       {showAbout && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
//           <div className="bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-white/20 animate-scale-in shadow-2xl">
//             <div className="text-center">
//               <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl animate-pulse">
//                 👨‍💻
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//                 About Satyam
//               </h3>
//               <p className="text-gray-300 leading-relaxed mb-6">
//                 A passionate developer and AI enthusiast dedicated to creating innovative educational tools. 
//                 I believe in the power of artificial intelligence to transform how we learn and grow. 
//                 StudyHelper AI is my vision of making quality education accessible through intelligent technology.
//               </p>
//               <div className="flex justify-center space-x-4 mb-6">
//                 <div className="text-center">
//                   <div className="text-lg font-bold text-purple-400">AI</div>
//                   <div className="text-xs text-gray-500">Enthusiast</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-lg font-bold text-blue-400">Full Stack</div>
//                   <div className="text-xs text-gray-500">Developer</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-lg font-bold text-cyan-400">Educator</div>
//                   <div className="text-xs text-gray-500">At Heart</div>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setShowAbout(false)}
//                 className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

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

//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes scale-in {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes gradient-x {
//           0%, 100% {
//             background-size: 200% 200%;
//             background-position: left center;
//           }
//           50% {
//             background-size: 200% 200%;
//             background-position: right center;
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out forwards;
//         }

//         .animate-scale-in {
//           animation: scale-in 0.3s ease-out forwards;
//         }

//         .animate-gradient-x {
//           animation: gradient-x 3s ease infinite;
//         }

//         .delay-300 { animation-delay: 300ms; }
//         .delay-500 { animation-delay: 500ms; }
//         .delay-700 { animation-delay: 700ms; }
//         .delay-1000 { animation-delay: 1000ms; }
//         .delay-1200 { animation-delay: 1200ms; }
//         .delay-1400 { animation-delay: 1400ms; }
//         .delay-1500 { animation-delay: 1500ms; }
//         .delay-1600 { animation-delay: 1600ms; }
//         .delay-2000 { animation-delay: 2000ms; }
//       `}</style>
//     </div>
//   );
// };

// export default LandingPage;



// import { useState, useEffect } from 'react';

// const LandingPage = () => {
//   const [showAbout, setShowAbout] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
//       {/* Dynamic cursor following background */}
//       <div 
//         className="absolute inset-0 transition-all duration-1000 ease-out pointer-events-none"
//         style={{
//           background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.1), transparent 40%)`
//         }}
//       />

//       {/* Animated geometric grid */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `
//             linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px',
//           animation: 'grid-move 20s linear infinite'
//         }} />
//       </div>

//       {/* Floating AI neural network nodes */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
//             style={{
//               left: `${20 + (i * 12)}%`,
//               top: `${15 + (i % 3) * 25}%`,
//               animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
//               animationDelay: `${i * 0.2}s`
//             }}
//           >
//             <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
//           </div>
//         ))}
//       </div>

//       {/* Holographic background particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-spin-slow"></div>
//         <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-conic from-cyan-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-spin-reverse"></div>
//         <div className="absolute top-1/2 left-3/4 w-72 h-72 bg-gradient-conic from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-spin-slow delay-1000"></div>
//       </div>

//       {/* Matrix-style code rain effect */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute text-green-400 text-xs font-mono whitespace-pre"
//             style={{
//               left: `${i * 8}%`,
//               animation: `matrix-rain ${5 + i}s linear infinite`,
//               animationDelay: `${i * 0.5}s`
//             }}
//           >
//             {`01\n10\n11\n01\n00\n10\n11\n01`}
//           </div>
//         ))}
//       </div>

//       {/* Floating tech icons */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 text-cyan-400/30 text-4xl animate-float-1">⚡</div>
//         <div className="absolute top-32 right-20 text-purple-400/30 text-5xl animate-float-2">🧠</div>
//         <div className="absolute bottom-40 left-20 text-blue-400/30 text-3xl animate-float-3">🚀</div>
//         <div className="absolute bottom-20 right-10 text-indigo-400/30 text-4xl animate-float-4">💎</div>
//         <div className="absolute top-1/2 left-10 text-pink-400/30 text-3xl animate-float-5">✨</div>
//         <div className="absolute top-1/3 right-10 text-cyan-400/30 text-2xl animate-float-6">🔮</div>
//       </div>

//       {/* Main holographic card */}
//       <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'animate-hologram-enter' : 'opacity-0'}`}>
//         <div className="relative bg-gradient-to-br from-slate-800/40 via-purple-800/30 to-slate-800/40 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl w-full max-w-2xl text-center border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500 group">
//           {/* Holographic border effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-flow"></div>
          
//           {/* Glitch effect overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-purple-400/5 rounded-3xl animate-glitch opacity-0 group-hover:opacity-100"></div>

//           {/* AI Core Avatar */}
//           <div className="mb-10 relative">
//             <div className="inline-flex items-center justify-center w-32 h-32 relative">
//               {/* Rotating rings */}
//               <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
//               <div className="absolute inset-2 border border-purple-400/30 rounded-full animate-spin-reverse"></div>
//               <div className="absolute inset-4 border border-blue-400/30 rounded-full animate-spin-slow"></div>
              
//               {/* Core */}
//               <div className="w-20 h-20 bg-gradient-conic from-cyan-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center text-4xl animate-pulse shadow-lg shadow-cyan-500/50 relative z-10">
//                 <span className="text-white animate-float-core">🤖</span>
//               </div>
              
//               {/* Energy particles */}
//               {[...Array(6)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute w-1 h-1 bg-cyan-400 rounded-full"
//                   style={{
//                     top: '50%',
//                     left: '50%',
//                     transform: `rotate(${i * 60}deg) translateY(-50px)`,
//                     animation: `orbit ${2 + i * 0.2}s linear infinite`
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Futuristic Title */}
//           <div className="mb-8">
//             <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-glow">
//               StudyHelper AI
//             </h1>
//             <div className="flex justify-center mb-4">
//               <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
//             </div>
//             <p className="text-cyan-400/80 font-mono text-lg tracking-wider animate-type">
//               &gt; INITIALIZING_AI_SYSTEMS...
//             </p>
//           </div>

//           <p className="mb-12 text-slate-300 text-xl leading-relaxed max-w-lg mx-auto animate-fade-in-up delay-500">
//             Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">next generation</span> of AI-powered learning. 
//             Unlock limitless knowledge with our advanced neural learning assistant.
//           </p>

//           {/* Futuristic Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-6 mb-10 justify-center">
//             <a 
//               href="/register" 
//               className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 animate-fade-in-up delay-700 no-underline overflow-hidden"
//             >
//               <span className="relative z-10 flex items-center justify-center gap-3">
//                 <span className="animate-pulse">⚡</span>
//                 ACTIVATE AI
//                 <span className="animate-pulse">⚡</span>
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//               <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </a>
            
//             <a 
//               href="/login" 
//               className="group relative px-10 py-5 bg-slate-800/50 text-cyan-400 rounded-2xl font-bold text-lg border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/20 backdrop-blur-sm animate-fade-in-up delay-900 no-underline overflow-hidden"
//             >
//               <span className="relative z-10 flex items-center justify-center gap-3">
//                 <span>🔐</span>
//                 ACCESS SYSTEM
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
//             </a>
//           </div>

//           {/* AI Capabilities Grid */}
//           <div className="grid grid-cols-4 gap-8 mb-8 opacity-80">
//             {[
//               { icon: '🧠', label: 'Neural AI', color: 'text-cyan-400' },
//               { icon: '⚡', label: 'Lightning Fast', color: 'text-purple-400' },
//               { icon: '🎯', label: 'Precision Learning', color: 'text-pink-400' },
//               { icon: '🚀', label: 'Next-Gen Tech', color: 'text-blue-400' }
//             ].map((item, i) => (
//               <div key={i} className={`text-center animate-fade-in-up delay-${1100 + i * 200} hover:scale-110 transition-transform duration-300 cursor-pointer group`}>
//                 <div className="text-3xl mb-3 group-hover:animate-bounce">{item.icon}</div>
//                 <div className={`text-xs ${item.color} font-semibold tracking-wider uppercase`}>{item.label}</div>
//                 <div className={`h-0.5 w-8 mx-auto mt-2 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Creator Section */}
//       <div className="relative z-10 mt-12 animate-fade-in-up delay-1600">
//         <div className="flex flex-col items-center">
//           <p className="text-slate-400 text-sm mb-3 font-mono">&gt; CREATED_BY:</p>
//           <button
//             onClick={() => setShowAbout(!showAbout)}
//             className="relative group px-6 py-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 text-cyan-400 rounded-xl font-bold backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
//           >
//             <span className="relative z-10 flex items-center gap-2">
//               <span className="animate-pulse">👨‍💻</span>
//               SATYAM.EXE
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </button>
//         </div>
//       </div>

//       {/* Enhanced About Modal */}
//       {showAbout && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
//           <div className="relative bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-10 max-w-lg w-full border border-cyan-400/30 animate-scale-in shadow-2xl">
//             {/* Holographic border */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent rounded-3xl animate-border-flow"></div>
            
//             <div className="text-center relative z-10">
//               <div className="relative mb-8">
//                 <div className="w-24 h-24 bg-gradient-conic from-cyan-500 via-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center text-3xl animate-spin-slow">
//                   <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center">
//                     <span className="animate-pulse">👨‍💻</span>
//                   </div>
//                 </div>
//                 {/* Orbiting particles */}
//                 {[...Array(4)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="absolute w-2 h-2 bg-cyan-400 rounded-full top-1/2 left-1/2"
//                     style={{
//                       transform: `rotate(${i * 90}deg) translateY(-40px)`,
//                       animation: `orbit ${3 + i * 0.5}s linear infinite`
//                     }}
//                   />
//                 ))}
//               </div>
              
//               <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 DEVELOPER.PROFILE
//               </h3>
              
//               <p className="text-slate-300 leading-relaxed mb-8 text-lg">
//                 A passionate <span className="text-cyan-400 font-semibold">AI architect</span> and 
//                 <span className="text-purple-400 font-semibold"> full-stack innovator</span> dedicated to pushing the boundaries of 
//                 educational technology. Crafting the future of learning through intelligent systems and neural networks.
//               </p>
              
//               <div className="grid grid-cols-3 gap-4 mb-8">
//                 {[
//                   { label: 'AI EXPERT', value: '99%', color: 'text-cyan-400' },
//                   { label: 'FULL STACK', value: '95%', color: 'text-purple-400' },
//                   { label: 'INNOVATOR', value: '100%', color: 'text-pink-400' }
//                 ].map((skill, i) => (
//                   <div key={i} className="text-center p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
//                     <div className={`text-2xl font-bold ${skill.color} mb-1`}>{skill.value}</div>
//                     <div className="text-xs text-slate-400 uppercase tracking-wider">{skill.label}</div>
//                   </div>
//                 ))}
//               </div>
              
//               <button
//                 onClick={() => setShowAbout(false)}
//                 className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-bold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
//               >
//                 &lt; RETURN_TO_SYSTEM
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes hologram-enter {
//           from {
//             opacity: 0;
//             transform: translateY(50px) rotateX(20deg);
//             filter: blur(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) rotateX(0deg);
//             filter: blur(0px);
//           }
//         }

//         @keyframes text-glow {
//           0%, 100% { text-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
//           50% { text-shadow: 0 0 30px rgba(168, 85, 247, 0.8), 0 0 40px rgba(236, 72, 153, 0.3); }
//         }

//         @keyframes border-flow {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }

//         @keyframes glitch {
//           0%, 100% { transform: translateX(0); }
//           20% { transform: translateX(-2px); }
//           40% { transform: translateX(2px); }
//           60% { transform: translateX(-1px); }
//           80% { transform: translateX(1px); }
//         }

//         @keyframes matrix-rain {
//           0% { transform: translateY(-100vh); opacity: 0; }
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           100% { transform: translateY(100vh); opacity: 0; }
//         }

//         @keyframes grid-move {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(50px, 50px); }
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         @keyframes float-core {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-5px) rotate(180deg); }
//         }

//         @keyframes orbit {
//           from { transform: rotate(0deg) translateY(-50px) rotate(0deg); }
//           to { transform: rotate(360deg) translateY(-50px) rotate(-360deg); }
//         }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes spin-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }

//         @keyframes type {
//           0% { width: 0; }
//           100% { width: 100%; }
//         }

//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes scale-in {
//           from { opacity: 0; transform: scale(0.9) rotateY(-10deg); }
//           to { opacity: 1; transform: scale(1) rotateY(0deg); }
//         }

//         .animate-hologram-enter { animation: hologram-enter 1.2s ease-out forwards; }
//         .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
//         .animate-border-flow { animation: border-flow 2s linear infinite; }
//         .animate-glitch { animation: glitch 0.3s ease-in-out infinite; }
//         .animate-matrix-rain { animation: matrix-rain 8s linear infinite; }
//         .animate-grid-move { animation: grid-move 20s linear infinite; }
//         .animate-float-core { animation: float-core 3s ease-in-out infinite; }
//         .animate-orbit { animation: orbit 3s linear infinite; }
//         .animate-spin-slow { animation: spin-slow 8s linear infinite; }
//         .animate-spin-reverse { animation: spin-reverse 12s linear infinite; }
//         .animate-type { animation: type 2s steps(30) infinite alternate; }
        
//         .animate-float-1 { animation: float 3s ease-in-out infinite; }
//         .animate-float-2 { animation: float 4s ease-in-out infinite 0.5s; }
//         .animate-float-3 { animation: float 3.5s ease-in-out infinite 1s; }
//         .animate-float-4 { animation: float 4.5s ease-in-out infinite 1.5s; }
//         .animate-float-5 { animation: float 3.2s ease-in-out infinite 2s; }
//         .animate-float-6 { animation: float 3.8s ease-in-out infinite 2.5s; }

//         .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
//         .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
//         .animate-scale-in { animation: scale-in 0.4s ease-out forwards; }

//         .delay-500 { animation-delay: 500ms; }
//         .delay-700 { animation-delay: 700ms; }
//         .delay-900 { animation-delay: 900ms; }
//         .delay-1100 { animation-delay: 1100ms; }
//         .delay-1300 { animation-delay: 1300ms; }
//         .delay-1500 { animation-delay: 1500ms; }
//         .delay-1600 { animation-delay: 1600ms; }

//         .bg-gradient-conic {
//           background: conic-gradient(from 0deg, var(--tw-gradient-stops));
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LandingPage;


import { useState, useEffect } from 'react';

const LandingPage = () => {
  const [showAbout, setShowAbout] = useState(false);
  // ...existing code...
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = ['Learn', 'Create', 'Discover', 'Achieve'];

  useEffect(() => {
  // ...existing code...
  // ...existing code...
    
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => {
  // ...existing code...
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Subtle floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-8 py-20">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Main Logo */}
            <div className="mb-12 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl shadow-indigo-500/25 mb-8 transform hover:scale-105 transition-all duration-500">
                <span className="text-3xl">🤖</span>
              </div>
              <h1 className="text-7xl md:text-8xl font-extralight text-slate-800 dark:text-white mb-4 tracking-tight">
                StudyHelper
              </h1>
              <div className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">
                AI
              </div>
            </div>

            {/* Dynamic tagline */}
            <div className="mb-16 animate-fade-in-up delay-300">
              <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light mb-4">
                Designed to help you{' '}
                <span className="inline-block w-32 text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-medium transition-all duration-500 transform">
                    {words[currentWord]}
                  </span>
                </span>
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Experience the future of learning with our advanced AI assistant. 
                Elegant, powerful, and intuitive education technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up delay-500">
              <a 
                href="/register" 
                className="group px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg font-medium shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1 no-underline"
              >
                <span className="flex items-center justify-center gap-3">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="/login" 
                className="group px-12 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full text-lg font-medium shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 no-underline"
              >
                Sign In
              </a>
            </div>

            {/* Feature Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up delay-700">
              {[
                { icon: '💬', title: 'Smart Chat', desc: 'Conversational AI' },
                { icon: '📚', title: 'Study Plans', desc: 'Personalized learning' },
                { icon: '🧠', title: 'Quiz Generator', desc: 'Test knowledge' },
                { icon: '📊', title: 'Progress Tracking', desc: 'Monitor growth' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 border-t border-slate-200 dark:border-slate-700 animate-fade-in-up delay-1000">
          <div className="max-w-4xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { number: '10K+', label: 'Students Helped', color: 'text-indigo-600' },
                { number: '99%', label: 'Accuracy Rate', color: 'text-purple-600' },
                { number: '24/7', label: 'Available Support', color: 'text-blue-600' }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className={`text-5xl font-light ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Creator */}
        <div className="py-16 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="mb-8">
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-4">
                Crafted with passion by
              </p>
              <button
                onClick={() => setShowAbout(!showAbout)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-xl">
                  👨‍💻
                </div>
                <div className="text-left">
                  <div className="font-semibold">Satyam</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Full Stack Developer</div>
                </div>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced About Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-6 animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 max-w-lg w-full shadow-2xl animate-scale-in border border-slate-200 dark:border-slate-700">
            <div className="text-center">
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl shadow-xl">
                👨‍💻
              </div>
              
              {/* Content */}
              <h3 className="text-3xl font-light text-slate-800 dark:text-white mb-6">
                About Satyam
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-lg">
                A passionate developer focused on creating beautiful, functional applications that make a difference. 
                I believe technology should be elegant, accessible, and empowering.
              </p>

              {/* Skills */}
              <div className="flex justify-center gap-4 mb-8">
                {['React', 'AI/ML', 'Node.js'].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setShowAbout(false)}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

  <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0px); }
          50% { transform: translate(-20px, -20px); }
        }

        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0px); }
          50% { transform: translate(20px, -15px); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }

        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </div>
  );
};

export default LandingPage;