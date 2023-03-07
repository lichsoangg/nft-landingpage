import React from "react";
import Button from "../../components/Button";

const Collections = () => {
  return (
    <section className="wrapper">
      <div className=" flex items-center justify-center gap-x-[35px]">
        <div
          before=""
          className=" w-[146px] h-1 before:content-[attr(before)] relative before:absolute before:inset-0 before:bg-primary-gradient"
        ></div>
        <h1 className="text-center text-[50px] font-bold leading-[60px] ">Top Collections</h1>
        <div
          before=""
          className=" w-[146px] h-1 before:content-[attr(before)] relative before:absolute before:inset-0 before:bg-primary-gradient"
        ></div>
      </div>
      <div className="flex items-center gap-x-[52px] mt-[50px]">
        <Button className="bg-secondaryColor min-w-[150px] h-[60px] rounded-[25px] fui-button-shiny-2">
          24H
        </Button>
        <Button className="fui-button-shiny-2 bg-primaryColor min-w-[150px] h-[60px] rounded-[25px]">
          7D
        </Button>
        <Button className="fui-button-shiny-2 bg-primaryColor min-w-[150px] h-[60px] rounded-[25px]">
          All Time
        </Button>
      </div>
      {/* <table class="w-full mt-[65px]">
        <thead className="text-center">
          <tr className="text-center">
            <th>Collections</th>
            <th>volume</th>
            <th>Floor Price</th>
            <th>Items </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="flex items-center gap-x-3">
              1
              <img srcSet="avt1.png 2x" alt="" />
              Bored Ape Yacht Club
            </td>
            <td>
              <div className="">230.38 ETH</div>
              <div className="">+50.20%</div>
            </td>
            <td>138</td>
            <td>1961</td>
          </tr>
        </tbody>
      </table> */}
    </section>
  );
};

export default Collections;
