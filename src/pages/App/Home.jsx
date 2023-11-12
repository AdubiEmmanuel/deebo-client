import Hero from "./Hero";
import Explore from "./Layouts/Home/Explore/Explore";
import Goal from "./Layouts/Home/Goal";
import Slider from "./Layouts/Home/Slider/ImageSlider";
import Partners from "./homeLayout/Partners";

const Home = () => {
  return (
    <div>
      <Hero />
      <Goal />
      <Slider/>
      <Explore/>
      <Partners/>
    </div>
  );
}

export default Home