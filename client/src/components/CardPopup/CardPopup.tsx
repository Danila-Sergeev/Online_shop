/* import popupStyles from "./CardPopup.module.css";
import React, { FC, useEffect } from "react";
import ReactDOM from "react-dom";
import CardPopupOverlay from "../CardPopupOverlay/CardPopupOverlay";
const modalRoot = document.getElementById("react-modals");

const CardPopup: FC = ({ onClose, children }) => {
  /* Обработчик закрытия попапа на Esc */
/*   useEffect(() => {
    function handleEscapeKey(event: any) {
      if (event.code === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return ReactDOM.createPortal(
    <>
      <CardPopupOverlay onClose={onClose} />
      <div className={popupStyles.box}>
        <div className={popupStyles.modal}>{children}</div>
      </div>
    </>,
    modalRoot
  );
};
export default CardPopup;
 */
