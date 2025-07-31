import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const WhatsAppSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the WhatsApp button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="playful"
          size="icon"
          className="w-16 h-16 rounded-full shadow-accent animate-bounce-gentle hover:animate-none"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-scale-in">
          <Card className="w-80 p-0 shadow-primary border border-card-border overflow-hidden">
            {/* Header */}
            <div className="bg-growth-green text-white p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Scoreazy Support</h3>
                  <p className="text-sm text-white/90">Child Confidence Experts</p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4 space-y-4">
              <div className="bg-muted/50 rounded-lg p-3 border border-card-border">
                <p className="text-sm text-foreground mb-2">
                  👋 Hi there! We're here to help you build your child's confidence.
                </p>
                <p className="text-xs text-muted-foreground">
                  How can we assist you today?
                </p>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => window.open('https://wa.me/919876543210?text=Hi! I have questions about the Confidence Building course for my child.', '_blank')}
                  className="w-full text-left p-3 rounded-lg border border-card-border hover:bg-muted/50 transition-colors"
                >
                  <div className="text-sm font-medium text-foreground">❓ Course Questions</div>
                  <div className="text-xs text-muted-foreground">Ask about the program details</div>
                </button>
                
                <button
                  onClick={() => window.open('https://wa.me/919876543210?text=Hi! I need help with enrollment for my child.', '_blank')}
                  className="w-full text-left p-3 rounded-lg border border-card-border hover:bg-muted/50 transition-colors"
                >
                  <div className="text-sm font-medium text-foreground">📝 Enrollment Help</div>
                  <div className="text-xs text-muted-foreground">Get assistance with registration</div>
                </button>
                
                <button
                  onClick={() => window.open('https://wa.me/919876543210?text=Hi! I would like to speak with a child development expert.', '_blank')}
                  className="w-full text-left p-3 rounded-lg border border-card-border hover:bg-muted/50 transition-colors"
                >
                  <div className="text-sm font-medium text-foreground">👩‍⚕️ Expert Consultation</div>
                  <div className="text-xs text-muted-foreground">Talk to our child psychologists</div>
                </button>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Response time: Usually within 2 hours</span>
              </div>
              
              <Button
                onClick={() => window.open('https://wa.me/919876543210?text=Hi! I am interested in the Confidence Building course for my child.', '_blank')}
                variant="playful"
                size="sm"
                className="w-full"
              >
                <Phone className="w-4 h-4" />
                Start WhatsApp Chat
              </Button>
            </div>
          </Card>
        </div>
      )}
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};