"use client";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import About from "./about/About";
import Services from "./service/Services";
import Contact from "./contact/Contact";
import Footer from "@/components/Footer";
import Faq from "./faq/Faq";
import Loader from "@/components/Loader";

export default function HomePage() {
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return ([<Hero key = "hero" />,
      <About key= "about" />,
      <Services key = "services"/>,
      <Faq key ="faq"/>,
      <Contact key = "contact"/>,
      <Footer key = "footer"/>
  ]
  );
}
