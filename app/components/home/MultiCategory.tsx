"use client";

import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function MultiCategory() {
  const [activCat, setActiveCat] = useState("Popular");

  const dataMultiCat = [
    {
      title: "Popular",
      subCats: [
        {
          title: "Canmore",
          link: "",
        },
        {
          title: "Benalmádena",
          link: "",
        },
        {
          title: "Marbella",
          link: "",
        },
        {
          title: "Mijas",
          link: "",
        },
        {
          title: "Prescott",
          subCat: "Cabin rentals",
          link: "",
        },
        {
          title: "Scottsdale",
          subCat: "House rentals",
          link: "",
        },
        {
          title: "Tucson",
          link: "",
        },
        {
          title: "Jasper",
          link: "",
        },
        {
          title: "Mountain View",
          link: "",
        },
        {
          title: "Devonport",
          link: "",
        },
        {
          title: "Mallacoota",
          subCat: "Pet-friendly rentals",
          link: "",
        },
        {
          title: "Ibiza",
          subCat: "Apartment rentals",
          link: "",
        },
        {
          title: "Anaheim",
          link: "",
        },
        {
          title: "Benalmádena",
          link: "",
        },
        {
          title: "Monterey",
          link: "",
        },
        {
          title: "Paso Robles",
          link: "",
        },
        {
          title: "Santa Barbara",
          subCat: "Beach house rentals",
          link: "",
        },
        {
          title: "Show more",
          link: "",
          isArrow: true,
        },
      ],
    },
    {
      title: "Arts & culture",
      subCats: [
        {
          title: "",
          link: "",
        },
      ],
    },
    {
      title: "Outdoors",
      subCats: [
        {
          title: "",
          link: "",
        },
      ],
    },
    {
      title: "Mountains",
      subCats: [
        {
          title: "",
          link: "",
        },
      ],
    },
    {
      title: "Beach",
      subCats: [
        {
          title: "",
          link: "",
        },
      ],
    },
    {
      title: "Unique stays",
      subCats: [
        {
          title: "",
          link: "",
        },
      ],
    },
    {
      title: "Categories",
      subCats: [
        {
          title: "",
          link: "",
        },
      ],
    },
    {
      title: "Things to do",
      subCats: [
        {
          title: "",
          link: "",
        },
      ],
    },
    {
      title: "Airbnb-friendly apartments",
      subCats: [
        {
          title: "",
          link: "",
        },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="">
      <p className="text-white font-semibold text-xl">
        Inspiration for future getaways
      </p>
      <div className="mt-10 flex max-w-screen lg:max-w-full overflow-x-scroll">
        {dataMultiCat.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveCat(item.title)}
            className={`pb-4 font-semibold border-b ${
              activCat === item.title && "border-accent"
            } pr-14 text-white whitespace-nowrap cursor-pointer text-left`}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-6 mt-20 gap-5 lg:gap-20">
        {dataMultiCat[0].subCats.map((item, index) => (
          <div
            key={index}
            className="col-span-3 lg:col-span-1 text-lg font-semibold  cursor-pointer text-white whitespace-nowrap"
          >
            <div className="flex items-center gap-2">
              {item.title}
              {item?.isArrow && (
                <div>
                  <BsArrowRight />
                </div>
              )}
            </div>
            <div className="font-normal text-sm">{item?.subCat}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
