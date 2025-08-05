import Footer from "./components/Footer";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4 w-full h-72">
        <Slider />
        <Footer />
      </div>
    </>
  );
}
