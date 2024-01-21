import React from 'react'

export default function AccentInput() {
  return (
    <div className="col-span-1 flex flex-col gap-3">
      <label htmlFor="checkIn" className="text-[1.25rem] font-semibold">
        Check In
      </label>
      <input
        type="text"
        name="checkIn"
        id="checkIn"
        className="rounded-[5px] p-[0.875rem] bg-transparent border border-accent placeholder:text-white"
        placeholder="12/11/2023"
      />
    </div>
  );
}
