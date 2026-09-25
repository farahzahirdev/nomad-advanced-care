import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyNomad from "@/components/WhyNomad";
import Credentials from "@/components/Credentials";
import Testimonials from "@/components/Testimonials";
import MeetTeam from "@/components/MeetTeam";
import Providers from "@/components/Providers";
import FAQ from "@/components/FAQ";
import BookingCalendar from "@/components/BookingCalendar";
import FinalCTA from "@/components/FinalCTA";
import InquiryForm from "@/components/InquiryForm";
import ServiceArea from "@/components/ServiceArea";
import Compliance from "@/components/Compliance";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <WhyNomad />
      <Credentials />
      <Testimonials />
      <Providers />
      <MeetTeam />
      <BookingCalendar />
      <FAQ />
      <InquiryForm />
      <FinalCTA />
      <ServiceArea />
      <Compliance />
    </>
  );
}
