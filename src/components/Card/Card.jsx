import React from "react";

const Card = () => {
  return (
    <div className="max-w-[384px] m-h-24 flex items-center justify-between">
      <img className="relative" srcSet="./cardboder.png 2x" alt="" />
      <div className="absolute flex items-center ml-6">
        <img
          className=" w-6 h-6 rounded-[50%] border-solid border-2 border-thirdColor mr-5"
          srcSet="./avt1.png 2x"
          alt=""
        />
        <div className="mr-[75px] text-base font-medium leading-6">
          <div className="">Emerson Philips</div>
          <div className="">3.2 ETH</div>
        </div>
        <a className="text-xl font-medium leading-[30px] text-thirdColor underline-offset-8">
          Follow
        </a>
      </div>
    </div>
  );
};

export default Card;
