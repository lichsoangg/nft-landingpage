import React from "react";
import Card from "../../components/Card/Card";
import CardList from "../../components/Card/CardList";
import Button from "../../components/Button";

const Creater = () => {
  return (
    <section className="mt-[150px]">
      <div className="wrapper">
        <h1 className="text-[50px] leading-9 text-center font-medium">Our Creater</h1>
        <p className="font-normal text-base leading-6 text-center mt-5 mb-[50px]">
          The largest and unique Super rare NFT marketplace <br />
          For crypto-collectibles
        </p>
        <div className="mb-[100px] grid grid-cols-3 gap-[60px] mx-20">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <button className="flex items-center justify-center mx-auto text-base leading-6 font-medium p-4 rounded-[30px] border-solid border-2  bg-transparent text-thirdColor border-[#15BFFD]">
          Explore more
        </button>
      </div>
    </section>
  );
};

export default Creater;
