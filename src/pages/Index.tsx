import { Hero } from "@/components/Hero";
import { WhyConfidence } from "@/components/WhyConfidence";
import { CourseCurriculum } from "@/components/CourseCurriculum";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { WhatsAppSupport } from "@/components/WhatsAppSupport";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhyConfidence />
      <CourseCurriculum />
      <Testimonials />
      <FAQ />
      <EnrollmentForm />
      <WhatsAppSupport />
    </div>
  );
};

export default Index;
