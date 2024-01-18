import React from "react";
import Image from "next/image";
import BookingImage from "../../theme/icons/bookingIcon.svg";
import PeopleImage from "../../theme/icons/people.svg";
import Container from "../Container";

export default function Hero() {
  return (
    <div
      className="
        bg-white
        bg-cover
        bg-no-repeat
        pt-[8.125rem]
        h-[35.56rem]
        "
      style={{ backgroundImage: `url(/images/hero-bg.png)` }}
    >
      <h1
        className="
          text-[56px]
          font-extrabold
          text-white
          text-center
          "
      >
        Book Your Room Any Place from Any Where
      </h1>
      <p
        className="
          text-white
          text-xl
          text-center
          "
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form,
      </p>
      <Container>
        <div
          className="
            bg-secondary
            py-[5.625rem]
            px-40
            rounded-[10px]
            mt-[5.25rem]
            relative
            m-shadow
            "
        >
          <div
            className="
              flex justify-center
              absolute
              left-0
              right-0
              -top-10
              "
          >
            <div
              className="
                flex
                py-7 
                text-white
                bg-primary
                rounded-[5px]
                text-lg
                "
            >
              <div className="px-[2.875rem]">Anywhere</div>
              <div className="px-[2.875rem] border-x border-[#A9A9A9]">
                Any week
              </div>
              <div className="px-[2.875rem]">Add guests</div>
            </div>
          </div>

          <div className="">
            <input
              className="p-5 bg-transparent border rounded-[5px] w-full text-white"
              type="text"
              placeholder="Enter Your Destination"
            />
            <div className="grid grid-cols-2 mt-5 gap-5">
              <div className=" divide-x-2 py-3 bg-transparent border rounded-[5px] grid grid-cols-2">
                <div className="flex items-center gap-2 text-white px-5 cursor-pointer">
                  <Image src={BookingImage} height={24} width={24} alt="img" />
                  <div className="">
                    <div className="leading-[111%]">Dec 17, 2023</div>
                    <div className="leading-[111%]">Sun day</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white px-5 cursor-pointer">
                  <Image src={BookingImage} height={24} width={24} alt="img" />
                  <div className="">
                    <div className="leading-[111%]">Dec 17, 2023</div>
                    <div className="leading-[111%]">Sun day</div>
                  </div>
                </div>
              </div>
              <div className=" divide-x-2 py-3 bg-transparent border rounded-[5px] grid grid-cols-2">
                <div className="flex items-center gap-2 text-white px-5 cursor-pointer">
                  <Image src={PeopleImage} height={24} width={24} alt="img" />
                  <div className="leading-[111%]">2 Adults</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center absolute left-0 right-0 -bottom-8">
            <button className="bg-primary border-[2px] border-white py-[0.937rem] px-[5.625rem] text-white rounded-[5px] shadow-sm text-2xl">
              Search
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
