import React from "react";
import Button from "../../components/Button";

const Story = () => {
  return (
    <section className="flex items-center justify-between mt-[100px] relative isolate">
      <div className="absolute top-0 right-0 w-[410px] h-[610px] rounded-full bg-[#2A3E84] blur-[175px] -z-10"></div>
      <div className="wrapper flex gap-x-[170px]">
        <img
          srcSet="./story.png 2x"
          alt=""
          className="w-[450px] h-[610px] hover:scale-125 transition duration-150 ease-out "
        />
        <div className="w-[713px]">
          <h1 className="text-[50px] font-bold leading-[60px] mb-[30px]">NFT’s Story</h1>
          <p className="font-normal leading-9 text-[30px] mb-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="font-normal leading-9 text-[30px] mb-[50px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <Button className="bg-primary-gradient h-[60px] min-w-[250px] ">Learn More</Button>
        </div>
        <img src="./Star.svg" alt="" className="hover:rotate-45 " />
      </div>
    </section>
  );
};

export default Story;
