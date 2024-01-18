import React from "react";

type IProps = {
  children: React.ReactNode;
};

export default function OutlinedButton({ children }: IProps) {
    return (
      <div className="flex justify-center items-center">
        <button className="py-[15px] px-[3.75rem] rounded-[5px] border border-white text-white text-lg font-semibold">
          {children}
        </button>
      </div>
    );
}
