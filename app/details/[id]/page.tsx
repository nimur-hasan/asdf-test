import React from "react";
import ShareActive from "../../theme/icons/share-active.svg";
import FavActive from "../../theme/icons/fav-active.svg";
import Image from "next/image";
import Container from "../../components/Container";
import AccentInput from "@/app/components/inputs/AccentInput";
import Hero from "@/app/components/details/Hero";
import CheckMarkIcon from "../../theme/icons/checkmark.svg";
import CheckmarkText from "@/app/components/text/CheckmarkText";
import About from "@/app/components/details/About";

import TestimonialCard from "@/app/components/details/TestimonialCard";
import Testimonial from "@/app/components/details/Testimonial";
import { BiChevronRight } from "react-icons/bi";
import OurReviews from "@/app/components/details/OurReviews";

export default function Page() {
  return (
    <div className="">
      <Hero />
      <About />
      <Testimonial />
      <OurReviews />
    </div>
  );
}
