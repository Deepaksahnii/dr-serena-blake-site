import Hero from "@/components/Hero";
import About from "./about/About";
import Services from "./service/Services";
import Contact from "./contact/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer/>
    </main>
  );
}
