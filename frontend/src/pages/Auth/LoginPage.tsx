// // src/pages/Auth/LoginPage.tsx
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import { loginUser } from '../../api';
// import toast from 'react-hot-toast';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const auth = useAuth();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const { data } = await loginUser({ email, password });
//       if (data.success) {
//         auth.login(data.data.token, data.data.user);
//         toast.success('Logged in successfully!');
//         navigate('/dashboard');
//       }
//     } catch (error: any) {
//       toast.error(error.response?.data?.error || 'Failed to log in.');
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
//   // Basic styling, can be improved significantly
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="p-8 bg-white rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
//           >
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//          <p className="text-center mt-4">
//             Don't have an account? <Link to="/register" className="text-blue-600">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import { loginUser } from '../../api';
// import toast from 'react-hot-toast';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
  
//   // Add these missing hooks
//   const navigate = useNavigate();
//   const auth = useAuth();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     try {
//       // This is your actual login logic - uncommented
//       const { data } = await loginUser({ email, password });
//       if (data.success) {
//         auth.login(data.data.token, data.data.user);
//         toast.success('Logged in successfully!');
//         navigate('/dashboard');
//       }
      
//     } catch (error: any) {
//       toast.error(error.response?.data?.error || 'Failed to log in.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       {/* Floating AI elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 text-blue-400/20 text-4xl animate-bounce delay-300">🔐</div>
//         <div className="absolute top-32 right-20 text-purple-400/20 text-3xl animate-bounce delay-700">⚡</div>
//         <div className="absolute bottom-40 left-20 text-indigo-400/20 text-4xl animate-bounce delay-1000">🚀</div>
//         <div className="absolute bottom-20 right-10 text-cyan-400/20 text-3xl animate-bounce delay-1500">✨</div>
//       </div>

//       {/* Back to home button */}
//       <Link
//         to="/"
//         className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 group"
//       >
//         <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//         </div>
//         <span className="font-medium">Back to Home</span>
//       </Link>

//       {/* Main login form */}
//       <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/20 animate-fade-in-up">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4 animate-pulse shadow-lg shadow-purple-500/50">
//             <span className="text-2xl text-white">🤖</span>
//           </div>
//           <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
//             Welcome Back
//           </h2>
//           <p className="text-gray-400 text-sm">Sign in to continue your AI journey</p>
//           <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-4 animate-pulse"></div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Email field */}
//           <div className="animate-fade-in-up delay-300">
//             <label className="block text-gray-300 text-sm font-medium mb-2">
//               Email Address
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                 </svg>
//               </div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
//                 required
//                 placeholder="Enter your email"
//               />
//             </div>
//           </div>

//           {/* Password field */}
//           <div className="animate-fade-in-up delay-500">
//             <label className="block text-gray-300 text-sm font-medium mb-2">
//               Password
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </div>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
//                 required
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
//               >
//                 {showPassword ? (
//                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464m1.414 1.414L8.464 8.464m5.656 5.656L15.536 15.536m-1.414-1.414L15.536 15.536M9.878 9.878l6.364 6.364M7.05 6.05L20.95 20.95" />
//                   </svg>
//                 ) : (
//                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Login button */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none animate-fade-in-up delay-700 relative overflow-hidden group"
//           >
//             {isLoading && (
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 animate-pulse"></div>
//             )}
//             <span className="relative z-10 flex items-center justify-center space-x-2">
//               {isLoading ? (
//                 <>
//                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                   <span>Signing you in...</span>
//                 </>
//               ) : (
//                 <>
//                   <span>Sign In</span>
//                   <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </>
//               )}
//             </span>
//           </button>
//         </form>

//         {/* Register link */}
//         <div className="text-center mt-8 animate-fade-in-up delay-900">
//           <p className="text-gray-400">
//             Don't have an account?{' '}
//             <Link
//               to="/register"
//               className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 hover:underline"
//             >
//               Create Account
//             </Link>
//           </p>
//         </div>

//         {/* AI features hint */}
//         <div className="flex justify-center space-x-6 mt-8 opacity-60 animate-fade-in-up delay-1000">
//           <div className="text-center">
//             <div className="text-lg mb-1">🧠</div>
//             <div className="text-xs text-gray-500">Smart AI</div>
//           </div>
//           <div className="text-center">
//             <div className="text-lg mb-1">📚</div>
//             <div className="text-xs text-gray-500">Study Tools</div>
//           </div>
//           <div className="text-center">
//             <div className="text-lg mb-1">⚡</div>
//             <div className="text-xs text-gray-500">Fast Learning</div>
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
//         .delay-1500 { animation-delay: 1500ms; }
//         .delay-2000 { animation-delay: 2000ms; }
//       `}</style>
//     </div>
//   );
// };

// export default LoginPage;





import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { loginUser } from '../../api';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await loginUser({ email, password });
      if (data.success) {
        auth.login(data.data.token, data.data.user);
        toast.success('Logged in successfully!');
        navigate('/dashboard');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Failed to log in.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background blur balls */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating AI emojis */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-400/20 text-4xl animate-bounce delay-300">🔐</div>
        <div className="absolute top-32 right-20 text-purple-400/20 text-3xl animate-bounce delay-700">⚡</div>
        <div className="absolute bottom-40 left-20 text-indigo-400/20 text-4xl animate-bounce delay-1000">🚀</div>
        <div className="absolute bottom-20 right-10 text-cyan-400/20 text-3xl animate-bounce delay-1500">✨</div>
      </div>

      {/* Back to home */}
      <Link
        to="/"
        className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 group"
      >
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        <span className="font-medium">Back to Home</span>
      </Link>

      {/* Login form card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/20 animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4 animate-pulse shadow-lg shadow-purple-500/50">
            <span className="text-2xl text-white">🔑</span>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-sm">Sign in to continue your AI journey</p>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-4 animate-pulse"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="animate-fade-in-up delay-300">
            <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div className="animate-fade-in-up delay-500">
            <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              />
              {/* Show/Hide toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none animate-fade-in-up delay-700 relative overflow-hidden group"
          >
            {isLoading && <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 animate-pulse"></div>}
            <span className="relative z-10 flex items-center justify-center space-x-2">
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing you in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </span>
          </button>
        </form>

        {/* Register link */}
        <div className="text-center mt-8 animate-fade-in-up delay-900">
          <p className="text-gray-400">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 hover:underline">
              Create Account
            </Link>
          </p>
        </div>

        {/* AI hints */}
        <div className="flex justify-center space-x-6 mt-8 opacity-60 animate-fade-in-up delay-1000">
          <div className="text-center">
            <div className="text-lg mb-1">🧠</div>
            <div className="text-xs text-gray-500">Smart AI</div>
          </div>
          <div className="text-center">
            <div className="text-lg mb-1">📚</div>
            <div className="text-xs text-gray-500">Study Tools</div>
          </div>
          <div className="text-center">
            <div className="text-lg mb-1">⚡</div>
            <div className="text-xs text-gray-500">Fast Learning</div>
          </div>
        </div>
      </div>

      {/* Animations */}
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
        .delay-1500 { animation-delay: 1500ms; }
        .delay-2000 { animation-delay: 2000ms; }
      `}</style>
    </div>
  );
};

export default LoginPage;