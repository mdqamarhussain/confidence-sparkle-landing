import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyConfidence } from "@/components/WhyConfidence";
import { CourseCurriculum } from "@/components/CourseCurriculum";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { WhatsAppSupport } from "@/components/WhatsAppSupport";
import { useScrollReveal, useProgressBar } from "@/hooks/useAnimations";

const Index = () => {
  // Initialize scroll animations
  useScrollReveal();
  useProgressBar();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div id="about">
        <WhyConfidence />
      </div>
      <div id="courses">
        <CourseCurriculum />
      </div>
      <Testimonials />
      <FAQ />
      <div id="contact">
        <EnrollmentForm />
      </div>
      <WhatsAppSupport />
    </div>
  );
};

export default Index;
