import Hero from "./Hero";
import Explore from "./Layouts/Home/Explore/Explore";
import Goal from "./Layouts/Home/Goal";
import Slider from "./Layouts/Home/Slider/ImageSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <Goal />
      <Slider/>
      <Explore/>
    </div>
  );
}

export default Home