import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuPreview } from "@/components/MenuPreview";
import { Gallery } from "@/components/Gallery";
import { Reservation } from "@/components/Reservation";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <MenuPreview />
      <Reservation />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
