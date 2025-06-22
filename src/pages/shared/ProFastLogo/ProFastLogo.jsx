import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";

const ProFastLogo = () => {
  return (
    <Link to="/" className="flex items-end">
      <img src={logo} alt="" />
      <p className="text-3xl -mb-2 -ml-2 font-extrabold">Profast</p>
    </Link>
  );
};

export default ProFastLogo;
