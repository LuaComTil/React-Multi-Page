import About from "../../components/About";
import Banner from "../../components/Banner";
import Callback from "../../components/Callback";
import FAQ from "../../components/FAQ";
import Hero from "../../components/Hero";
import Products from "../../components/Products";
import Ratings from "../../components/Ratings";
import Services from "../../components/Services";


function HomePage() {

  return (
    <>
      <Hero/>
      <Banner/>
      <Services/>
      <Products/>
      <Ratings/>
      <About/>
      <FAQ/>
      <Callback/>
    </>
  )
}

export default HomePage;
