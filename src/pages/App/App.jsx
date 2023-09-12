import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Outlet/>
    </div>
  );
};

export default App;
