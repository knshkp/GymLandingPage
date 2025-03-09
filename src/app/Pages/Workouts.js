
export default function Workout() {
    return (
        <>
            <div className="flex space-x-4 mt-[125px]">
                {/* First Card */}
                <div className="relative w-[33%] h-[360px] bg-cover bg-center" style={{ backgroundImage: "url('/fightercopy.jpg')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50  items-center justify-center">
                        <p className="text-white font-bold text-[48px] mt-20 text-center hover:bg-black">Endurance</p>
                        <p className="text-center text-24 w-[60%] ml-[20%] ">Our Academy focuses on continuous improvement and individual growth, tracking your fitness journey to set new goals and reach higher levels of performance.</p>
                    </div>
                    
                </div>

                {/* Second Card */}
                <div className="relative w-[33%] h-[360px] bg-cover bg-center" style={{ backgroundImage: "url('/karatebgFirst.avif')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50  items-center justify-center">
                        <p className="text-white font-bold text-[48px] mt-20 text-center hover:bg-black ">Agility</p>
                        <p className="text-center text-24 w-[60%] ml-[20%] text-white    ">Our Academy focuses on continuous improvement and individual growth, tracking your fitness journey to set new goals and reach higher levels of performance.</p>
                    </div>

                </div>

                {/* Third Card */}
                <div className="relative w-[33%] h-[360px] bg-cover bg-center" style={{ backgroundImage: "url('/fightercopy.jpg')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50  items-center justify-center">
                    <p className="text-white font-bold text-[48px] mt-20 text-center hover:bg-black">Reflexes</p>
                    <p className="text-center text-24 w-[60%] ml-[20%] text-white ">Our Academy focuses on continuous improvement and individual growth, tracking your fitness journey to set new goals and reach higher levels of performance.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
