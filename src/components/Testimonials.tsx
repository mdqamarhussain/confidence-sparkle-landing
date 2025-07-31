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

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success-orange/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-success-orange/20">
            <Star className="w-4 h-4 text-success-orange animate-pulse-soft" />
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

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="relative overflow-hidden bg-white shadow-secondary border border-card-border">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-success-orange/10 to-transparent"></div>
            <div className="absolute top-4 right-4">
              <Quote className="w-8 h-8 text-success-orange/30" />
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Parent & Child Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="w-20 h-20 bg-success-orange/10 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 animate-pulse-soft">
                    <span className="text-2xl font-bold text-success-orange">
                      {current.childName[0]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{current.parentName}</h3>
                  <p className="text-muted-foreground text-sm">
                    Parent of {current.childName}, age {current.childAge}
                  </p>
                  <p className="text-muted-foreground text-xs">{current.location}</p>
                  
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-success-orange text-success-orange" 
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
                      <Star className="w-4 h-4 text-success-orange" />
                      Amazing Transformation
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Key Improvement:</strong> {current.improvement}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <h5 className="font-medium text-red-800 text-sm mb-1">Before Scoreazy:</h5>
                      <p className="text-red-700 text-xs">{current.beforeAfter.before}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <h5 className="font-medium text-green-800 text-sm mb-1">After Scoreazy:</h5>
                      <p className="text-green-700 text-xs">{current.beforeAfter.after}</p>
                    </div>
                  </div>
                </div>
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

        {/* Summary Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-soft border border-card-border">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-success-orange mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <p className="text-muted-foreground text-sm">Happy Families</p>
            </div>
            
            <div className="group">
              <div className="text-3xl font-bold text-confidence-blue mb-2 group-hover:scale-110 transition-transform">
                4.9/5
              </div>
              <p className="text-muted-foreground text-sm">Parent Rating</p>
            </div>
            
            <div className="group">
              <div className="text-3xl font-bold text-growth-green mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <p className="text-muted-foreground text-sm">Completion Rate</p>
            </div>
            
            <div className="group">
              <div className="text-3xl font-bold text-success-orange mb-2 group-hover:scale-110 transition-transform">
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