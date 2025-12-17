import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Users, Target, CheckCircle2 } from "lucide-react";
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
    <div className="relative h-screen w-full overflow-hidden">
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
      
      {/* Light overlay gradient for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow z-0" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 py-4 sm:py-6">
        <div className="w-full max-w-xl text-center">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center mb-4 sm:mb-6 animate-float">
            <img 
              src={logo} 
              alt="Grotalks" 
              className="w-10 h-10 sm:w-12 sm:h-12 mb-2 drop-shadow-lg"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Grotalks
            </h1>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Guidance made easy
            </p>
          </div>

          {/* Main Headline */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              Coming Soon
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight mb-3">
              Your Future Starts With
              <span className="block gradient-text">Alumni Who Made It</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              Connect with alumni from your own college who walked the same halls 
              and now live the careers you dream of. Transform passive networks into 
              <span className="text-foreground font-medium"> active mentorship</span>.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="glass-card p-4 sm:p-5 mb-4 sm:mb-6 relative">
            {/* Success Notification Overlay */}
            {showSuccess && (
              <div className="absolute inset-0 flex items-center justify-center bg-card/95 backdrop-blur-sm rounded-2xl z-10 animate-success-pop">
                <div className="flex flex-col items-center gap-2 text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(142,71%,45%)]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-[hsl(142,71%,45%)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">You're on the list!</h3>
                  <p className="text-sm text-muted-foreground">We'll notify you as soon as Grotalks goes live.</p>
                </div>
              </div>
            )}
            
            <p className="text-sm font-medium text-foreground mb-3">
              Be the first to know when we launch
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage("");
                }}
                placeholder="Enter your email address"
                className="flex-1 h-11 sm:h-12 px-4 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all text-sm"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                variant="glow" 
                size="default"
                className="h-11 sm:h-12 px-5 sm:px-6 text-sm font-semibold whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  "Get Early Access"
                )}
              </Button>
            </div>
            {errorMessage && (
              <p className="text-xs text-destructive mt-2">{errorMessage}</p>
            )}
            <p className="text-xs text-muted-foreground mt-2">
              Join 500+ students & alumni already waiting. No spam, ever.
            </p>
          </form>

          {/* Features */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="text-center p-2">
              <div className="w-8 h-8 mx-auto mb-1 rounded-lg bg-primary/10 flex items-center justify-center">
                <BadgeCheck className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground">Verified Alumni</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Trusted mentors only</p>
            </div>
            <div className="text-center p-2">
              <div className="w-8 h-8 mx-auto mb-1 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground">Direct Access</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Chat with mentors</p>
            </div>
            <div className="text-center p-2">
              <div className="w-8 h-8 mx-auto mb-1 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                <Target className="w-4 h-4 text-brand-purple" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground">Career Guidance</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Achieve your goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
