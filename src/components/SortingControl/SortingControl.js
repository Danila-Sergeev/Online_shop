import React from "react";
import sorting from "../../logo/sorting.svg";
import styles from "./SortingControl.module.css";
import { ASC } from "../../components/Shop/Shop";

export const SortingControl = ({ label, onSort, value }) => {
  return (
    <div className={styles.container} onClick={onSort}>
      <div className={styles.selected_wrapper}>
        <p className={styles.selected}>
          <span>{label}</span>
        </p>
        <img
          src={sorting}
          alt={`sorting-direction: ${value}`}
          style={{
            transform: value.toLowerCase() === ASC ? "rotate(180deg)" : "",
          }}
        />
      </div>
    </div>
  );
};
