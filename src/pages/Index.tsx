import Hero from "@/components/Hero";
import Synopsis from "@/components/Synopsis";
import Author from "@/components/Author";
import Context from "@/components/Context";
import BuySection from "@/components/BuySection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Synopsis />
      <Author />
      <Context />
      <BuySection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
