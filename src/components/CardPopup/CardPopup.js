import popupStyles from "./CardPopup.module.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import CardPopupOverlay from "../CardPopupOverlay/CardPopupOverlay";
const modalRoot = document.getElementById("react-modals");

export default function CardPopup({ onClose, children }) {
  /* Обработчик закрытия попапа на Esc */
  useEffect(() => {
    function handleEscapeKey(event) {
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
        <div className={popupStyles.modal}>
          <button className={popupStyles.close} onClick={onClose}></button>
          {children}
        </div>
      </div>
    </>,
    modalRoot
  );
}
