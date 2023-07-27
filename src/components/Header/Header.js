import { NavLink } from "react-router-dom";
import React from "react";
import headerStiles from "./Header.module.css";
export default function Header() {
  return (
    <div>
      <div className={headerStiles.header}>
        <div className={headerStiles.links}>
          <div>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? headerStiles.activeLink : headerStiles.link
              }
            >
              New Arrivals
            </NavLink>
          </div>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? headerStiles.activeLink : headerStiles.link
            }
          >
            Shop
          </NavLink>
          <NavLink className={headerStiles.link}>About Us</NavLink>
        </div>
        <h1 className={headerStiles.title}>Online shop</h1>
        <div className={headerStiles.links}>
          <div className={headerStiles.imgBox}>
            <NavLink className={headerStiles.link}>Search</NavLink>
            <img
              className={headerStiles.img}
              src={require("../../logo/free-icon-search-2414255.png")}
            />
          </div>

          <NavLink className={headerStiles.link}>Sign In</NavLink>
          <div className={headerStiles.imgBox}>
            <NavLink className={headerStiles.link}>0 items</NavLink>
            <img
              className={headerStiles.img_shop}
              src={require("../../logo/free-icon-shopping-bag-4903482.png")}
            />
          </div>
        </div>
      </div>
      <hr className={headerStiles.line}></hr>
    </div>
  );
}
