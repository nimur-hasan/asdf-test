import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, { IListingsParams } from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Input from "./components/inputs/Input";
import InputField from "./components/inputs/InputField";
import Hero from "./components/home/Hero";
import Categories from "./components/navbar/Categories";
import Image from "next/image";
import FilterIcon from "../app/theme/icons/filter.svg";
import ItemCard from "./components/home/ItemCard";
import CategoryCard from "./components/home/CategoryCard";
import CategoryList from "./components/home/CategoryList";
import OutlinedButton from "./theme/buttons/OutlinedButton";
import MultiCategory from "./components/home/MultiCategory";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  // if (listings.length === 0) {
  //   return (
  //     <ClientOnly>
  //       <EmptyState showReset />
  //     </ClientOnly>
  //   );
  // }

  return (
    <ClientOnly>
      <Hero />
      <div className="mt-10 md:mt-[14rem]" />
      <Container>
        <div className="flex gap-2 lg:gap-5">
          <button className="border px-[0.875rem] rounded-[3px] py-1 lg:py-3">
            <div className="flex items-center gap-2 text-white">
              <Image src={FilterIcon} height={24} width={24} alt="" />
              <div className="">Filters</div>
            </div>
          </button>
          <button className="border px-[0.875rem] rounded-[3px] py-1 lg:py-3">
            <div className="flex items-center gap-2 text-white">
              <div className="">Display total before taxes</div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div
                  className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full
                  rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['']
                  after:absolute after:top-0.5 after:start-[2px] after:bg-primary
                   after:rounded-full after:h-5 after:w-5 after:transition-all
                  peer-checked:bg-accent"
                ></div>
              </label>
            </div>
          </button>
        </div>
      </Container>

      <Container>
        <div className="py-10">
          <CategoryList />
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => (
            <div key={index} className="col-span-4 md:col-span-1">
              <ItemCard />
            </div>
          ))}
        </div>
        <div className="py-[4.375rem]">
          <OutlinedButton>Show More</OutlinedButton>
        </div>
      </Container>
      <div className="py-20 bg-secondary">
        <Container>
          <MultiCategory />
        </Container>
      </div>
    </ClientOnly>
  );
};

export default Home;
