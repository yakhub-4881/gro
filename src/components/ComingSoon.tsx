import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Video, Target, CheckCircle2 } from "lucide-react";
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
    
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setShowSuccess(true);
    setEmail("");
    setIsLoading(false);
    
    // Hide success message after 4 seconds
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Premium gradient overlay - darker for better contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
      
      {/* Subtle animated glow effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow z-5" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-slow z-5" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-20 w-full max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center mb-6 sm:mb-8 animate-float">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 p-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
              <img 
                src={logo} 
                alt="Grotalks" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-lg">
              Grotalks
            </h1>
            <p className="text-white/70 text-sm sm:text-base font-medium">
              Guidance made easy
            </p>
          </div>

          {/* Main Headline */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold rounded-full bg-primary/20 text-white border border-primary/30 backdrop-blur-sm shadow-lg">
              🚀 Coming Soon
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
              Your Future Starts With
              <span className="block gradient-text mt-1">Alumni Who Made It</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-lg mx-auto leading-relaxed">
              Connect with alumni from your own college who walked the same halls 
              and now live the careers you dream of. Transform passive networks into 
              <span className="text-white font-semibold"> active mentorship</span>.
            </p>
          </div>

          {/* Email Form Card */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-8 mb-6 sm:mb-8 shadow-2xl border border-white/50 max-w-md mx-auto">
            {/* Success Notification Overlay */}
            {showSuccess && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/98 backdrop-blur-sm rounded-3xl z-10 animate-success-pop">
                <div className="flex flex-col items-center gap-3 text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-9 h-9 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">You're on the list!</h3>
                  <p className="text-sm text-slate-600">We'll notify you as soon as Grotalks goes live.</p>
                </div>
              </div>
            )}
            
            <p className="text-base sm:text-lg font-semibold text-slate-800 mb-4">
              Be the first to know when we launch
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage("");
                }}
                placeholder="Enter your email address"
                className="w-full h-12 sm:h-14 px-4 sm:px-5 rounded-xl bg-slate-100 border-2 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-base"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                variant="glow" 
                size="lg"
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold rounded-xl"
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
            </form>
            {errorMessage && (
              <p className="text-sm text-red-500 mt-2 font-medium">{errorMessage}</p>
            )}
            <p className="text-xs sm:text-sm text-slate-500 mt-3">
              Join 500+ students & alumni already waiting. No spam, ever.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto">
            <div className="text-center p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">Verified Alumni</h3>
              <p className="text-[10px] sm:text-xs text-white/70">Trusted mentors</p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30">
                <Video className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">1:1 Video Calls</h3>
              <p className="text-[10px] sm:text-xs text-white/70">Connect live</p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-xl bg-brand-purple/20 flex items-center justify-center border border-brand-purple/30">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">Career Goals</h3>
              <p className="text-[10px] sm:text-xs text-white/70">Achieve dreams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
