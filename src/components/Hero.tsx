import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, Trophy, Heart, Sparkles, Play, Users, Clock, Award, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-confident-kids.jpg";
import mascot from "@/assets/confidence-mascot.png";

// Stats Card Component
const StatCard = ({ icon: Icon, number, label, delay = 0 }: { 
  icon: any, number: string, label: string, delay?: number 
}) => (
  <div 
    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-confidence-blue rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <div className="text-2xl font-black text-gray-900">{number}</div>
        <div className="text-sm font-medium text-gray-600">{label}</div>
      </div>
    </div>
  </div>
);

// Feature Highlight Component
const FeatureHighlight = ({ icon: Icon, title, description }: { 
  icon: any, title: string, description: string 
}) => (
  <div className="flex items-start gap-4 group">
    <div className="w-10 h-10 bg-gradient-to-br from-success-orange to-growth-green rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-confidence-blue/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-success-orange/20 to-growth-green/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-growth-green/20 to-primary/20 rounded-full animate-float-fast"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-gradient-to-br from-success-orange/30 to-primary/30 rounded-lg rotate-12 animate-bounce-gentle"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gradient-to-br from-confidence-blue/30 to-growth-green/30 rounded-full animate-pulse-soft"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-confidence-blue/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
              <Star className="w-5 h-5 text-primary animate-sparkle" />
              <span className="text-primary font-bold">Ages 6-11 • Expert Designed</span>
              <Trophy className="w-5 h-5 text-success-orange" />
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 leading-tight">
                Transform Your Child's
                <span className="block bg-gradient-to-r from-primary via-success-orange to-growth-green bg-clip-text text-transparent">
                  Confidence
                </span>
                in Just 4 Weeks
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                A proven step-by-step program designed by child psychologists to help your child build unshakeable self-confidence and academic success.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4">
              <FeatureHighlight 
                icon={Clock}
                title="Quick 15-min Daily Sessions"
                description="Perfect for busy families - just 15 minutes a day to see real results"
              />
              <FeatureHighlight 
                icon={Award}
                title="Expert-Designed Curriculum"
                description="Created by certified child psychologists with proven methods"
              />
              <FeatureHighlight 
                icon={Users}
                title="Parent & Child Activities"
                description="Strengthen your bond while building confidence together"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="enroll" 
                size="xl"
                className="group text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
              >
                <Trophy className="w-5 h-5 group-hover:animate-bounce-gentle" />
                Start Building Confidence - ₹1,999
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4"
              >
                <Play className="w-5 h-5" />
                Watch Preview
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-growth-green" />
                <span className="text-gray-600">30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-growth-green" />
                <span className="text-gray-600">500+ happy families</span>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src={heroImage} 
                alt="Confident children celebrating achievements"
                className="w-full h-auto transform group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              
              {/* Floating Mascot */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full p-3 shadow-lg animate-bounce-gentle">
                <img 
                  src={mascot} 
                  alt="Confidence Mascot" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Success Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-growth-green to-success-orange rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">98% Success Rate</div>
                    <div className="text-xs text-gray-600">Children show improvement</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <StatCard 
                icon={Users}
                number="500+"
                label="Happy Families"
                delay={0.4}
              />
              <StatCard 
                icon={Award}
                number="98%"
                label="Success Rate"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};