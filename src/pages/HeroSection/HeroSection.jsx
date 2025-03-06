import React from "react";
import BannerPage from "../../components/Banner/Banner";

const HeroSection = () => {
  return (
    <BannerPage>
      <div className="flex md:text-left md:mt-[100px] h-full md:h-auto items-center">
        <p className="xl:text-[58px] lg:text-[48px] md:text-[38px] sm:text-[28px] text-[20px] font-[600] md:font-[700] leading-[24.2px] sm:leading-[40.19px] md:leading-[50.19px] lg:leading-[60.19px] xl:leading-[70.19px] tracking-[-1px] text-center md:text-left">
          Host your meeting with world-class amenities. Starting at{" "}
          <span className="text-[#FFBB00] lg:tracking-[-1px]">₹199/-!</span>
        </p>
      </div>
    </BannerPage>
  );
};

export default HeroSection;
