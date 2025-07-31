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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-confidence-blue/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-confidence-blue/20">
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
                className="group bg-white rounded-xl p-6 shadow-soft hover:shadow-primary transition-all duration-300 hover:-translate-y-2 border border-card-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-${benefit.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 text-${benefit.color}`} />
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
        
        {/* Stats section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-soft border border-card-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-confidence-blue mb-2 group-hover:scale-110 transition-transform">
                87%
              </div>
              <p className="text-muted-foreground">
                of children show improved academic performance after building confidence
              </p>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-success-orange mb-2 group-hover:scale-110 transition-transform">
                92%
              </div>
              <p className="text-muted-foreground">
                of parents report better social interactions and friendships
              </p>
            </div>
            
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-growth-green mb-2 group-hover:scale-110 transition-transform">
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