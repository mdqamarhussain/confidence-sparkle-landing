import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    parentName: "Priya Sharma",
    childName: "Aarav",
    childAge: 8,
    location: "Mumbai",
    rating: 5,
    image: "/api/placeholder/80/80",
    testimonial: "Before Scoreazy, Aarav was shy and rarely spoke up in class. Now he volunteers to answer questions and even gave a presentation without any fear! The transformation has been incredible.",
    improvement: "Now participates actively in class discussions and makes friends easily",
    beforeAfter: {
      before: "Rarely spoke in class, avoided group activities",
      after: "Volunteers to answer questions, leads group projects"
    }
  },
  {
    id: 2,
    parentName: "Rajesh Patel",
    childName: "Kavya", 
    childAge: 9,
    location: "Delhi",
    rating: 5,
    image: "/api/placeholder/80/80",
    testimonial: "Kavya used to get upset easily when things didn't go her way. The problem-solving activities taught her to stay calm and think of solutions. She's become so much more resilient!",
    improvement: "Handles setbacks with confidence and finds creative solutions",
    beforeAfter: {
      before: "Got frustrated easily, avoided challenging tasks",
      after: "Embraces challenges, stays calm under pressure"
    }
  },
  {
    id: 3,
    parentName: "Meera Nair",
    childName: "Arjun",
    childAge: 7,
    location: "Bangalore",
    rating: 5,
    image: "/api/placeholder/80/80",
    testimonial: "As working parents, we were worried about Arjun's self-confidence. Scoreazy's activities were so engaging that he looked forward to them every day. His teachers notice the positive change too!",
    improvement: "Shows initiative in schoolwork and social activities",
    beforeAfter: {
      before: "Needed constant encouragement to try new things",
      after: "Takes initiative and encourages other children"
    }
  },
  {
    id: 4,
    parentName: "Anita Gupta",
    childName: "Diya",
    childAge: 10,
    location: "Pune", 
    rating: 5,
    image: "/api/placeholder/80/80",
    testimonial: "Diya was always comparing herself to others and felt she wasn't good enough. The 'I Am Amazing' module helped her recognize her unique strengths. She's so much happier now!",
    improvement: "Celebrates her achievements and supports friends' success",
    beforeAfter: {
      before: "Constantly compared herself to others",
      after: "Recognizes her unique strengths and talents"
    }
  },
  {
    id: 5,
    parentName: "Suresh Kumar",
    childName: "Rohan",
    childAge: 6,
    location: "Chennai",
    rating: 5,
    image: "/api/placeholder/80/80",
    testimonial: "Even though Rohan is just 6, the activities were perfectly age-appropriate. He loved the games and didn't even realize he was building confidence! The parent-child activities brought us closer too.",
    improvement: "More adventurous and willing to try new activities",
    beforeAfter: {
      before: "Hesitant to try new activities or meet new people",
      after: "Eager to explore and make new friends"
    }
  }
];

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [flippedCard, setFlippedCard] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setFlippedCard(false); // Reset flip when changing testimonial
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setFlippedCard(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute top-16 left-16">
        <Star className="w-8 h-8 text-success-orange/30 sparkle" />
      </div>
      <div className="absolute top-32 right-32">
        <Star className="w-6 h-6 text-confidence-blue/30 sparkle" />
      </div>
      <div className="absolute bottom-20 left-1/3">
        <Star className="w-4 h-4 text-growth-green/30 sparkle" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-success-orange/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-success-orange/20 bounce-hover">
            <Star className="w-4 h-4 text-success-orange animate-pulse-soft sparkle" />
            <span className="text-success-orange text-sm font-medium">Parent Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Real Transformations from
            <span className="block text-success-orange">Happy Families</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how Scoreazy's confidence building program has transformed children's lives 
            and brought families closer together.
          </p>
        </div>

        {/* Enhanced Main Testimonial Card with Flip Effect */}
        <div className="max-w-4xl mx-auto mb-12 scroll-reveal">
          <Card 
            className="relative overflow-hidden bg-white shadow-secondary border border-card-border cursor-pointer scale-hover"
            onClick={() => setFlippedCard(!flippedCard)}
          >
            {/* Sparkle effects around card */}
            <div className="absolute -top-2 -left-2">
              <Star className="w-6 h-6 text-success-orange/50 sparkle" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Star className="w-4 h-4 text-confidence-blue/50 sparkle" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Star className="w-4 h-4 text-growth-green/50 sparkle" />
            </div>
            <div className="absolute -bottom-2 -right-2">
              <Star className="w-6 h-6 text-success-orange/50 sparkle" />
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-success-orange/10 to-transparent geometric-float"></div>
            <div className="absolute top-4 right-4">
              <Quote className="w-8 h-8 text-success-orange/30 sparkle" />
            </div>
            
            <div className={`p-8 transition-all duration-500 ${flippedCard ? 'opacity-0 absolute inset-0' : 'opacity-100'}`}>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Parent & Child Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="w-20 h-20 bg-success-orange/10 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 animate-pulse-soft scale-hover">
                    <span className="text-2xl font-bold text-success-orange sparkle">
                      {current.childName[0]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{current.parentName}</h3>
                  <p className="text-muted-foreground text-sm">
                    Parent of {current.childName}, age {current.childAge}
                  </p>
                  <p className="text-muted-foreground text-xs">{current.location}</p>
                  
                  {/* Enhanced Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-success-orange text-success-orange sparkle" 
                      />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="flex-grow">
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6 font-medium">
                    "{current.testimonial}"
                  </blockquote>
                  
                  {/* Before/After Improvement */}
                  <div className="bg-muted/50 rounded-lg p-4 mb-4 border border-card-border">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-success-orange sparkle" />
                      Amazing Transformation
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Key Improvement:</strong> {current.improvement}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Click card to see detailed before/after comparison</p>
                    <div className="inline-flex items-center gap-2 text-xs text-confidence-blue animate-pulse-soft">
                      <Star className="w-3 h-3" />
                      <span>Flip for more details</span>
                      <Star className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Flipped Side - Detailed Before/After */}
            <div className={`p-8 transition-all duration-500 ${flippedCard ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {current.childName}'s Amazing Journey
                </h3>
                <p className="text-muted-foreground">See the incredible transformation</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
                  <h4 className="font-bold text-red-800 text-lg mb-3 flex items-center justify-center gap-2">
                    😔 Before Scoreazy
                  </h4>
                  <p className="text-red-700">{current.beforeAfter.before}</p>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                  <h4 className="font-bold text-green-800 text-lg mb-3 flex items-center justify-center gap-2">
                    🌟 After Scoreazy
                  </h4>
                  <p className="text-green-700">{current.beforeAfter.after}</p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">Click again to return to main testimonial</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="hover:bg-success-orange/10 hover:border-success-orange"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          {/* Dots indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-success-orange scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-success-orange/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="hover:bg-success-orange/10 hover:border-success-orange"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Enhanced Summary Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-soft border border-card-border scroll-reveal">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="group scale-hover">
              <div className="text-3xl font-bold text-success-orange mb-2 group-hover:scale-110 transition-transform sparkle">
                500+
              </div>
              <p className="text-muted-foreground text-sm">Happy Families</p>
            </div>
            
            <div className="group scale-hover">
              <div className="text-3xl font-bold text-confidence-blue mb-2 group-hover:scale-110 transition-transform sparkle">
                4.9/5
              </div>
              <p className="text-muted-foreground text-sm">Parent Rating</p>
            </div>
            
            <div className="group scale-hover">
              <div className="text-3xl font-bold text-growth-green mb-2 group-hover:scale-110 transition-transform sparkle">
                98%
              </div>
              <p className="text-muted-foreground text-sm">Completion Rate</p>
            </div>
            
            <div className="group scale-hover">
              <div className="text-3xl font-bold text-success-orange mb-2 group-hover:scale-110 transition-transform sparkle">
                30 days
              </div>
              <p className="text-muted-foreground text-sm">Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};