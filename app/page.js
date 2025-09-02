import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Production from "./components/Production";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4 w-full">
        <div className="mt-16 md:mt-20">
          {/* Added margin-top */}
          <Slider />
        </div>
        <Production />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
