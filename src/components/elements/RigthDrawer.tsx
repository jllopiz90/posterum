import React, { useEffect } from "react";
import { Link } from "gatsby";

import { useIntersectionObserver } from "../../functions/scroll-animations/watchElementsIntoView";
import { DoorIcon, CloseIcon } from "../icons";
import * as styles from "./right-drawer.module.css";

interface MenuMobileProps {
  open: boolean;
  nightMode: boolean;
  close: () => void;
}

const MenuMobile = ({ open, nightMode, close }: MenuMobileProps) => {
  const { init } = useIntersectionObserver();

  useEffect(() => {
    init();
  }, []);

  return (
    <div
      className={styles.drawer}
      data-scroll={`slide-larger-${open ? 'left' : 'right'}`}
      data-scroll-duration="1000"
      dat-scroll-delay="400"
      data-scroll-easing="ease"
      style={{ display: open ? 'block' : 'none' }}
    >
      <div className={styles.closeBtnContainer}>
        <button
            onClick={close}
            className={styles.closeBtn}
        >
            <CloseIcon />
        </button> 
      </div>  
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to="/">
            <DoorIcon
              color={nightMode ? "#61dafb" : "#2763a8"}
              className={styles.shadow}
            />
            <span>Home</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} grow`}>
          <Link to="/html/">
            <DoorIcon
              color={nightMode ? "#61dafb" : "#2763a8"}
              className={styles.shadow}
            />
            <span>HTML awesome tags</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
