"use client";

import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import AmazingView from "../../theme/icons/amazing-view.svg";
import NationalPark from "../../theme/icons/national-parks.svg";
import Beach from "../../theme/icons/beach.svg";
import Lake from "../../theme/icons/lake.svg";
import Caves from "../../theme/icons/caves.svg";
import Islands from "../../theme/icons/islands.svg";
import Campers from "../../theme/icons/campers.svg";
import Castles from "../../theme/icons/castles.svg";
import EarthHomes from "../../theme/icons/earth-homes.svg";
import AmazingViewActive from "../../theme/icons/amazing-view-active.svg";
import NationalParkActive from "../../theme/icons/national-parks-active.svg";
import BeachActive from "../../theme/icons/beach-active.svg";
import LakeActive from "../../theme/icons/lake-active.svg";
import CavesActive from "../../theme/icons/caves-active.svg";
import IslandsActive from "../../theme/icons/islands-active.svg";
import CampersActive from "../../theme/icons/campers-active.svg";
import CastlesActive from "../../theme/icons/castles-active.svg";
import EarthHomesActive from "../../theme/icons/earth-homes-active.svg";

import Slider from "react-slick";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function CategoryList() {
  const [activeCat, setActiveCat] = useState("Amazing views");

    const CustomPrevArrow = (props:any) => (
      <div
        className="custom-next-arrow bg-gray-300 cursor-pointer -left-[10px] lg:-left-[40px] h-[24px] w-[24px] rounded-full flex justify-center items-center"
        onClick={props.onClick}
        style={{ position: "absolute",  top: "31%", zIndex: 1 }}
      >
        {/* Your custom arrow content for previous */}
        <BiLeftArrow />
      </div>
    );

const CustomNextArrow = (props:any) => (
  <div
    className="custom-next-arrow bg-gray-300 cursor-pointer -right-[10px] lg:-right-[40px] h-[24px] w-[24px] rounded-full flex justify-center items-center"
    onClick={props.onClick}
    style={{ position: 'absolute', top: '31%', zIndex: 1 }}
  >
    {/* Your custom arrow content for next */}
    <BiRightArrow/>
  </div>
);
    
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const categoryList = [
    { name: "Amazing views", icon: AmazingView, active: AmazingViewActive },
    { name: "National parks", icon: NationalPark, active: NationalParkActive },
    { name: "Beach", icon: Beach, active: BeachActive },
    { name: "Lake", icon: Lake, active: LakeActive },
    { name: "Caves", icon: Caves, active: CavesActive },
    { name: "Islands", icon: Islands, active: IslandsActive },
    { name: "Campers", icon: Campers, active: CampersActive },
    { name: "Castles", icon: Castles, active: CastlesActive },
    { name: "Earth homes", icon: EarthHomes, active: EarthHomesActive },
  ];
  return (
    <div className=" w-full">
      <Slider {...settings}>
        {categoryList.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveCat(item.name)}
            className="px-2"
          >
            <CategoryCard key={index} category={item} activeCat={activeCat} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
