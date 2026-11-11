import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Collection from "@/components/Collection";
import PromoBanner from "@/components/PromoBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Collection />
        <PromoBanner />
        <WhyChooseUs />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
