import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import ProFastLogo from "../pages/shared/ProFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16 xl:px-24 ">
      <div className="p-12 bg-base-200">
        <ProFastLogo />
        <div className="hero-content flex-col lg:flex-row-reverse mt-4 items-center ">
          <div className="flex-1">
            <img src={authImg} className="max-w-sm" />
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
