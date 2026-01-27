import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MessageCircle, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-hero pt-24 pb-16 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="section-badge mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Plant Health Advisory</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protect Your{" "}
              <span className="text-gradient">Crops</span>
              <br />
              With AI Vision
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Detect diseases instantly, get expert treatment advice, and predict yields with our advanced AI-powered plant health diagnostic system.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={onGetStarted}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2"
              >
                Diagnose Now
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-foreground/20 hover:bg-accent"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="space-y-4 animate-slide-in-right">
            <div className="feature-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Disease Detection</h3>
                <p className="text-muted-foreground text-sm">
                  Identify crop diseases instantly using deep learning technology
                </p>
              </div>
            </div>
            
            <div className="feature-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">AI Chatbot</h3>
                <p className="text-muted-foreground text-sm">
                  Ask questions and get expert farming advice instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
