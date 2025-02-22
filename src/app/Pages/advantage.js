import Logo from "../../../public/logo.png";
import Image from "next/image";
import lineIcon from "../../../public/icon_line.png";
import timeIcon from "../../../public/icon_time.png";
import fitnessIcon from "../../../public/icon_fitness.png";
import equipementIcon from "../../../public/icon_eqipment.png";

export default function Advantage() {
  return (
    <div className="mt-[100px] mx-[7%] text-white">
      {/* Title */}
      <h1 className="text-[36px] md:text-[48px] font-outfit text-center md:text-left">
        Reasons to Join
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* Advantage Item 1 */}
        <div className="flex items-center gap-6">
          <Image className="w-[41px] h-[52px]" src={lineIcon} alt="line icon" />
          <div className="w-full md:w-[400px]">
            <h1 className="text-[18px] font-bold">15000 sq m.</h1>
            <p className="text-[14px] text-gray-300">
              A spacious gym for sports – a safe distance between exercise machines
            </p>
          </div>
        </div>

        {/* Advantage Item 2 */}
        <div className="flex items-center gap-6">
          <Image className="w-[41px] h-[52px]" src={equipementIcon} alt="equipment icon" />
          <div className="w-full md:w-[400px]">
            <h1 className="text-[18px] font-bold">More than 50 Equipments</h1>
            <p className="text-[14px] text-gray-300">
              Premium equipment from Bodyline and Fitline, featuring world-class machines.
            </p>
          </div>
        </div>

        {/* Advantage Item 3 */}
        <div className="flex items-center gap-6">
          <Image className="w-[41px] h-[52px]" src={timeIcon} alt="time icon" />
          <div className="w-full md:w-[400px]">
            <h1 className="text-[18px] font-bold">4 Fitness Zones</h1>
            <p className="text-[14px] text-gray-300">
              Our gym features dedicated zones for cardio, strength, and functional training.
            </p>
          </div>
        </div>

        {/* Advantage Item 4 */}
        <div className="flex items-center gap-6">
          <Image className="w-[41px] h-[52px]" src={fitnessIcon} alt="fitness icon" />
          <div className="w-full md:w-[400px]">
            <h1 className="text-[18px] font-bold">Round the Clock Operations</h1>
            <p className="text-[14px] text-gray-300">
              Open 24/7, allowing you to train at your convenience anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
