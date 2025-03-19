import { Outlet, useLocation } from "react-router-dom";



export default function AuthLayout() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <main className="px-[25px] py-10 lg:py-0 flex flex-col gap-14 lg:flex-row-reverse lg:px-0 lg:justify-between">
      <div className="relative lg:w-[616px]">
        <img
          src="/login.svg"
          alt=""
          className="absolute top-0 left-0 z-0 hidden w-full h-full object-cover lg:block"
        />
        <div className="relative z-10 flex flex-col gap-6 lg:mt-72 lg:px-10 text-white">
          <h1 className="text-7xl md:text-7xl font-medium">
            {path === "/login"
              ? "Hello There, Welcome"
              : "You do the right things..."}
          </h1>
          <p className="text-3xl">We are very happy to welcome you</p>
        </div>
      </div>
      <Outlet />
    </main>
  );
}
