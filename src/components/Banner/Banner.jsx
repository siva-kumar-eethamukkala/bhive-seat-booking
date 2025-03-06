import React from "react";
import BgVideo from "../../assets/Videos/BannerVideo.mp4";
import OverLay from "../../assets/Images/Overlay.svg";
import Overlay2 from "../../assets/Images/Overlay2.svg";

const BannerPage = (props) => {
  return (
    <section className="flex flex-col-reverse w-full h-full md:h-[420px] lg:h-[475px] xl:h-[514px] md:flex-row">
      <div className="relative w-full max-w-full md:w-[64.5%] h-[160px] md:h-full bg-cover bg-center bg-no-repeat bg-[url('/src/assets/Images/BgTile.svg')] flex flex-col items-center justify-start md:justify-none sm:px-7 md:pl-20 lg:pl-30 px-5">
        <div className="absolute top-[-56px] xl-top-[-66px] left-[240px]  lg:left-[262px] flex hidden md:block">
          <img className="lg:w-[138px]" src={Overlay2} alt="" />
        </div>
        {props.children}
      </div>
      <div className="relative w-full h-full max-w-full md:w-[35.5%] flex items-center bg-white justify-center md:justify-none">
        <video
          className="max-w-full max-h-full h-auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute right-[0px] top-[0px] w-[360px] sm:w-[390px] md:w-[280px] lg:w-[350px] xl:w-[390px]">
          <img src={OverLay} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BannerPage;

// top-[-20px] md:top-[-28px] right-[-50px] md:right-[-141px] lg:top-[-62px] lg:right-[-89px] xl:right-[-68px]
