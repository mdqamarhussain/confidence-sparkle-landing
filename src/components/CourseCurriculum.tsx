import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Star, Users, Lightbulb, PartyPopper, Play, CheckCircle, Clock } from "lucide-react";

const modules = [
  {
    week: 1,
    title: "I Am Amazing",
    subtitle: "Self-Discovery Adventure",
    icon: Star,
    color: "confidence-blue",
    description: "Help your child discover their unique strengths, talents, and amazing qualities.",
    activities: [
      "My Superpower Discovery Workshop",
      "Strength Spotting Games",
      "Amazing Me Journal Creation",
      "Confidence Affirmation Practice"
    ],
    duration: "45 minutes per day",
    skills: ["Self-awareness", "Positive self-talk", "Identifying strengths"],
    outcome: "Your child will create a personal 'Amazing Me' portfolio showcasing their unique qualities."
  },
  {
    week: 2,
    title: "Speak Up Superstar",
    subtitle: "Communication Confidence",
    icon: Users,
    color: "success-orange", 
    description: "Build communication skills and confidence in expressing thoughts and feelings.",
    activities: [
      "Voice Power Training",
      "Story Telling Adventures",
      "Opinion Sharing Circles",
      "Presentation Practice Games"
    ],
    duration: "45 minutes per day",
    skills: ["Public speaking", "Active listening", "Self-expression"],
    outcome: "Your child will deliver a confident mini-presentation about something they love."
  },
  {
    week: 3,
    title: "Problem-Solving Champion",
    subtitle: "Resilience Building",
    icon: Lightbulb,
    color: "growth-green",
    description: "Develop problem-solving skills and resilience to face challenges with confidence.",
    activities: [
      "Challenge Solver Missions",
      "Mistake Monster Taming",
      "Solution Thinking Games",
      "Resilience Superhero Training"
    ],
    duration: "45 minutes per day",
    skills: ["Critical thinking", "Resilience", "Growth mindset"],
    outcome: "Your child will create their own Problem-Solving Superhero character and toolkit."
  },
  {
    week: 4,
    title: "Confidence Celebration",
    subtitle: "Achievement Recognition",
    icon: PartyPopper,
    color: "confidence-blue",
    description: "Celebrate achievements and create a confidence action plan for continued growth.",
    activities: [
      "Achievement Celebration Party",
      "Confidence Certificate Creation",
      "Future Goals Vision Board",
      "Parent-Child Confidence Pact"
    ],
    duration: "45 minutes per day",
    skills: ["Goal setting", "Self-celebration", "Future planning"],
    outcome: "Your child receives a personalized Confidence Champion certificate and future action plan."
  }
];

export const CourseCurriculum = () => {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-growth-green/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-growth-green/20">
            <Lightbulb className="w-4 h-4 text-growth-green animate-pulse-soft" />
            <span className="text-growth-green text-sm font-medium">Course Curriculum</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            4 Fun-Filled Weeks to
            <span className="block text-growth-green">Unstoppable Confidence</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each week focuses on a different aspect of confidence building through engaging activities, 
            games, and real-world practice designed specifically for children aged 6-11.
          </p>
        </div>

        {/* Module Timeline */}
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isActive = activeModule === index;
            
            return (
              <Card 
                key={index}
                className={`relative cursor-pointer transition-all duration-300 hover:-translate-y-2 border-2 ${
                  isActive 
                    ? `border-${module.color} shadow-${module.color.split('-')[0] === 'confidence' ? 'primary' : module.color.split('-')[0] === 'success' ? 'secondary' : 'accent'}` 
                    : 'border-card-border hover:border-muted-foreground/30'
                }`}
                onClick={() => setActiveModule(index)}
              >
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-${module.color}/10 flex items-center justify-center mb-4 ${isActive ? 'animate-bounce-gentle' : ''}`}>
                    <Icon className={`w-6 h-6 text-${module.color}`} />
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-1">Week {module.week}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.subtitle}</p>
                  
                  {isActive && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <Play className="w-3 h-3" />
                      <span>Click for details</span>
                    </div>
                  )}
                </div>
                
                {/* Active indicator */}
                {isActive && (
                  <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${module.color} rounded-full animate-pulse-soft`}></div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Active Module Details */}
        <Card className="gradient-card border border-card-border overflow-hidden">
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Module Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const Icon = modules[activeModule].icon;
                    return <Icon className={`w-8 h-8 text-${modules[activeModule].color}`} />;
                  })()}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Week {modules[activeModule].week}: {modules[activeModule].title}
                    </h3>
                    <p className="text-muted-foreground">{modules[activeModule].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  {modules[activeModule].description}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{modules[activeModule].duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4" />
                    <span>Age-appropriate activities</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Skills Your Child Will Develop:</h4>
                  <div className="flex flex-wrap gap-2">
                    {modules[activeModule].skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground border border-card-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4 border border-card-border">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-success-orange" />
                    Week Outcome
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {modules[activeModule].outcome}
                  </p>
                </div>
              </div>
              
              {/* Right: Activities List */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 text-lg">Fun Activities Include:</h4>
                <div className="space-y-3">
                  {modules[activeModule].activities.map((activity, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-white rounded-lg border border-card-border hover:shadow-soft transition-all duration-200 group"
                    >
                      <div className={`w-6 h-6 rounded-full bg-${modules[activeModule].color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <ChevronRight className={`w-3 h-3 text-${modules[activeModule].color}`} />
                      </div>
                      <span className="text-foreground group-hover:text-confidence-blue transition-colors">
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                  >
                    <Play className="w-4 h-4 group-hover:animate-bounce-gentle" />
                    Preview Week {modules[activeModule].week} Activities
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
<div className="text-center mt-12">
  <Button variant="enroll" size="xl" className="group">
    <PartyPopper className="w-5 h-5 group-hover:animate-bounce-gentle" />
    
    {/* This text will show on small screens (mobile) and be hidden on 'sm' screens and larger */}
    <span className="sm:hidden">Enroll Now - ₹1,999</span>
    
    {/* This text will be hidden by default and show on 'sm' screens and larger */}
    <span className="hidden sm:inline">
      Start Your Child's Confidence Journey - ₹1,999
    </span>

  </Button>
  <p className="text-muted-foreground text-sm mt-3">
    30-day happiness guarantee • Expert child psychologist designed
  </p>
</div>
      </div>
    </section>
  );
};