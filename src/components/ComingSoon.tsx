import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Video, Target, CheckCircle2, Sparkles } from "lucide-react";
import logo from "@/assets/grotalks-logo.png";
import heroBg from "@/assets/hero-background.jpg";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setShowSuccess(true);
    setEmail("");
    setIsLoading(false);
    
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side - White Content Area */}
      <div className="flex-1 bg-white flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-6 lg:py-0 min-h-0">
        <div className="max-w-md mx-auto w-full flex flex-col justify-center h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 p-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-lg">
              <img src={logo} alt="Grotalks" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Grotalks</h1>
              <p className="text-xs sm:text-sm text-slate-500">Guidance made easy</p>
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="mb-3 lg:mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-3 h-3" /> Coming Soon
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-2 lg:mb-3">
            Your Future Starts With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Alumni Who Made It
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 mb-4 lg:mb-6 leading-relaxed">
            Connect with alumni from your college who now live the careers you dream of.
          </p>

          {/* Email Form */}
          <div className="relative mb-4 lg:mb-6">
            {showSuccess ? (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 animate-fade-in">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-emerald-800 text-sm sm:text-base">You're on the list!</p>
                  <p className="text-xs sm:text-sm text-emerald-600">We'll notify you when we launch.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMessage("");
                  }}
                  placeholder="Enter your email address"
                  className="w-full h-12 sm:h-14 px-4 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  variant="glow" 
                  size="lg"
                  className="w-full h-12 sm:h-14 text-sm sm:text-base font-bold rounded-xl"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    "Get Early Access"
                  )}
                </Button>
                {errorMessage && (
                  <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
                )}
              </form>
            )}
            <p className="text-xs text-slate-400 mt-2">
              Join 500+ students & alumni waiting. No spam.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="text-center p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5 rounded-lg bg-primary/10 flex items-center justify-center">
                <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-700">Verified Alumni</p>
            </div>
            <div className="text-center p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5 rounded-lg bg-accent/10 flex items-center justify-center">
                <Video className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-700">1:1 Video Calls</p>
            </div>
            <div className="text-center p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-brand-purple" />
              </div>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-700">Career Goals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="hidden lg:block lg:flex-1 relative">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20" />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/30 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/25 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Mobile Hero Background - subtle overlay at bottom */}
      <div 
        className="lg:hidden h-24 relative flex-shrink-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white" />
      </div>
    </div>
  );
};

export default ComingSoon;
