import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { PartyPopper, Shield, Star, Clock, Users, CheckCircle, Gift, Phone } from "lucide-react";

const trustBadges = [
  { icon: Shield, text: "30-Day Money Back Guarantee" },
  { icon: Star, text: "Designed by Child Psychologists" },
  { icon: Users, text: "500+ Happy Families" },
  { icon: Clock, text: "Lifetime Access to Materials" }
];

const bonuses = [
  "Parent-Child Bonding Activity Pack (₹499 value)",
  "Confidence Building Games Collection (₹399 value)", 
  "Weekly Parent Guidance Videos (₹299 value)",
  "Private Parent Community Access (₹199 value)"
];

export const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    preferredTime: "",
    expectations: "",
    agreeTerms: false,
    agreeUpdates: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <section className="py-20 bg-gradient-to-br from-confidence-blue/5 to-success-orange/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center p-12 shadow-primary border border-card-border">
            <div className="w-20 h-20 bg-growth-green/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
              <CheckCircle className="w-10 h-10 text-growth-green" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              🎉 Welcome to Scoreazy!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Congratulations! You've just given your child the gift of unshakeable confidence. 
              We'll send you the course access details and welcome kit within 24 hours.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-6 mb-8 border border-card-border">
              <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-confidence-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-confidence-blue">1</span>
                  </div>
                  <span className="text-muted-foreground">Check your email for course access and welcome materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-success-orange/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-success-orange">2</span>
                  </div>
                  <span className="text-muted-foreground">Join our private parent community for support and tips</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-growth-green/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-growth-green">3</span>
                  </div>
                  <span className="text-muted-foreground">Start your child's confidence journey with Week 1 activities</span>
                </div>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="group">
              <Phone className="w-4 h-4 group-hover:animate-bounce-gentle" />
              Contact Support if You Need Help
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-confidence-blue/5 to-success-orange/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-success-orange/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-success-orange/20">
            <PartyPopper className="w-4 h-4 text-success-orange animate-pulse-soft" />
            <span className="text-success-orange text-sm font-medium">Enrollment Now Open</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Start Your Child's
            <span className="block text-success-orange">Confidence Journey Today</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join 500+ families who have transformed their children's confidence with our proven 4-week program.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Course Details & Pricing */}
          <div>
            <Card className="p-8 shadow-secondary border border-card-border mb-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-foreground mb-2">
                  <span className="line-through text-2xl text-muted-foreground mr-2">₹4,996</span>
                  ₹1,999
                </div>
                <p className="text-muted-foreground">One-time payment • Lifetime access</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-success-orange" />
                  What's Included (₹1,396 in Bonuses!)
                </h3>
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-growth-green flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{bonus}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon className="w-4 h-4 text-confidence-blue" />
                      <span>{badge.text}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Right: Enrollment Form */}
          <Card className="p-8 shadow-primary border border-card-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="childName" className="text-foreground font-medium">
                    Child's Name *
                  </Label>
                  <Input
                    id="childName"
                    value={formData.childName}
                    onChange={(e) => handleInputChange('childName', e.target.value)}
                    placeholder="Enter your child's name"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="childAge" className="text-foreground font-medium">
                    Child's Age *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('childAge', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 years</SelectItem>
                      <SelectItem value="7">7 years</SelectItem>
                      <SelectItem value="8">8 years</SelectItem>
                      <SelectItem value="9">9 years</SelectItem>
                      <SelectItem value="10">10 years</SelectItem>
                      <SelectItem value="11">11 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="grade" className="text-foreground font-medium">
                  Current Grade *
                </Label>
                <Select onValueChange={(value) => handleInputChange('grade', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade-3">Grade 3</SelectItem>
                    <SelectItem value="grade-4">Grade 4</SelectItem>
                    <SelectItem value="grade-5">Grade 5</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="parentName" className="text-foreground font-medium">
                  Parent/Guardian Name *
                </Label>
                <Input
                  id="parentName"
                  value={formData.parentName}
                  onChange={(e) => handleInputChange('parentName', e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="mt-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="preferredTime" className="text-foreground font-medium">
                  Preferred Activity Time
                </Label>
                <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="When would your child prefer to do activities?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (7 AM - 11 AM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    <SelectItem value="flexible">Flexible timing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeTerms', checked)}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to the Terms of Service and Privacy Policy. I understand this program is designed 
                    to build confidence and is not a substitute for professional therapy if needed. *
                  </Label>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="updates"
                    checked={formData.agreeUpdates}
                    onCheckedChange={(checked) => handleInputChange('agreeUpdates', checked)}
                  />
                  <Label htmlFor="updates" className="text-sm text-muted-foreground leading-relaxed">
                    Yes, I'd like to receive helpful tips and updates about my child's confidence journey.
                  </Label>
                </div>
              </div>

              <Button 
                type="submit" 
                variant="enroll" 
                size="xl" 
                className="w-full group"
                disabled={isSubmitting || !formData.agreeTerms}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing Enrollment...
                  </>
                ) : (
                  <>
                    <PartyPopper className="w-5 h-5 group-hover:animate-bounce-gentle" />
                    Enroll Now for ₹1,999
                  </>
                )}
              </Button>
              
              <p className="text-center text-xs text-muted-foreground">
                Secure payment powered by Razorpay • 30-day money back guarantee
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};