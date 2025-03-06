import React from "react";
import ArrowIcon from "../../assets/Images/SingleArrow.svg";

const Arrow = ({ classList }) => {
  return (
    <>
      <img className={classList} src={ArrowIcon} alt="" />
    </>
  );
};

export default Arrow;
