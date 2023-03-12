import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="py-10 flex  justify-between">
      <div className="logo text-xl ">
        <Link to="/" className="font-semibold hover:text-violet-500">
          Envelop
        </Link>
      </div>
      <nav>
        <div className="flex gap-5">
          <Link to="/login" className=" hover:text-violet-500">
            Login
          </Link>
          <Link to="/register" className=" hover:text-violet-500">
            Register
          </Link>
        </div>
        {/*<div>
          <p>
            Login as : <span>HK</span>
          </p>
  </div>*/}
      </nav>
    </header>
  );
};

export default Navbar;
