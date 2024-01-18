import React from "react";

type IProps = {
  children: React.ReactNode;
};

export default function PrimaryButton({ children }: IProps) {
  return (
    <div className="flex justify-center items-center">
      <button
        className="py-2 lg:py-[15px]  
        px-[3.5rem] lg:px-[5.75rem] rounded-[5px] border border-white bg-primary
       text-white text-lg lg:text-2xl font-semibold"
      >
        {children}
      </button>
    </div>
  );
}
