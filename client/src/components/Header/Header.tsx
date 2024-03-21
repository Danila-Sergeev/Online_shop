import { NavLink } from "react-router-dom";
import React, { useState, FC } from "react";
import headerStiles from "./Header.module.css";
/* import CardPopup from "../CardPopup/CardPopup"; */
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../utils/hoc";
import { SIGNOUT } from "../../services/actions/user";
const Header: FC = () => {
  /* Обработчик состояния попапа */
  const [modal, setModal] = useState(false);
  const Carditems = useSelector((store: any) => store.cardItem.items);
  /*  Обработчики открытия/закрытия попапа */
  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  const user = useSelector((store: any) => store.user);
  console.log(user);
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(SIGNOUT);
  };

  return (
    <div>
      <div className={headerStiles.header}>
        <div className={headerStiles.links}>
          <div>
            <NavLink
              to="/"
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
          <NavLink to="/" className={headerStiles.link}>
            About Us
          </NavLink>
        </div>
        <NavLink to="/" className={headerStiles.title}>
          Online shop
        </NavLink>
        <div className={headerStiles.links}>
          <div className={headerStiles.imgBox}>
            <NavLink to="/" className={headerStiles.link}>
              Search
            </NavLink>
            <img
              alt={""}
              className={headerStiles.img}
              src={require("../../logo/free-icon-search-2414255.png")}
            />
          </div>

          {user.isAuth ? (
            <div className={headerStiles.link}>{user.name}</div>
          ) : (
            <NavLink to="/signIn" className={headerStiles.link}>
              Sign In
            </NavLink>
          )}

          <div className={headerStiles.imgBox}>
            <div onClick={handleOpenModal} className={headerStiles.link}>
              {Carditems.length} items
            </div>
            <img
              alt={""}
              className={headerStiles.img_shop}
              src={require("../../logo/free-icon-shopping-bag-4903482.png")}
            />
          </div>
          {user.isAuth ? (
            <button onClick={() => logOut} className={headerStiles.link}>
              Выйти
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <hr className={headerStiles.line}></hr>
      {/* {modal && (
        <CardPopup onClose={handleCloseModal} setModal={setModal}>
          {" "}
          <CardElement onClose={handleCloseModal} />
        </CardPopup>
      )} */}
    </div>
  );
};
export default Header;
