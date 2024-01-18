import React from "react";

export default function InputField(props:any) {
  return (
    <input
      className="p-5 bg-transparent border rounded-[5px] w-full"
      type="text"
      placeholder="Enter Your Destination"
      {...props}
    />
  );
}
