import { useState, useEffect } from "react";
import { Home, ArrowLeft, Mail, HelpCircle } from "lucide-react";

const ErrorPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div
        className={`max-w-4xl w-full transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Main Content Container */}
        <div className="text-center mb-12">
          {/* Animated 404 Number */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-orange-500/20 blur-3xl"></div>
            <h1 className="relative text-[180px] md:text-[240px] font-serif font-bold leading-none tracking-tight">
              <span className="bg-gradient-to-br from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent">
                4
              </span>
              <span className="bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent inline-block transform hover:scale-110 transition-transform duration-300">
                0
              </span>
              <span className="bg-gradient-to-br from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent">
                4
              </span>
            </h1>
          </div>

          {/* Error Message */}
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4 tracking-tight">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
            <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3 min-w-[180px]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Home className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Return Home</span>
            </button>

            <button className="group px-8 py-4 bg-white text-slate-700 rounded-lg font-medium border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg flex items-center gap-3 min-w-[180px]">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Go Back</span>
            </button>
          </div>
        </div>

        {/* Bottom Section - Classic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Home className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Homepage
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Start fresh from our homepage and explore our features.
            </p>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Visit Homepage
              <span>→</span>
            </a>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <HelpCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Help Center
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Browse our help articles and documentation for assistance.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Get Help
              <span>→</span>
            </a>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Contact Us
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Need assistance? Our support team is here to help you.
            </p>
            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Send Message
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-4">
          <p className="text-slate-500 text-sm">
            Error Code:{" "}
            <span className="font-mono font-semibold text-slate-700">404</span>{" "}
            • Not Found
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
