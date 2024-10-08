"use client";
import Herosection from "@/components/Herosection";
import OurMenu from "@/components/OurMenu";
import StatsSection from "@/components/StatsSection";
import VerticalAccordion from "@/components/Vertical Accordion";
import TestimonialSection from "@/components/TestimonialSection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logos from "@/components/Logos";   
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Form from "@/components/Form";
import EventCatagories from "@/components/EventCatagories";
import PromotionSection from "@/components/PromotionSection";
import Features from "@/components/Features";

export default function Home() {
  const [open, setOpen] = useState(false);
  const OpenLoginmodal = () => {
    setOpen(true);
  }
  const CloseLoginmodal = () => {
    setOpen(false);
  }
  return (
    <main className="bg-white">
     <Navbar OpenLoginmodal={OpenLoginmodal}/>
     {open?
      <Form CloseLoginmodal={CloseLoginmodal}/>:null}
     <PromotionSection/>
     <Herosection/>
     <Logos/>
     <StatsSection/>
     <EventCatagories/>
     {/* <OurMenu/> */}
     <Features/>
     <TestimonialSection/>
     <VerticalAccordion/>
     <Faq/>
     <Footer/>
    </main>
  );
}
