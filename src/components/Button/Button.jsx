import React from "react";
import ArrowIcon from "../../assets/Images/Arrow.svg";

const Button = ({
  price,
  heading,
  content,
  classList = "",
  showDiscountBadge,
}) => {
  return (
    <div
      className={`relative min-h-[58px] h-auto flex flex-1 flex-row justify-between items-center  rounded-[5px] p-2 ${classList}`}
    >
      <div className="flex flex-col items-left">
        <p className="text-[12px] lg:text-[14px] font-[500] leading-[14.52px] text-[#65624C] ">
          {heading}
        </p>
        <p className="text-[18px] lg:text-[20px] font-[600] leading-[21.78px] lg:leading-[24.2px] ">
          ₹ {price}
          <span className="text-[11px] lg:text-[12px] font-[500] leading-[13.31px] leading-[14.52px]">
            {content}
          </span>
        </p>
      </div>
      <div>
        <img className="w-[20px] h-[12px]" src={ArrowIcon} alt="" />
      </div>
      {showDiscountBadge && (
        <div className="absolute flex justify-center items-center bg-[#263238] h-[16px] lg:h-[18px] w-[62px] lg:w-[69px] border-[0.5px] border-[#263238] text-[8px] text-[#FFFDF7] font-[500px] rounded-[3px] top-[-11px] right-[48px]">
          20% Discount
        </div>
      )}
    </div>
  );
};

export default Button;
