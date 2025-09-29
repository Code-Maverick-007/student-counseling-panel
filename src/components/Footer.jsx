
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              CAREER SARTHI
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students to make informed career decisions with AI-driven guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/colleges" className="hover:text-blue-400 transition-colors">
                  Colleges
                </Link>
              </li>
              <li>
                <Link to="/career-explorer" className="hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/scholarships" className="hover:text-blue-400 transition-colors">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link to="/ai-advisor" className="hover:text-blue-400 transition-colors">
                  AI Advisor
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources (NEW) */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Career Guides
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Aptitude Practice
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Mock Tests
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to our newsletter for updates, career tips, and scholarship alerts.
            </p>
            <form className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm rounded-l-md focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 text-sm rounded-r-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>

            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>

            {/* App Download Buttons */}
            <div className="flex flex-col space-y-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 w-auto cursor-pointer"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10 w-auto cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CAREER SARTHI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

