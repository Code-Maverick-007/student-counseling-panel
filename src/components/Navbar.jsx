import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, GraduationCap, Briefcase, Bot, User, Menu, X, ArrowRight, Award } from 'lucide-react';
import { useUser, useClerk, UserButton } from '@clerk/clerk-react';

export default function Navbar() {
  const location = useLocation();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/colleges', icon: GraduationCap, label: 'Colleges' },
    { path: '/career-explorer', icon: Briefcase, label: 'Careers' },
    { path: '/scholarships', icon: Award, label: 'Scholarships' },
    { path: '/ai-advisor', icon: Bot, label: 'AI Advisor' },
    { path: '/dashboard', icon: User, label: 'Dashboard' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-800">CAREER SARTHI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center">
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button
                onClick={() => openSignIn()}
                className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-blue-600 text-white px-6 py-2 hover:bg-blue-700"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              ))}
              
              {user ? (
                <div className="pt-4 border-t">
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Link
                    to="/sign-in"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/sign-up"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}