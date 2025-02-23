import Logo from "../../../public/logo.png";
import Image from "next/image";
import first from "../../../public/first.png";
import Advantage from "./advantage";
import Membership from "./membership";
import Staff from "./Staff";
import AnimatedTestimonialsDemo from "./reviewacternity";
import Facility from "./Facility";
import { ParallaxScrollDemo } from "./GymImages";
export default function Main() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between px-4 md:px-[7%] font-outfit bg-black py-4">
        <div className="flex space-x-2 items-center">
          <Image src={Logo} alt="logo" width={70} height={70} />
          <h1 className="text-[24px] font-semibold">Ram's Fitness Impact Club</h1>
        </div>
        <div className="hidden md:flex space-x-[40px] text-[18px] font-bold">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Workout Programs</h1>
          <h1>Recipes</h1>
          <h1>Store</h1>
          <h1>Login</h1>
          <h1>Sign up</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative mt-[80px] flex flex-col md:flex-row items-center px-4 md:px-[7%] bg-[url('/first.png')] bg-cover bg-center">
        {/* Blur Overlay for Left Side */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-black/30 backdrop-blur-[2px] rounded-r-2xl"></div>

        {/* Left Text */}
        <div className="relative z-10 text-center md:text-left text-white w-full md:w-1/2 p-6">
          <h1 className="text-[10vw] md:text-[87px] font-outfit">
            MAKE YOUR
            <br />
            <span className="font-bold text-yellow-300">BODY SHAPE</span>
          </h1>
          <p className="w-full md:w-[500px] text-[16px] md:text-[18px] mt-4 text-gray-300">
            Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.
          </p>
          <div className="w-[200px] h-[52px] mt-6 bg-[#fded00] rounded-[20px] flex items-center justify-center font-semibold mx-auto md:mx-0">
            <h1 className="text-black text-[20px]">Get Started</h1>
          </div>
        </div>
      </div>

      {/* Sections */}
      <Advantage />
      <Membership />
      <Staff />
      <AnimatedTestimonialsDemo />
      <Facility />
      <ParallaxScrollDemo />
    </>
  );
}
