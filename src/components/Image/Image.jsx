import React from "react";

const BASE_URL = "/";
const Image = ({ images = [] }) => {
  // Loading static images incase of failure
  const imgUrl = `${BASE_URL}${
    images[0] ? images[0] : "static_assets/5934c0fd9d574bddbde8175d86a2d2da.jpg"
  }`;

  return (
    <div className="flex py-4">
      <img
        className="w-full max-w-[346px] h-[175px] md:h-[202px] rounded-[6px]"
        src={imgUrl}
        alt=""
      />
    </div>
  );
};

export default Image;
