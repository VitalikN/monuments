import Hero from "@/components/Hero/Hero";
import "./page.module.css";
import Achievements from "@/components/Achievements/Achievements";
import Services from "@/components/Services/Services";
import Product from "@/components/Product/Product";
import Order from "@/components/Order/Order";

const Home = () => {
  return (
    <>
      <Hero />
      <Achievements />
      <Services />
      <Product />
      <Order />
    </>
  );
};
export default Home;
