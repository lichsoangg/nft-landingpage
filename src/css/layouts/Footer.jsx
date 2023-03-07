import React from "react";

const Footer = () => {
  return (
    <section className="w-[1728px] max-h-[952px] bg-footer-bg">
      <h1 className="text-[100px] text-center translate-y-[140px]">NFT Marketplace </h1>
      <div className="mt-[150px] mb-[125px] flex justify-around">
        <a href="#" title="logo" className="mt-[104px]">
          <img srcSet="/logo_footer.png 2x" alt="logo" className="" />
        </a>
        <ul className="mt-[130px]">
          <li className="mb-[50px]">
            <a href="#">Marketplace</a>
          </li>
          <li className="mb-[27px]">
            <a href="#">Explore</a>
          </li>
          <li className="mb-[27px]">
            <a href="#">NFTs</a>
          </li>
          <li className="mb-[27px]">
            <a href="#">Collectibles</a>
          </li>
          <li>
            <a href="#"></a>Virtuallyreally
          </li>
        </ul>
        <ul className="mt-[130px]">
          <li className="mb-[50px]">
            <a href="#">Company</a>
          </li>
          <li className="mb-[27px]">
            <a href="#">About Us</a>
          </li>
          <li className="mb-[27px]">
            <a href="#">Support</a>
          </li>
          <li className="mb-[27px]">
            <a href="#">Careers</a>
          </li>
          <li className="mb-[27px]">
            <a href="#"></a>Contact us
          </li>
        </ul>
        <ul className="mt-[130px]">
          <li className="mb-[50px]">
            <a href="#">Resourses</a>
          </li>
          <li className="mb-[27px]">
            <a href="#">Partners</a>
          </li>
          <li className="mb-[27px]">
            <a href="#">Blogs</a>
          </li>
          <li className="mb-[27px]">
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#"></a>Live Action
          </li>
        </ul>
      </div>
      <div className="ml-[1225px] ">
        <h3 className="mb-7 text-[30px] font-bold leading-9 ">Follow Us</h3>
        <div className="flex gap-5">
          <div className="h-[50px] w-[50px] rounded-[50%] bg-primary-gradient shadow-sm hover:scale-125 transition duration-150 ease-out"></div>
          <div className="h-[50px] w-[50px] rounded-[50%] bg-[#261437] shadow-sm hover:scale-125 transition duration-150 ease-out"></div>
          <div className="h-[50px] w-[50px] rounded-[50%] bg-[#261437] shadow-sm hover:scale-125 transition duration-150 ease-out"></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
