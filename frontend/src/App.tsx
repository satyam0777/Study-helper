

// import './App.css'
// // src/App.tsx
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { Toaster } from 'react-hot-toast';

// import ProtectedRoute from './components/common/ProtectedRoute';
// import Navbar from './components/common/Navbar';
// import LandingPage from './pages/LandingPage';
// import LoginPage from './pages/Auth/LoginPage';
// import RegisterPage from './pages/Auth/RegisterPage';
// import DashboardPage from './pages/Auth/Dashboard/DashboardPage';
// import FeatureWorkspace from './pages/Auth/Dashboard/FeatureWorkspace';

// function App() {
//     // Removed duplicate import
//   return (
//     <AuthProvider>
//       <Toaster position="top-right" />
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           {/* Protected Routes */}
//           <Route element={<ProtectedRoute />}>
//             <Route path="/dashboard" element={<DashboardPage />} />
//             <Route path="/feature/:featureId" element={<FeatureWorkspace />} />
//             <Route path="*" element={<Navigate to="/dashboard" />} />
//           </Route>
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;



import './App.css'
// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';

import ProtectedRoute from './components/common/ProtectedRoute';
import Navbar from './components/common/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import DashboardPage from './pages/Auth/Dashboard/DashboardPage';
import FeatureWorkspace from './pages/Auth/Dashboard/FeatureWorkspace';

// Component to conditionally render Navbar
function ConditionalNavbar() {
  const location = useLocation();
  
  // Hide navbar on these routes
  const hideNavbarRoutes = ['/', '/login', '/register'];
  
  // Don't show navbar on landing, login, or register pages
  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }
  
  return <Navbar />;
}

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <Router>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/feature/:featureId" element={<FeatureWorkspace />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;