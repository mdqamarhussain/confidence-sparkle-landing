import { Button } from "@/components/ui/button";
import { Star, Trophy, Heart } from "lucide-react";
import heroImage from "@/assets/hero-confident-kids.jpg";

const ConfidenceMeter = () => {
  return (
    <div className="relative bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
      <h3 className="text-white text-lg font-semibold mb-4 text-center">
        Your Child's Confidence Journey
      </h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-white text-sm">
          <span>Week 1: Self-Discovery</span>
          <span className="bg-white/20 px-2 py-1 rounded">25%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <div 
            className="bg-white rounded-full h-3 transition-all duration-1000 ease-out animate-pulse"
            style={{ width: '25%' }}
          ></div>
        </div>
        
        <div className="flex items-center justify-between text-white text-sm">
          <span>Week 2: Communication</span>
          <span className="bg-white/20 px-2 py-1 rounded">50%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <div 
            className="bg-white rounded-full h-3 transition-all duration-1000 ease-out"
            style={{ width: '50%' }}
          ></div>
        </div>
        
        <div className="flex items-center justify-between text-white text-sm">
          <span>Week 3: Problem-Solving</span>
          <span className="bg-white/20 px-2 py-1 rounded">75%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <div 
            className="bg-white rounded-full h-3 transition-all duration-1000 ease-out"
            style={{ width: '75%' }}
          ></div>
        </div>
        
        <div className="flex items-center justify-between text-white text-sm">
          <span>Week 4: Celebration</span>
          <span className="bg-success-orange px-2 py-1 rounded text-white font-bold">100%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-white to-success-orange rounded-full h-3 transition-all duration-1000 ease-out animate-pulse-soft"
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const FloatingIcon = ({ Icon, className }: { Icon: any, className: string }) => (
  <div className={`absolute animate-float ${className}`}>
    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
      <Icon className="w-6 h-6 text-white" />
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <FloatingIcon Icon={Star} className="top-20 left-10 delay-0" />
      <FloatingIcon Icon={Trophy} className="top-32 right-20 delay-1000" />
      <FloatingIcon Icon={Heart} className="bottom-32 left-20 delay-2000" />
      <FloatingIcon Icon={Star} className="bottom-20 right-10 delay-500" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
              <Star className="w-4 h-4 text-white animate-pulse-soft" />
              <span className="text-white text-sm font-medium">Ages 6-11 • Expert Designed</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight animate-slide-up">
              Build Your Child's
              <span className="block bg-gradient-to-r from-white to-success-orange bg-clip-text text-transparent">
                Confidence
              </span>
              in Just 4 Weeks!
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Help your child develop unshakeable self-confidence with our fun, 
              interactive program designed by child psychologists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                variant="enroll" 
                size="xl"
                className="group"
              >
                <Trophy className="w-5 h-5 group-hover:animate-bounce-gentle" />
                Enroll for ₹1,999
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Watch Preview
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 text-white/80 text-sm animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-growth-green rounded-full animate-pulse-soft"></div>
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-orange rounded-full animate-pulse-soft"></div>
                <span>Expert designed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse-soft"></div>
                <span>500+ happy families</span>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {/* Main hero image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Confident children raising hands and celebrating achievements"
                className="w-full h-auto transform hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating confidence meter */}
            <div className="absolute -bottom-6 -left-6 w-80 animate-float">
              <ConfidenceMeter />
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};