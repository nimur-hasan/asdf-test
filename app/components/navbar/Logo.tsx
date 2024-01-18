'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className="h-[24px] md:h-[48px] w-[336px] relative">
      <Image
        onClick={() => router.push("/")}
        className=" cursor-pointer"
        src="/images/logo.svg"
        layout="fill"
        objectFit="cover"
        alt="Logo"
      />
    </div>
  );
}
 
export default Logo;
