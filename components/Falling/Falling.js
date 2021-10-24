import React, { memo } from "react";
import styles from "./Falling.module.css";

export function Falling({ children, delay = 0 }) {
  return (
    <div
      className={styles.root}
      style={{
        left: Math.random() * 100 + "vw",
        fontSize: Math.random() * 24 + "px",
        animationDelay: delay + "ms",
      }}
    >
      {children}
    </div>
  );
}

export default memo(Falling);
