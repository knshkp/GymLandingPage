import ThreeDCardDemo from "./threeCard";
import Hover from "./hover";

export default function Staff() {
    return (
        <>
            <div className="w-full px-4"> {/* w-full to make it responsive and px-4 for small padding */}
                <h1 className="mt-[250px] text-white text-center text-[48px] font-bold">Gym Staff</h1>

                {/* First flex container for the cards */}
                <div className="flex flex-wrap justify-center gap-6"> 
                    <ThreeDCardDemo />
                    <ThreeDCardDemo />
                    <ThreeDCardDemo />
                    <ThreeDCardDemo />
                </div>

                {/* Second flex container for the cards */}
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                    <ThreeDCardDemo />
                    <ThreeDCardDemo />
                    <ThreeDCardDemo />
                    <ThreeDCardDemo />
                </div>
            </div>
        </>
    );
}
