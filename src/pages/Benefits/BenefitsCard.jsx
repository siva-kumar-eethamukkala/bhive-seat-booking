import React from "react";

const BenefitsCard = ({ id, item }) => {
  return (
    <div
      className={`group  flex flex-col py-4 flex-1 bg-white justify-center items-center shadow-[0px_2px_4px_0px_#0000000F] lg:h-[80px] lg:px-6 lg:flex-row lg:border-gray-300 ${
        id !== 3 && id !== 7 ? "lg:border-r" : ""
      } ${id < 4 ? "lg:border-b" : ""} lg:shadow-none
      lg:bg-transparent lg:hover:bg-white lg:hover:shadow-[0px_2px_4px_0px_#0000000F] lg:hover:rounded-md`}
    >
      <div className="lg:h-full flex mb-3 lg:mr-3 lg:mb-0 items-center">
        <img
          className="w-28px h-28px lg:w-[31px] lg:h-[32px]"
          src={item.icon}
          alt=""
        />
      </div>
      <div className="h-full lg:flex flex-row lg:flex-col justify-center transition-all duration-300 ease-in-out">
        <p className="font-[500] text-[14px] text-center md:text-[18px] lg:text-[18px] lg:text-left transition-all duration-300 ease-in-out group-hover:font-[600]">
          {item.content}
        </p>
        <p
          className="opacity-0 max-h-0 text-[12px] overflow-hidden transition-all duration-500 ease-in-out
        group-hover:opacity-100 group-hover:max-h-[50px] group-hover:mt-1"
        >
          One liner details about the feature
        </p>
      </div>
    </div>
  );
};

export default BenefitsCard;
