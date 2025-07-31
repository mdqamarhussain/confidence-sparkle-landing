import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Trophy, Heart, Sparkles, Play, Zap } from "lucide-react";
import heroImage from "@/assets/hero-confident-kids.jpg";
import mascot from "@/assets/confidence-mascot.png";

// Floating Geometric Shape Component
const FloatingShape = ({ className, children }: { className: string, children: React.ReactNode }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <div className="geometric-float">
      {children}
    </div>
  </div>
);

// Enhanced Confidence Meter with Click Interaction
const ConfidenceMeter = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  
  const weeks = [
    { name: "Self-Discovery", progress: 25, color: "confidence-blue" },
    { name: "Communication", progress: 50, color: "success-orange" },
    { name: "Problem-Solving", progress: 75, color: "growth-green" },
    { name: "Celebration", progress: 100, color: "success-orange" }
  ];
  return (
    <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-glow">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <img src={mascot} alt="Confidence Mascot" className="w-6 h-6 wobble-hover" />
        </div>
        <h3 className="text-white text-lg font-bold">
          Your Child's Confidence Journey
        </h3>
        <Sparkles className="w-5 h-5 text-white sparkle" />
      </div>
      
      <div className="space-y-4">
        {weeks.map((week, index) => (
          <div 
            key={index}
            className="cursor-pointer group"
            onClick={() => setActiveWeek(index)}
          >
            <div className="flex items-center justify-between text-white text-sm mb-2">
              <span className="group-hover:text-success-orange transition-colors">
                Week {index + 1}: {week.name}
              </span>
              <span className={`bg-${week.color}/30 px-3 py-1 rounded-full font-bold text-white shadow-glow ${
                activeWeek === index ? 'pulse-glow' : ''
              }`}>
                {week.progress}%
              </span>
            </div>
            <div 
              className="w-full bg-white/20 rounded-full h-4 overflow-hidden cursor-pointer group-hover:h-5 transition-all duration-300"
              data-progress={week.progress}
            >
              <div 
                className={`progress-fill bg-gradient-to-r from-white to-${week.color} rounded-full h-full transition-all duration-1000 ease-out ${
                  activeWeek === index ? 'animate-pulse-soft glow-effect' : ''
                }`}
                style={{ width: activeWeek >= index ? `${week.progress}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <div className="text-xs text-white/80">Click weeks to see progress!</div>
      </div>
    </div>
  );
};

const FloatingIcon = ({ Icon, className, delay = 0 }: { Icon: any, className: string, delay?: number }) => (
  <div 
    className={`absolute pointer-events-none animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20 shadow-glow wobble-hover">
      <Icon className="w-8 h-8 text-white sparkle" />
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero-enhanced overflow-hidden">
      {/* Enhanced Background Elements */}
      <FloatingShape className="top-10 left-10">
        <div className="w-20 h-20 bg-white/10 rounded-lg rotate-45 morphing-shape"></div>
      </FloatingShape>
      <FloatingShape className="top-20 right-20">
        <div className="w-16 h-16 bg-success-orange/20 rounded-full"></div>
      </FloatingShape>
      <FloatingShape className="bottom-20 left-20">
        <div className="w-12 h-12 bg-growth-green/20 rounded-lg"></div>
      </FloatingShape>
      <FloatingShape className="bottom-40 right-40">
        <div className="w-14 h-14 bg-confidence-blue/20 rounded-full morphing-shape"></div>
      </FloatingShape>
      
      {/* Floating Icons with Enhanced Animation */}
      <FloatingIcon Icon={Star} className="top-20 left-10" delay={0} />
      <FloatingIcon Icon={Trophy} className="top-32 right-20" delay={1} />
      <FloatingIcon Icon={Heart} className="bottom-32 left-20" delay={2} />
      <FloatingIcon Icon={Sparkles} className="bottom-20 right-10" delay={0.5} />
      <FloatingIcon Icon={Zap} className="top-1/2 left-8" delay={1.5} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Enhanced Visibility */}
          <div className="text-center lg:text-left scroll-reveal">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30 shadow-glow bounce-hover">
              <Star className="w-5 h-5 text-white animate-sparkle" />
              <span className="text-white text-lg font-bold">Ages 6-11 • Expert Designed</span>
              <Trophy className="w-5 h-5 text-white animate-bounce-gentle" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-white mb-8 leading-tight animate-slide-up drop-shadow-lg">
              Build Your Child's
              <span className="block bg-gradient-to-r from-white via-success-orange to-growth-green bg-clip-text text-transparent animate-pulse-soft">
                Confidence
              </span>
              in Just 4 Weeks!
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-10 leading-relaxed animate-slide-up font-semibold drop-shadow-md" style={{ animationDelay: '0.2s' }}>
              Help your child develop unshakeable self-confidence with our fun, 
              interactive program designed by child psychologists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                variant="enroll" 
                size="xl"
                className="group text-xl px-12 py-6 pulse-glow scale-hover shadow-2xl"
              >
                <Trophy className="w-6 h-6 group-hover:animate-bounce-gentle" />
                Enroll for ₹1,999
                <Sparkles className="w-6 h-6 group-hover:animate-sparkle" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-2 border-white/50 text-white hover:bg-white/20 text-xl px-12 py-6 backdrop-blur-sm scale-hover shadow-xl"
              >
                <Play className="w-6 h-6" />
                Watch Preview
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 text-white/90 text-lg animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3 bounce-hover">
                <div className="w-3 h-3 bg-growth-green rounded-full animate-pulse-soft shadow-glow"></div>
                <span className="font-semibold">30-day guarantee</span>
              </div>
              <div className="flex items-center gap-3 bounce-hover">
                <div className="w-3 h-3 bg-success-orange rounded-full animate-pulse-soft shadow-glow"></div>
                <span className="font-semibold">Expert designed</span>
              </div>
              <div className="flex items-center gap-3 bounce-hover">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse-soft shadow-glow"></div>
                <span className="font-semibold">500+ happy families</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced with Mascot */}
          <div className="relative animate-slide-up scroll-reveal" style={{ animationDelay: '0.3s' }}>
            {/* Main hero image with enhanced effects */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img 
                src={heroImage} 
                alt="Confident children raising hands and celebrating achievements"
                className="w-full h-auto transform group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              
              {/* Floating Mascot */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/90 rounded-full p-2 shadow-glow animate-bounce-gentle">
                <img 
                  src={mascot} 
                  alt="Confidence Mascot" 
                  className="w-full h-full object-contain wobble-hover cursor-pointer"
                  onClick={() => {
                    // Add a fun interaction
                    const element = document.querySelector('.confidence-meter') as HTMLElement;
                    if (element) {
                      element.style.transform = 'scale(1.05)';
                      setTimeout(() => {
                        element.style.transform = 'scale(1)';
                      }, 200);
                    }
                  }}
                />
              </div>
              
              {/* Sparkle effects */}
              <div className="absolute top-8 left-8">
                <Sparkles className="w-6 h-6 text-white sparkle" />
              </div>
              <div className="absolute bottom-8 right-8">
                <Star className="w-8 h-8 text-success-orange sparkle" />
              </div>
            </div>
            
            {/* Enhanced floating confidence meter */}
            <div className="confidence-meter absolute -bottom-8 -left-8 w-80 animate-float-slow shadow-2xl">
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