import React from "react";
import Button from "../../components/Button";
const bannerData = [
  {
    total: 26,
    name: "Atwork",
  },
  {
    total: 18,
    name: "Aucation",
  },
  {
    total: 8,
    name: "Artist",
  },
];
const Banner = () => {
  return (
    <section className="pt-[300px] relative isolate">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#2A3E84] blur-[175px] -z-10"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#2A3E84] blur-[175px]"></div>
      <div className="wrapper mt-[230px] flex items-center gap-x-[165px]">
        <div className="max-w-[740px] w-full ">
          <h1 className="text-[100px] font-bold font-fontJura leading-[118px] z-2 hover:text-[#332FD0]">
            Discover <br />
            Collect and <br />
            Sell NFT.
          </h1>
          <p className="text-3xl leading-[36px] font-normal mt-[50px]">
            Explore on the world’s best largest NFT marketplace
          </p>
          <Button className="bg-primary-gradient h-[60px] min-w-[250px] text-3xl mt-[70px] mb-[50px]">
            Explore
          </Button>
          <ul className="flex items-center mt-[50px] gap-x-[50px] font-fontJura">
            {bannerData.map((item) => (
              <li key={item.name}>
                <div className="text-[50px] font-normal ">{item.total}K+</div>
                <div className="flex text-2xl font-medium text-center">{item.name}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex -ml-[200px]">
          <div className="relative isolate">
            <img srcSet="./Group.png 2x" alt="" className="absolute -top-[200px] right-20" />
            <img src="./lineBanner.svg" alt="" className="absolute -z-10" />
            <img
              srcSet="./banner.png 2x"
              alt="banner"
              className="hover:scale-125 transition duration-150 ease-out "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
