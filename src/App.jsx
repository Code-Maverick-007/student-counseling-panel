import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { useAuth } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CounselorCTA from './components/CounselorCTA';
import HomePage from './pages/HomePage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import CollegesPage from './pages/CollegesPage';
import CollegeDetailsPage from './pages/CollegeDetailsPage';
import CareerExplorerPage from './pages/CareerExplorerPage';
import CareerDetailPage from './pages/CareerDetailPage';
import AIAdvisorPage from './pages/AIAdvisorPage';
import CounselorsPage from './pages/CounselorsPage';
import InterestQuizPage from './pages/InterestQuizPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import EditProfilePage from './pages/EditProfilePage';


// Component to protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (!isSignedIn) {
    // Redirect them to the /sign-in page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they log in, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

// Layout component that includes common elements
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {children}
        {!window.location.pathname.startsWith('/counselors') && <CounselorCTA />}
      </main>
      <Footer />
    </div>
  );
};

function AppContent() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><MainLayout><DashboardPage /></MainLayout></ProtectedRoute>} />
          <Route path="/colleges" element={<ProtectedRoute><MainLayout><CollegesPage /></MainLayout></ProtectedRoute>} />
          <Route path="/colleges/:id" element={<ProtectedRoute><MainLayout><CollegeDetailsPage /></MainLayout></ProtectedRoute>} />
          <Route path="/career-explorer" element={<ProtectedRoute><MainLayout><CareerExplorerPage /></MainLayout></ProtectedRoute>} />
          <Route path="/career-explorer/:id" element={<ProtectedRoute><MainLayout><CareerDetailPage /></MainLayout></ProtectedRoute>} />
          <Route path="/ai-advisor" element={<ProtectedRoute><MainLayout><AIAdvisorPage /></MainLayout></ProtectedRoute>} />
          <Route path="/counselors" element={<ProtectedRoute><MainLayout><CounselorsPage /></MainLayout></ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute><MainLayout><InterestQuizPage /></MainLayout></ProtectedRoute>} />
          <Route path="/scholarships" element={<ProtectedRoute><MainLayout><ScholarshipsPage /></MainLayout></ProtectedRoute>} />
          <Route path="/edit-profile" element={<ProtectedRoute><MainLayout><EditProfilePage /></MainLayout></ProtectedRoute>} />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

// Main App component
function App() {
  return <AppContent />;
}

export default App;