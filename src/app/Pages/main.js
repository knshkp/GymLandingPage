import Logo from "../../../public/logo.png";
import Image from "next/image";
import first from "../../../public/first.png";
import Advantage from "./advantage";
import Membership from "./membership";

export default function Main() {
  return (
    <>
      {/* Navbar */}
      <div className="mt-[40px] flex flex-wrap items-center justify-between px-4 md:px-[7%] font-outfit">
        <div className="flex space-x-2">
            <Image className="w-[70px] h-[70px]" alt="logo" src={Logo} />
            <h1 className="text-[24px] font-semibold mt-4"> Ram's Fitness Impact Club</h1>
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
      <div className="mt-[60px] flex flex-col md:flex-row items-center px-4 md:px-[7%]">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h1 className="text-[10vw] md:text-[87px] font-outfit">
            make your
            <br />
            <span className="font-bold">BODY SHAPE</span>
          </h1>
          <p className="w-full md:w-[500px] text-[16px] md:text-[18px] mt-4 text-gray-300">
            Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.
          </p>
          <div className="w-[200px] h-[52px] mt-6 bg-[#fded00] rounded-[20px] flex items-center justify-center font-semibold mx-auto md:mx-0">
            <h1 className="text-black text-[20px]">Get Started</h1>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:ml-[50px]">
          <Image src={first} alt="firstImage" className="w-full md:w-[600px] h-auto" />
        </div>
      </div>

      {/* Advantage Section */}
      <Advantage />
      <Membership/>
    </>
  );
}
