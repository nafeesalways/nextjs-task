 

import Link from "next/link";
import React from "react";
import Login from "./Login";
import { authOptions } from "@/lib/authOptions";
import Logout from "./Logout";
import { getServerSession } from "next-auth";


export default async function Navbar() {
   const session = await getServerSession(authOptions);
  const navItems = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"about"}>About</Link>
      </li>
      <li>
        <Link href={"/products"}>Products</Link>
      </li>
      <li>
        <Link href={"/products/dashboard/add"}>Add Products</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link href="">
          <img
            className="w-5 h-5 lg:w-9 lg:h-9"
            src="https://cdn-icons-png.flaticon.com/128/2331/2331925.png"
            alt=""
          />
        </Link>
        <a className="btn btn-ghost text-xl">UniCare</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
       {session?.user ? <Logout></Logout> :  <Login></Login>}
    
      </div>
    </div>
  );
}
