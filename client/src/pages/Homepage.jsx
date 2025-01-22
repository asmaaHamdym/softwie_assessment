import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import HeroImg from "../assets/todo-lists-hero.jpg";
import Navbar from "../components/Navbar";
const Homepage = () => {
  return (
    <div>
      <div className="h-screen">
        <Navbar />

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
