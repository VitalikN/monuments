import Hero from "@/components/Hero/Hero";
import "./page.module.css";
import Achievements from "@/components/Achievements/Achievements";
import Services from "@/components/Services/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Achievements />
      <Services />
    </>
  );
};
export default Home;
