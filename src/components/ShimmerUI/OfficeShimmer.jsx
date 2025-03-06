import React from "react";

const ShimmerCard = () => {
  return (
    <div className="h-[341px] max-w-[370px] justify-between flex flex-col shadow-[0px_1.08px_8.63px_0px_#0000000F] bg-white px-3 py-4 rounded-[8px] border-[1.08px] border-[#EEE7E7] border-opactiy-80 animate-pulse">
      <div className="flex flex-row h-[43px] justify-between">
        <div className="bg-gray-200 w-[70%] rounded "></div>
        <div className="bg-gray-200 w-[20%] rounded"></div>
      </div>
      <div className="h-[175px] bg-gray-300 rounded"></div>
      <div className="flex h-[58px] justify-between">
        <div className="bg-gray-200 flex-1 mr-2 rounded"></div>
        <div className="bg-gray-200 flex-1 rounded"></div>
      </div>
    </div>
  );
};

const OfficeShimmer = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-[30px] md:mt-10 gap-y-4 lg:gap-[45px]">
      {Array(6)
        .fill(0)
        .map((item, idx) => {
          return <ShimmerCard key={idx} />;
        })}
    </div>
  );
};

export default OfficeShimmer;
