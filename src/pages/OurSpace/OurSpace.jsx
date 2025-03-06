import React, { useEffect } from "react";
import SpaceCard from "./SpaceCard";
import useOfficeDetails from "../../store/useOfficeDetails";
import Arrow from "../../components/Arrow/Arrow";
import OfficeShimmer from "../../components/ShimmerUI/OfficeShimmer";

const OurSpace = () => {
  // Using Zustand for State and API handling
  const { isLoading, officeDetails, getOfficeDetails } = useOfficeDetails(
    (state) => state
  );

  useEffect(() => {
    getOfficeDetails();
  }, []);

  return (
    <section className="px-5 pb-12 pt-[50px] sm:px-18 lg:px-30 md:pt-18">
      <div className="flex justify-between items-center">
        <p className="text-[24px] font-[700] md:hidden lg:hidden">Our Spaces</p>
        <p className="text-[36px] font-[700] hidden md:block lg:block">
          Our Space Overview
        </p>
        <Arrow classList="flex lg:hidden w-[24px]" />
      </div>
      {isLoading ? (
        <OfficeShimmer />
      ) : (
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-[30px] md:mt-10 gap-y-4 lg:gap-[45px]">
          {officeDetails &&
            officeDetails.length > 0 &&
            officeDetails.map((item) => {
              return <SpaceCard key={item.id} data={item} />;
            })}
        </div>
      )}
    </section>
  );
};

export default OurSpace;
