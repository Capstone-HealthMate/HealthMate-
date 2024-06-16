import React from "react";

export default function Card({
  asset,
  title,
  placeholder,
  satuan,
  visual = false,
  children,
  valueInput,
  onInputChange
}) {
  return (
    <div className="w-full h-full rounded-2xl flex flex-col gap-y-6 font-semibold text-secondary bg-white border p-4">
      {visual === false ? (
        <>
          <div className="flex flex-col relative mb-">
            <img
              className="absolute right-2 -top-8 w-16 h-16"
              src={asset}
              alt=""
            />
            <h3 className="text-base">{title}</h3>
          </div>

          <h3 className="text-sm font-medium text-[#b9b9b9]">
            Masukin nilai di bawah ini!!!
          </h3>
          <div className="flex">
            <input
              type="number"
              onChange={onInputChange}
              value={valueInput}
              className="h-full text-4xl text-secondary opacity-100 placeholder:text-4xl opacity-60 w-full outline-none font-semibold "
              placeholder={placeholder}
              required
            />
            <span className="text-2xl text-[#00E9D6] font-semibold">
              {satuan}
            </span>
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
