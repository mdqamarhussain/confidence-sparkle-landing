import { useState } from "react";
import { ChevronDown, HelpCircle, Clock, Users, Shield, BookOpen, Star, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    icon: Users,
    question: "What age group is this course designed for?",
    answer: "The Confidence Building course is specifically designed for children aged 6-11 (Grades 3-5). Our child psychologists have carefully crafted activities that are developmentally appropriate for this age group, ensuring maximum engagement and effectiveness."
  },
  {
    icon: Clock,
    question: "How much time does my child need to spend daily?",
    answer: "Each daily session is designed to last 45 minutes, including interactive activities, games, and reflection time. The activities are broken into smaller chunks to maintain attention and can be split throughout the day if needed. Parents can participate in 15-20 minutes of the session for bonding activities."
  },
  {
    icon: BookOpen,
    question: "What if my child is very shy or has low confidence?",
    answer: "Our program is especially effective for shy children! We start with gentle, non-threatening activities that gradually build comfort and confidence. Many parents report that their initially shy children become the most enthusiastic participants by week 2. The program is designed to meet children exactly where they are."
  },
  {
    icon: Heart,
    question: "How do I know if the program is working for my child?",
    answer: "You'll see changes within the first week! We provide daily progress trackers, weekly confidence assessments, and milestone celebrations. Most parents notice improved communication, willingness to try new things, and increased happiness in their children within 7-10 days."
  },
  {
    icon: Shield,
    question: "What if my child doesn't complete the course or we're not satisfied?",
    answer: "We offer a 30-day happiness guarantee! If you or your child aren't completely satisfied with the program, we'll provide a full refund, no questions asked. We also offer flexible scheduling - if life gets busy, you can pause and resume the course anytime."
  },
  {
    icon: Star,
    question: "How is this different from other confidence programs?",
    answer: "Our program is specifically designed by child psychologists for the Indian context and family values. It combines proven psychological techniques with fun, game-based learning. Unlike generic programs, we focus on building confidence through structured activities that show measurable results in just 4 weeks."
  },
  {
    icon: Users,
    question: "Do parents need to participate in the activities?",
    answer: "Parent participation is encouraged but flexible! Some activities are designed for parent-child bonding, while others your child can do independently. We provide clear guidance on when parent involvement enhances the experience. Working parents can easily fit this into their schedule."
  },
  {
    icon: BookOpen,
    question: "What materials or resources are included?",
    answer: "Everything is included! You'll get digital workbooks, printable activity sheets, confidence tracking charts, weekly video guides, bonus parent resources, and access to our private parent community for support and tips. No additional purchases necessary."
  },
  {
    icon: Clock,
    question: "Can we go at our own pace or is it strictly 4 weeks?",
    answer: "While the program is designed for optimal results in 4 weeks, you can absolutely go at your own pace! Some families finish in 3 weeks, others take 6 weeks. You have lifetime access to all materials, so you can repeat activities or take breaks as needed."
  },
  {
    icon: Heart,
    question: "Will my child's confidence continue to grow after the course?",
    answer: "Absolutely! The course teaches your child fundamental confidence-building skills and thought patterns that last a lifetime. We also provide a post-course action plan and quarterly check-in resources to help maintain and continue building on the progress made during the 4 weeks."
  }
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-growth-green/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-growth-green/20">
            <HelpCircle className="w-4 h-4 text-growth-green animate-pulse-soft" />
            <span className="text-growth-green text-sm font-medium">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Everything Parents
            <span className="block text-growth-green">Want to Know</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've answered the most common questions from parents about our confidence building program. 
            Have more questions? We're here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(index);
              const Icon = faq.icon;
              
              return (
                <Card 
                  key={index}
                  className="overflow-hidden border border-card-border hover:shadow-soft transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left hover:bg-muted/30 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-grow">
                        <div className="w-10 h-10 rounded-lg bg-growth-green/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-growth-green" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 animate-slide-up">
                      <div className="ml-14 pt-2 border-t border-card-border">
                        <p className="text-muted-foreground leading-relaxed mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto border border-card-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our child development experts are here to help! Book a free 15-minute consultation 
              to discuss your child's specific needs and how our program can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-growth-green text-white rounded-lg hover:bg-growth-green/90 transition-colors font-medium">
                Book Free Consultation
              </button>
              <button className="px-6 py-3 border border-card-border text-foreground rounded-lg hover:bg-muted/50 transition-colors">
                Email Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};