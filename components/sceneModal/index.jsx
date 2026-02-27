import * as React from "react";
import styles from "./style.module.scss";

export default function SceneModal() {
  return (
    <>
      <div className={styles.camera_wrapper}>
        <div className={`${styles.camera_modal} button`}>
          <a href="https://livingcontinuity.publicdisplay.site/" className={styles.link}>
            <div className={styles.item}>Digital Exhibition</div>
          </a>
          <a href="https://glossary.publicdisplay.site/" className={styles.link}>
            <div className={styles.item}>Glossary</div>
          </a>
          <a href="https://kitofparts.publicdisplay.site/" className={styles.link}>
            <div className={styles.item}>Kit of Parts - Blended Home</div>
          </a>

          <a href="#" className={styles.link}>
            <div className={styles.item}>Kit of Parts - Blended Park (soon)</div>
          </a>

          <a href="https://supplement.publicdisplay.site/" className={styles.link}>
            <div className={styles.item}>Supplement</div>
          </a>

          <a href="http://toolkit.publicdisplay.site/" className={styles.link}>
            <div className={styles.item}>Toolkit</div>
          </a>
          
        </div>
      </div>
    </>
  );
}
