import { Link } from "react-router";
import Hero from "../components/Hero";
import Rabbit from "../components/Rabbit";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
    
    <main className="mx-auto max-w-4xl p-4 text-white xl:max-w-5xl">
      <Hero />
      <hr className="mx-auto w-1/2 border-t border-black dark:border-white" />

      <Rabbit />

      <hr className="mx-auto w-1/2 border-t border-black dark:border-white" />

      <Testimonials />

      <hr className="mx-auto w-1/2 border-t border-black dark:border-white" />

      <Contact />

    </main>
    <Footer />
    </>
  );
};
export default Homepage;
