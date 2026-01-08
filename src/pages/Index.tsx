import Hero from "@/components/Hero";
import PackGrid from "@/components/PackGrid";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PackGrid />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
