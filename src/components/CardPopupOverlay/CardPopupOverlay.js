import CardPopupOverlayStyles from "./CardPopupOverlay.module.css";
export default function CardPopupOverlay(props) {
  return (
    <div
      onClick={props.onClose}
      className={CardPopupOverlayStyles.ModalOverlay}
    >
      {props.children}
    </div>
  );
}
