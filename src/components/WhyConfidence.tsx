import { Brain, Users, Zap, Heart, Target, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Better Academic Performance",
    description: "Confident children participate more in class, ask questions freely, and aren't afraid to make mistakes while learning.",
    color: "confidence-blue"
  },
  {
    icon: Users,
    title: "Stronger Friendships",
    description: "Self-assured kids make friends easier, communicate better, and develop lasting social connections.",
    color: "growth-green"
  },
  {
    icon: Zap,
    title: "Resilience & Problem-Solving",
    description: "Children with confidence bounce back from setbacks faster and approach challenges with a positive mindset.",
    color: "success-orange"
  },
  {
    icon: Heart,
    title: "Emotional Well-being",
    description: "Confident kids experience less anxiety, better self-esteem, and greater overall happiness in their daily lives.",
    color: "confidence-blue"
  },
  {
    icon: Target,
    title: "Goal Achievement",
    description: "Self-confident children set ambitious goals, work persistently toward them, and celebrate their achievements.",
    color: "growth-green"
  },
  {
    icon: Sparkles,
    title: "Creative Expression",
    description: "Confidence unlocks creativity, helping children express themselves freely and explore their unique talents.",
    color: "success-orange"
  }
];

export const WhyConfidence = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-confidence-blue/10 rounded-full float-slow"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-success-orange/10 rounded-lg float-fast"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-growth-green/10 rounded-full float-animation"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-confidence-blue/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-confidence-blue/20 bounce-hover">
            <Heart className="w-4 h-4 text-confidence-blue animate-pulse-soft" />
            <span className="text-confidence-blue text-sm font-medium">Why It Matters</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Why Confidence is Your Child's
            <span className="block text-confidence-blue">Greatest Superpower</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Research shows that confident children perform better academically, have stronger relationships, 
            and grow into happier, more successful adults. Here's how confidence transforms every area of your child's life:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className={`group bg-white rounded-xl p-6 shadow-soft hover:shadow-primary transition-all duration-300 hover:-translate-y-2 border border-card-border scroll-reveal stagger-${(index % 3) + 1} scale-hover`}
              >
                <div className={`w-14 h-14 rounded-xl bg-${benefit.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bounce-hover`}>
                  <Icon className={`w-7 h-7 text-${benefit.color} group-hover:animate-bounce-gentle`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-confidence-blue transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced Stats section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-soft border border-card-border scroll-reveal">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group scale-hover">
              <div className="text-3xl md:text-4xl font-bold text-confidence-blue mb-2 group-hover:scale-110 transition-transform sparkle">
                87%
              </div>
              <p className="text-muted-foreground">
                of children show improved academic performance after building confidence
              </p>
            </div>
            
            <div className="group scale-hover">
              <div className="text-3xl md:text-4xl font-bold text-success-orange mb-2 group-hover:scale-110 transition-transform sparkle">
                92%
              </div>
              <p className="text-muted-foreground">
                of parents report better social interactions and friendships
              </p>
            </div>
            
            <div className="group scale-hover">
              <div className="text-3xl md:text-4xl font-bold text-growth-green mb-2 group-hover:scale-110 transition-transform sparkle">
                95%
              </div>
              <p className="text-muted-foreground">
                of families see increased happiness and reduced anxiety in their children
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};