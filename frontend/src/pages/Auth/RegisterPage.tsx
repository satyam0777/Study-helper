// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import { registerUser } from '../../api';
// import toast from 'react-hot-toast';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const auth = useAuth();

//   const { firstName, lastName, username, email, password } = formData;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password.length < 6) {
//       toast.error('Password must be at least 6 characters long.');
//       return;
//     }
//     setIsLoading(true);
//     try {
//       const { data } = await registerUser(formData);
//       if (data.success) {
//         auth.login(data.data.token, data.data.user);
//         toast.success('Account created successfully!');
//         navigate('/dashboard');
//       }
//     } catch (error: any) {
//       toast.error(error.response?.data?.error || 'Failed to register.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="text"
//               name="firstName"
//               value={firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               value={lastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={handleChange}
//             placeholder="Username"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors"
//           >
//             {isLoading ? 'Creating Account...' : 'Register'}
//           </button>
//         </form>
//         <p className="text-center text-gray-600 mt-4">
//           Already have an account?{' '}
//           <Link to="/login" className="text-indigo-600 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;



// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import { registerUser } from '../../api';
// import toast from 'react-hot-toast';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
  
//   // Add these missing hooks
//   const navigate = useNavigate();
//   const auth = useAuth();

//   const { firstName, lastName, username, email, password } = formData;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (password.length < 6) {
//       toast.error('Password must be at least 6 characters long.');
//       return;
//     }
    
//     setIsLoading(true);
    
//     try {
//       // This is your actual registration logic - uncommented
//       const { data } = await registerUser(formData);
      
//       if (data.success) {
//         auth.login(data.data.token, data.data.user);
//         toast.success('Account created successfully!');
//         navigate('/dashboard');
//       }
      
//     } catch (error: any) {
//       toast.error(error.response?.data?.error || 'Failed to register.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden py-8">
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       {/* Floating AI elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 text-blue-400/20 text-4xl animate-bounce delay-300">🎯</div>
//         <div className="absolute top-32 right-20 text-purple-400/20 text-3xl animate-bounce delay-700">✨</div>
//         <div className="absolute bottom-40 left-20 text-indigo-400/20 text-4xl animate-bounce delay-1000">🚀</div>
//         <div className="absolute bottom-20 right-10 text-cyan-400/20 text-3xl animate-bounce delay-1500">💫</div>
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

//       {/* Main register form */}
//       <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-white/20 animate-fade-in-up">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4 animate-pulse shadow-lg shadow-purple-500/50">
//             <span className="text-2xl text-white">🚀</span>
//           </div>
//           <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
//             Join StudyHelper AI
//           </h2>
//           <p className="text-gray-400 text-sm">Create your account and start your AI learning journey</p>
//           <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-4 animate-pulse"></div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name fields */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up delay-300">
//             <div>
//               <label className="block text-gray-300 text-sm font-medium mb-2">
//                 First Name
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={firstName}
//                   onChange={handleChange}
//                   className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
//                   required
//                   placeholder="John"
//                 />
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-gray-300 text-sm font-medium mb-2">
//                 Last Name
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={lastName}
//                   onChange={handleChange}
//                   className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
//                   required
//                   placeholder="Doe"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Username field */}
//           <div className="animate-fade-in-up delay-500">
//             <label className="block text-gray-300 text-sm font-medium mb-2">
//               Username
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 name="username"
//                 value={username}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
//                 required
//                 placeholder="johndoe"
//               />
//             </div>
//           </div>

//           {/* Email field */}
//           <div className="animate-fade-in-up delay-700">
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
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
//                 required
//                 placeholder="john@example.com"
//               />
//             </div>
//           </div>

//           {/* Password field */}
//           <div className="animate-fade-in-up delay-900">
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
//                 name="password"
//                 value={password}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
//                 required
//                 placeholder="Minimum 6 characters"
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
//             {password.length > 0 && (
//               <div className="mt-2">
//                 <div className="flex items-center space-x-2 text-xs">
//                   <div className={`h-2 flex-1 rounded-full ${password.length >= 6 ? 'bg-green-500' : 'bg-red-500/50'}`}>
//                     <div 
//                       className={`h-full rounded-full transition-all duration-300 ${password.length >= 6 ? 'bg-green-400' : 'bg-red-400'}`}
//                       style={{ width: `${Math.min((password.length / 6) * 100, 100)}%` }}
//                     ></div>
//                   </div>
//                   <span className={`${password.length >= 6 ? 'text-green-400' : 'text-red-400'}`}>
//                     {password.length >= 6 ? 'Strong' : `${6 - password.length} more`}
//                   </span>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Register button */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none animate-fade-in-up delay-1100 relative overflow-hidden group"
//           >
//             {isLoading && (
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 animate-pulse"></div>
//             )}
//             <span className="relative z-10 flex items-center justify-center space-x-2">
//               {isLoading ? (
//                 <>
//                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                   <span>Creating your account...</span>
//                 </>
//               ) : (
//                 <>
//                   <span>Create Account</span>
//                   <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </>
//               )}
//             </span>
//           </button>
//         </form>

//         {/* Login link */}
//         <div className="text-center mt-8 animate-fade-in-up delay-1300">
//           <p className="text-gray-400">
//             Already have an account?{' '}
//             <Link
//               to="/login"
//               className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 hover:underline"
//             >
//               Sign In
//             </Link>
//           </p>
//         </div>

//         {/* AI benefits preview */}
//         <div className="flex justify-center space-x-6 mt-8 opacity-60 animate-fade-in-up delay-1500">
//           <div className="text-center">
//             <div className="text-lg mb-1">🤖</div>
//             <div className="text-xs text-gray-500">AI Tutor</div>
//           </div>
//           <div className="text-center">
//             <div className="text-lg mb-1">📈</div>
//             <div className="text-xs text-gray-500">Progress</div>
//           </div>
//           <div className="text-center">
//             <div className="text-lg mb-1">🎯</div>
//             <div className="text-xs text-gray-500">Goals</div>
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
//         .delay-1100 { animation-delay: 1100ms; }
//         .delay-1300 { animation-delay: 1300ms; }
//         .delay-1500 { animation-delay: 1500ms; }
//         .delay-2000 { animation-delay: 2000ms; }
//       `}</style>
//     </div>
//   );
// };

// export default RegisterPage;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { registerUser } from '../../api';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();
  const auth = useAuth();

  const { firstName, lastName, username, email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { data } = await registerUser(formData);
      
      if (data.success) {
        auth.login(data.data.token, data.data.user);
        toast.success('Account created successfully!');
        navigate('/dashboard');
      }
      
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Failed to register.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden py-8">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-3/4 w-72 h-72 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float-slow delay-1000"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 text-indigo-400 text-3xl animate-float-1">💡</div>
        <div className="absolute top-32 right-20 text-purple-400 text-4xl animate-float-2">✨</div>
        <div className="absolute bottom-40 left-20 text-blue-400 text-3xl animate-float-3">🚀</div>
        <div className="absolute bottom-20 right-10 text-cyan-400 text-4xl animate-float-4">🎯</div>
      </div>

      {/* Back to home button */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group"
      >
        <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:shadow-lg transition-all duration-300">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        <span className="font-medium hidden sm:block">Back to Home</span>
      </Link>

      {/* Main register form */}
      <div className="relative z-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200 dark:border-slate-700 animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mb-6 shadow-2xl shadow-indigo-500/25 transform hover:scale-105 transition-all duration-500">
            <span className="text-3xl">🚀</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-3">
            Join StudyHelper AI
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Create your account and start learning</p>
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mt-4 shadow-lg shadow-indigo-500/30"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up delay-300">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-3">
                First Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-500 dark:text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
                  required
                  placeholder="John"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-3">
                Last Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-500 dark:text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
                  required
                  placeholder="Doe"
                />
              </div>
            </div>
          </div>

          {/* Username field */}
          <div className="animate-fade-in-up delay-500">
            <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-3">
              Username
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-500 dark:text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
                required
                placeholder="johndoe"
              />
            </div>
          </div>

          {/* Email field */}
          <div className="animate-fade-in-up delay-700">
            <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-3">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-500 dark:text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
                required
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="animate-fade-in-up delay-900">
            <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-3">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-500 dark:text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full pl-12 pr-12 py-4 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
                required
                placeholder="Minimum 6 characters"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-200"
              >
                {showPassword ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464m1.414 1.414L8.464 8.464m5.656 5.656L15.536 15.536m-1.414-1.414L15.536 15.536M9.878 9.878l6.364 6.364M7.05 6.05L20.95 20.95" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            {password.length > 0 && (
              <div className="mt-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="flex-1">
                    <div className={`h-2 rounded-full ${password.length >= 6 ? 'bg-green-200 dark:bg-green-900' : 'bg-red-200 dark:bg-red-900'}`}>
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${password.length >= 6 ? 'bg-green-500' : 'bg-red-500'}`}
                        style={{ width: `${Math.min((password.length / 6) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className={`font-medium ${password.length >= 6 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {password.length >= 6 ? 'Strong' : `${6 - password.length} more chars`}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Register button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 focus:from-indigo-700 focus:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none animate-fade-in-up delay-1100 relative overflow-hidden group"
          >
            {isLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 animate-pulse"></div>
            )}
            <span className="relative z-10 flex items-center justify-center space-x-2">
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </span>
          </button>
        </form>

        {/* Login link */}
        <div className="text-center mt-8 animate-fade-in-up delay-1300">
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold transition-colors duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* AI benefits preview */}
        <div className="flex justify-center space-x-8 mt-8 opacity-70 animate-fade-in-up delay-1500">
          <div className="text-center group cursor-pointer">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">🤖</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">AI Assistant</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">📈</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Track Progress</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">🎯</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Achieve Goals</div>
          </div>
        </div>
      </div>

  <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0px); }
          50% { transform: translate(-20px, -20px); }
        }

        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0px); }
          50% { transform: translate(20px, -15px); }
        }

        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 10s ease-in-out infinite; }

        .animate-float-1 { animation: float-slow 3s ease-in-out infinite; }
        .animate-float-2 { animation: float-slower 4s ease-in-out infinite 0.5s; }
        .animate-float-3 { animation: float-slow 3.5s ease-in-out infinite 1s; }
        .animate-float-4 { animation: float-slower 4.5s ease-in-out infinite 1.5s; }

        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-900 { animation-delay: 900ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1100 { animation-delay: 1100ms; }
        .delay-1300 { animation-delay: 1300ms; }
        .delay-1500 { animation-delay: 1500ms; }
      `}</style>
    </div>
  );
};

export default RegisterPage;