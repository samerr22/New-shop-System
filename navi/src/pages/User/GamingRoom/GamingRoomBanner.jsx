import React from "react";
import Button from "../../../components/Button/Button";

const GamingRoomBanner = () => {
  return (
    <div className="fl-container">
      <div
        className="grid grid-cols-3 min-h-[364px] py-6 px-16 bg-blue-500 font-[sans-serif]  rounded-lg "
        style={{
          backgroundImage: "url('/images/tom-clancy-ghost-recon.jpeg')",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          boxShadow: 'rgb(120 29 255 / 38%) 1px 0px 35px, rgb(143 0 255 / 8%) 0px 0px 30px inset'
        }}
      >
        <div className="col-span-2 max-w-lg content-center">
          <h1 className="text-5xl leading-snug font-bold text-white">
            Tom Clancy's Ghost Recon Breakpoint
          </h1>
          <p className="text-md text-gray-200 mt-4">
          Tom Clancy's Ghost Recon Breakpoint is an online tactical shooter video game developed by Ubisoft Paris and published by Ubisoft. 
          </p>

            <Button
            className="mt-7"
              bgColor="linear-gradient(105deg, rgb(120 29 255) 0%, rgb(179 29 255 / 58%) 100%) 0% 0% no-repeat padding-box padding-box transparent"
              hoverColor="linear-gradient(-105deg, rgb(120 29 255) 0%, rgb(179 29 255 / 58%) 100%) 0% 0% no-repeat padding-box padding-box transparent"
            >
              View details
            </Button>

        </div>
      </div>
    </div>
  );
};

export default GamingRoomBanner;
