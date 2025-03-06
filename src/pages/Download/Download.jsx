import React from "react";
import AppPreview from "../../assets/Images/AppPreview.svg";
import GooglePlay from "../../assets/Images/GooglePlay.svg";
import AppStore from "../../assets/Images/AppStore.svg";
import Arrow from "../../components/Arrow/Arrow";

const Download = () => {
  return (
    <section className="px-5 pb-12 sm:px-18 lg:px-30 md:pt-18 lg:pt-18">
      <div className="flex justify-between items-center">
        <p className="text-[24px] font-[700] leading-[45px] md:text-[36px] lg:text-[36px] lg:leading-[28px] mb-[18px] lg:mb-[42px]">
          Download our app now
        </p>
        <Arrow classList="flex lg:hidden w-[24px]" />
      </div>

      <div className="flex flex-col justify-end h-[392px] lg:hidden bg-white shadow-[0px_0.86px_6.92px_0px_#0000000F] border-[0.5px] border-[#EEE7E7] rounded-[8px]">
        <div className="border-b border-b-[#EEE7E7] w-full">
          <img className="w-full h-[296px]" src={AppPreview} alt="" />
        </div>
        <div className="flex p-4 justify-between md:justify-evenly">
          <div className="flex 1">
            <img className="max-w-[146px] h-[45px]" src={GooglePlay} alt="" />
          </div>
          <div className="flex 1">
            <img className="max-w-[132px] h-[45px]" src={AppStore} alt="" />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:flex items-center md:mt-[90px] lg:mt-[144px] h-[265px] bg-white px-[32px] rounded-[18px] shadow-[0px_1px_8px_0px_#0000000F] border border-[#EEE7E7]">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <p className="text-[18px] xl:text-[20px] font-[500] text-[#605F5F] leading-[28px]">
            Boost your productivity with me BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks
          </p>
          <div className="flex mt-5">
            <div className="flex 1 mr-4">
              <img className="max-w-[146px] h-[45px]" src={GooglePlay} alt="" />
            </div>
            <div className="flex 1">
              <img className="max-w-[132px] h-[45px]" src={AppStore} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute md:left-[8px] lg:left-[18px] md:top-[-77px] lg:top-[-56px]  xl:top-[-126px]">
          <img
            className="w-full md:h-[350px] lg:h-[328px] xl:h-[400px]"
            src={AppPreview}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
