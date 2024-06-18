import React from "react";

export default function MainLogo() {
  return (
    <div className="flex items-center gap-3">
      <img src="/logo.svg" alt="" />
      <span className="text-3xl font-semibold lg:text-[54px] text-black">
        HealthMate
      </span>
    </div>
  );
}
