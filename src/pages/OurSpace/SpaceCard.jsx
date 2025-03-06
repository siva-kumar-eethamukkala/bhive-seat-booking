import React from "react";
import DirectionIcon from "../../assets/Images/Direction.svg";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";

const SpaceCard = ({ data }) => {
  const { name, images, day_pass_price } = data;

  return (
    <div className="min-h-[341px] h-auto md:min-h-[384px] max-w-[370px] justify-between flex flex-col shadow-[0px_1.08px_8.63px_0px_#0000000F] bg-white px-3 py-4 rounded-[8px] border-[1.08px] border-[#EEE7E7] border-opactiy-80">
      <div className="flex flex-row justify-between">
        <div className="flex items-center">
          <p className="font-[600] text-[18px] md:text-[18px] lg:text-[18px] leading-[21.78px] md:leading-[24.2px] lg:leading-[24.2px]">
            {name}
          </p>
        </div>
        <div className="w-[44px] md:w-[52px] lg:w-[52px] h-[44px] md:h-[52px] lg:h-[52px] border-[0.4px] md:border-[0.47px] lg:border-[0.47px] border-[#EEE7E7] bg-[#F9F9F9] flex flex-col items-center justify-center rounded-[5.6px] md:rounded-[6.47px] lg:rounded-[6.47px]">
          <img
            className="w-[14.67px] md:w-[18px] lg:w-[18px] h-[14.67px] md:h-[18px] lg:h-[18px]"
            src={DirectionIcon}
            alt=""
          />
          <p className="text-[7.46px] lg:text-[8px] md:text-[8px] text-center font-[500] leading-[9.03px] md:leading-[9.68px] lg:leading-[9.68px] mt-2 opacity-50 lg:opacity-80">
            6 kms
          </p>
        </div>
      </div>
      <Image images={images} />
      <div className="flex gap-x-2">
        <Button
          classList="bg-[#F9F9F9] border border-[#E5DDDD]"
          heading="Day Pass"
          price={day_pass_price}
          content="/ Day"
        />
        <Button
          classList="bg-[#FFCF4B] border border-[#FFC422]"
          heading="Bulk Pass"
          price="4400"
          content="/ 10 Days"
          showDiscountBadge={true}
        />
      </div>
    </div>
  );
};

export default SpaceCard;
