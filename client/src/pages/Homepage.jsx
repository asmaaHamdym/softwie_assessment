import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.webp";
import Navbar from "../components/Navbar";
const Homepage = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div
          className="relative h-screen bg-cover bg-center bg-white"
          style={{ backgroundImage: `url(${HeroImg})` }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2E4052] via-[#2E4052]"></div> */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative md:flex items-center px-10 h-full md:justify-between">
            <div className="text-white md:py-8 py-20">
              <div className="md:mb-28 mb-4 text-center md:text-left">
                <h1 className="md:text-6xl text-5xl font-bold mb-6">
                  Let's help you plan your life!
                </h1>
                <p className="text-xl leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos, voluptatum!
                  <br /> Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Modi, aut!
                </p>
              </div>

              <div className="flex justify-center md:justify-start">
                <button className="p-4 bg-[#412234] text-white font-semibold rounded-lg shadow-md">
                  <Link to={"/login"}>Manage your Tasks</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
