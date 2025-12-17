import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BadgeCheck, Zap, Target } from "lucide-react";
import logo from "@/assets/grotalks-logo.png";
import heroBg from "@/assets/hero-background.jpg";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you as soon as Grotalks goes live.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
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
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-background/90 via-background/70 to-background/40" />
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-purple/20 rounded-full blur-3xl animate-pulse-slow z-0" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl text-center">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center mb-6 sm:mb-8 animate-float">
            <img 
              src={logo} 
              alt="Grotalks" 
              className="w-14 h-14 sm:w-16 sm:h-16 mb-3 drop-shadow-2xl"
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Grotalks
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mt-1">
              Guidance made easy
            </p>
          </div>

          {/* Main Headline */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              Coming Soon
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
              Your Future Starts With
              <span className="block gradient-text">Alumni Who Made It</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              Connect with alumni from your own college who walked the same halls 
              and now live the careers you dream of. Transform passive networks into 
              <span className="text-foreground font-medium"> active mentorship</span>.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="glass-card p-4 sm:p-6 mb-6 sm:mb-8">
            <p className="text-sm sm:text-base font-medium text-foreground mb-4">
              Be the first to know when we launch
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 h-12 sm:h-14 px-4 sm:px-5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none input-glow transition-all text-sm sm:text-base"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                variant="glow" 
                size="lg"
                className="h-12 sm:h-14 px-6 sm:px-8"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span className="hidden sm:inline">Joining...</span>
                  </span>
                ) : (
                  "Get Early Access"
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Join 500+ students & alumni already waiting. No spam, ever.
            </p>
          </form>

          {/* Features */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className="text-center p-2 sm:p-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1 sm:mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground">Verified Alumni</h3>
              <p className="text-xs text-muted-foreground hidden sm:block">Trusted mentors only</p>
            </div>
            <div className="text-center p-2 sm:p-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1 sm:mb-2 rounded-lg bg-accent/10 flex items-center justify-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground">Instant Connect</h3>
              <p className="text-xs text-muted-foreground hidden sm:block">Book 1:1 sessions</p>
            </div>
            <div className="text-center p-2 sm:p-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1 sm:mb-2 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-brand-purple" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground">Career Guidance</h3>
              <p className="text-xs text-muted-foreground hidden sm:block">Achieve your goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
