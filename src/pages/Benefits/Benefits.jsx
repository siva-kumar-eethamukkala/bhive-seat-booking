import React from "react";
import BenefitsCard from "./BenefitsCard";
import { BenefitsList } from "./BenefitsList";
import Arrow from "../../components/Arrow/Arrow";

const Benefits = () => {
  return (
    <section className="px-5 sm:px-18 lg:px-30 md:pt-4">
      <div className="flex justify-between items-center">
        <p className="text-[24px] md:text-[36px] lg:text-[36px] font-[700] leading-[45px] tracking-[0.3px]">
          Why Choose Us?
        </p>
        <Arrow classList="flex lg:hidden w-[24px]" />
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-x-8 lg:grid-cols-4 lg:gap-0 mt-[30px] md:mt-[40px] rounded-[6px] lg:rounded-0">
        {BenefitsList &&
          BenefitsList.map((item, idx) => (
            <BenefitsCard key={idx} id={idx} item={item} />
          ))}
      </div>
    </section>
  );
};

export default Benefits;
