import React from "react";
import Button from "../../components/Button";
import WalletIcon from "../../components/icons/walletIcon";
const MenuData = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Explore",
    link: "#",
  },
  {
    title: "Products",
    link: "#",
  },
  {
    title: "Activity",
    link: "#",
  },
  {
    title: "Elements",
    link: "#",
  },
];
const Header = () => {
  return (
    <header className="h-[100px] fixed top-0 left-0 right-0 bg-bgColor shadow-xl z-10">
      <div className="wrapper flex justify-between h-full items-center">
        <a href="#" title="logo">
          <img srcSet="/logo.png 2x" alt="logo" />
        </a>
        <div className="flex items-center gap-x-[60px]">
          <ul className="flex items-center gap-x-[30px]">
            {MenuData.map((item) => (
              <li key={item.title} className="hover:text-[#e74c3c] ">
                <a className="text-2xl" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Button className="bg-primaryColor text-2xl" style={{height: "50px"}}>
            <>
              <WalletIcon></WalletIcon>
            </>
            Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
