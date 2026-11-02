import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
// TODO: re-enable once real case studies are added (see src/components/Portfolio.tsx)
// import Portfolio from "@/components/Portfolio";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Proposition from "@/components/Proposition";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import AdsShowcase from "@/components/AdsShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        {/* <Proposition /> */}
        <WebsiteShowcase />
        <AdsShowcase />
        <About />
        {/* <Portfolio /> */}
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
