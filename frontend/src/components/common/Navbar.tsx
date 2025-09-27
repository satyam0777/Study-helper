// // ...existing code...
// import { Link, useNavigate } from 'react-router-dom';
// import React, { useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';

// const Navbar: React.FC = () => {
//   const auth = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     auth?.logout();
//     navigate('/login');
//   };

//   return (
//     <nav className="flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-xl border-b border-purple-200/40 shadow-lg rounded-b-2xl sticky top-0 z-50">
//       <div className="flex items-center gap-3">
//         {/* Emoji Logo with gradient background */}
//         <span className="inline-block w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
//           <span className="text-2xl text-white">🤖</span>
//         </span>
//         <span className="ml-3 text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 bg-clip-text text-transparent tracking-tight drop-shadow">StudyHelper AI</span>
//       </div>
//       <div className="flex items-center gap-4">
//         {auth?.user && (
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow transition-colors font-semibold"
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    auth?.logout();
    navigate('/login');
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate('/dashboard');
  };

  // Check if we're on a feature page or other sub-pages
  const showBackButton = location.pathname !== '/dashboard' && location.pathname !== '/';
  const isFeaturePage = location.pathname.startsWith('/feature/');

  // Get feature name for title
  const getPageTitle = () => {
    if (location.pathname === '/dashboard') return 'Dashboard';
    if (isFeaturePage) {
      const featureId = location.pathname.split('/feature/')[1];
      const featureTitles: Record<string, string> = {
        ask: 'Ask AI',
        summary: 'Generate Summary',
        quiz: 'Quiz Generator',
        flashcards: 'Flashcards',
        image: 'Image Generation',
      };
      return featureTitles[featureId] || 'Feature';
    }
    return '';
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-b border-slate-200/40 dark:border-slate-700/40 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-4">
        {/* Back Button */}
        {showBackButton && (
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200 group"
            title="Go back"
          >
            <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleHome}>
          <div className="relative">
            <span className="inline-block w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              <span className="text-2xl text-white">🤖</span>
            </span>
            {/* Active indicator */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-800 animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 bg-clip-text text-transparent tracking-tight">
              StudyHelper AI
            </span>
            {/* Breadcrumb */}
            {showBackButton && (
              <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                <span>Dashboard</span>
                <svg className="w-3 h-3 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-slate-700 dark:text-slate-300 font-medium">{getPageTitle()}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* User info */}
        {auth?.user && (
          <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-sm font-bold text-white">
                {(auth.user.profile?.firstName || auth.user.username || 'U').charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {auth.user.profile?.firstName || auth.user.username || 'User'}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Online</span>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        {auth?.user && (
          <div className="flex items-center gap-2">
            {/* Dashboard button (only show if not on dashboard) */}
            {location.pathname !== '/dashboard' && (
              <button
                onClick={handleHome}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="hidden sm:inline">Dashboard</span>
              </button>
            )}

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;