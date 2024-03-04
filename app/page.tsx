import Footer from "@/components/Footer";
import Hero from "./hero/Hero";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Touch from "@/components/Touch";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Touch />
    </main>
  );
}
