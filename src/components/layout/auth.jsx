import { Outlet, useLocation } from "react-router-dom";
import MainLogo from "../atom/logo";
import Heading from "../atom/heading";

export default function AuthLayout() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <main className="px-[25px] py-10 lg:py-0 flex flex-col gap-14 lg:flex-row-reverse lg:px-0 lg:justify-between">
      <div className="relative lg:w-[616px]">
        <img
          src="/login.png"
          alt=""
          className="absolute top-0 left-0 z-0 hidden w-full h-full lg:block"
        />
        <div className="relative z-10 flex flex-col gap-6 lg:mt-20 lg:px-10">
          <MainLogo />
          <Heading>
            {path === "/login"
              ? "Welcome back again"
              : "You do the right things..."}
          </Heading>
        </div>
      </div>
      <Outlet />
    </main>
  );
}
