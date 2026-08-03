import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Proposition from "@/components/Proposition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Portfolio />
        <Philosophy />
        <Services />
        <Proposition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
