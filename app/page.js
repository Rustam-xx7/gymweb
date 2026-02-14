import Image from "next/image";
import OptionCards from "./components/OptionCards";

export default function Home() {

  const scrollStyle = `
    @keyframes slideInfinite {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    } 
  `;

  return (
    <div className="min-h-screen dark:bg-black scrollbar-hide text-white">
      <div className="hero relative h-screen overflow-hidden">
        <Image
          src="/gym-hero-bg.webp"
          alt="Gym Image"
          width={800}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full items-center justify-center flex">
          <div className="h-full w-[80%] flex flex-col gap-0  justify-center items-center px-16 font-bold">
            <span className="w-full text-start text-[5rem] ">OBTAIN</span>
            <span className="w-full text-center md:text-[10rem] ">
              F I T N E S S
            </span>
            <span className="w-full text-end text-[5rem]  ">GOAL</span>
          </div>
          <Image
            src="/gym-person1.webp"
            alt="Gym Overlay"
            height={800}
            width={300}
            className="h-[90%] w-fit absolute left-1/2 -translate-x-1/2 -bottom-10"
          />
        </div>
        <div className="bg-linear-to-t absolute bottom-0 w-full h-40 z-6 from-black to-transparent"></div>
      </div>
      <div className="h-fit w-full relative overflow-hidden">
        <Image
          src={"/gym-bg2.webp"}
          alt="Gym Background 2"
          width={800}
          height={300}
          className="w-full object-cover h-full relative "
        ></Image>
        <div className="containt absolute z-2 top-0 left-0 h-fit  w-full">
          <div className="cards  min-h-56 w-full flex justify-start items-center overflow-x-auto gap-2 py-4 px-4 mb-2 snap-x snap-mandatory scrollbar-hide">
            <OptionCards text="Option 1" num="01" />
            <OptionCards text="Option 2" num="02" />
            <OptionCards text="Option 3" num="03" />
            <OptionCards text="Option 4" num="04" />
            <OptionCards text="Option 5" num="05" />
            <OptionCards text="Option 6" num="06" />
            <OptionCards text="Option 7" num="07" />
          </div>
          <div className="h-screen w-full  px-8 flex justify-center items-center gap-4 relative">
            <div className="left w-[50%] h-full  flex flex-col gap-6 justify-center items-start px-4 ">
              <span className="text-6xl font-bold">
                WE ARE PUSHING THE LIMIT OF YOUR CORE STRENGTH
              </span>
              <span className="text-gray-300">
                Welcome to your new training home, where progress is built one
                workout at a time. Whether your goal is to gain strength, lose
                weight, improve endurance, or simply feel healthier, we are here
                to guide you at every step. Our gym offers expert coaches,
                modern equipment, and a motivating community that helps you stay
                focused and consistent. No matter your starting point, you can
                grow stronger, fitter, and more confident with every session.
                Start today, trust the process, and become the strongest version
                of yourself.
              </span>
              <button className="bg-white/40 hover:bg-amber-600/40 border-l-2 border-r-2 border-orange-600 text-white font-bold py-2 px-6 ">
                JOIN NOW
              </button>
            </div>
            <div className="right w-[50%] h-full flex flex-col gap-4 justify-center items-center ">
              <div className="h-30 w-110 px-6 bg-white/20 border-b-4 border-orange-600 rounded-lg flex flex-col justify-center items-end gap-1">
                <span className="text-sm text-gray-300">satisfied members</span>
                <span className="font-bold text-4xl">251K +</span>
              </div>
              <div className="h-30 w-110 px-6 bg-white/20 border-b-4 border-orange-600 rounded-lg flex flex-col justify-center items-end gap-1">
                <span className="text-sm text-gray-300">satisfied members</span>
                <span className="font-bold text-4xl">251K +</span>
              </div>
              <div className="h-30 w-110 px-6 bg-white/20 border-b-4 border-orange-600 rounded-lg flex flex-col justify-center items-end gap-1">
                <span className="text-sm text-gray-300">satisfied members</span>
                <span className="font-bold text-4xl">251K +</span>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/gym-person2.webp"
          alt="Gym Background 3"
          width={700}
          height={300}
          className="absolute -bottom-60 left-[61%] -translate-x-1/2  object-cover z-4"
        ></Image>
        <div className="infiniteLoop flex gap-7 absolute bottom-0 left-0 w-full h-8 bg-orange-500 z-6" style={{  animation: 'slideInfinite 20s linear infinite', whiteSpace: 'nowrap' }}>
          <span style={{ flexShrink: 0}}>CARDIO</span>
          <span style={{ flexShrink: 0}}>*</span>
          <span style={{ flexShrink: 0}}>BECH PRESS</span>
          <span style={{ flexShrink: 0}}>*</span>
          <span style={{ flexShrink: 0}}>DEAD LIFT</span>
          <span style={{ flexShrink: 0}}>*</span>
          <span style={{ flexShrink: 0}}>PILATES</span>
          <span style={{ flexShrink: 0}}>*</span>
          <span style={{ flexShrink: 0}}>DUMBBLES</span>
          <span style={{ flexShrink: 0}}>CARDIO</span>
          <span style={{ flexShrink: 0}}>*</span>
          <span style={{ flexShrink: 0}}>BECH PRESS</span>
          <span style={{ flexShrink: 0}}>*</span>
          <span style={{ flexShrink: 0}}>DEAD LIFT</span>
          <span style={{ flexShrink: 0}}>*</span>
          <span style={{ flexShrink: 0}}>PILATES</span>
          <span style={{ flexShrink: 0}}>*</span>
          <span style={{ flexShrink: 0}}>DUMBBLES</span>
        </div>
      </div>
    </div>
  );
}
