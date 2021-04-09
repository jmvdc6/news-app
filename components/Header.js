import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <section className={styles.header_top}>
          <div className='header-top-left'>
            <button className={styles.sections_button}>
              <svg viewBox='0 0 16 16'>
                <rect x='1' y='3' fill='#333' width='14' height='2'></rect>
                <rect x='1' y='7' fill='#333' width='14' height='2'></rect>
                <rect x='1' y='11' fill='#333' width='14' height='2'></rect>
              </svg>
            </button>
          </div>
          <div className={styles.header_top_center}>
            <ul className={styles.edition_menu}>
              <li className={styles.edition_item}>
                <a href='' className={styles.edition_link}>
                  u.s.
                </a>
              </li>
              <li className={styles.edition_item}>
                <a href='' className={styles.edition_link}>
                  International
                </a>
              </li>
              <li className={styles.edition_item}>
                <a href='' className={styles.edition_link}>
                  canada
                </a>
              </li>
              <li className={styles.edition_item}>
                <a href='' className={styles.edition_link}>
                  u.a.e
                </a>
              </li>
              <li className={styles.edition_item}>
                <a href='' className={styles.edition_link}>
                  philippines
                </a>
              </li>
            </ul>
          </div>
          <div className='header-top-right'>
            <span></span>
          </div>
        </section>
        <section className={styles.header_center}>
          <div className='header-center-left'>
            <div className={styles.header_date}>
              <span>Friday, April, 2021</span>
            </div>
            <div className={styles.today_paper}>
              <span>Today's Paper</span>
            </div>
          </div>
          <div className={styles.header_center_title}>
            The Independent Newspaper
          </div>
          <div className={styles.header_center_right}>
            <span>37°C</span> 37° 23°
          </div>
        </section>
        <section className={styles.header_bottom}>
          <ul className={styles.mini_nav}>
            <li className={styles.mini_nav_item}>
              <a href='#' className={styles.mini_nav_link}>
                U.S
              </a>
            </li>
            <li className={styles.mini_nav_item}>
              <a href='#' className={styles.mini_nav_link}>
                Politics
              </a>
            </li>
            <li className={styles.mini_nav_item}>
              <a href='#' className={styles.mini_nav_link}>
                business
              </a>
            </li>
            <li className={styles.mini_nav_item}>
              <a href='#' className={styles.mini_nav_link}>
                entertainment
              </a>
            </li>
            <li className={styles.mini_nav_item}>
              <a href='#' className={styles.mini_nav_link}>
                general
              </a>
            </li>
            <li className={styles.mini_nav_item}>
              <a href='#' className={styles.mini_nav_link}>
                health
              </a>
            </li>
            <li className={styles.mini_nav_item}>
              <a href='#' className={styles.mini_nav_link}>
                science
              </a>
            </li>
            <li className={styles.mini_nav_item}>
              <a href='#' className={styles.mini_nav_link}>
                sports
              </a>
            </li>
            <li className={styles.mini_nav_item}>
              <a href='#' className={styles.mini_nav_link}>
                technology
              </a>
            </li>
            <li className={styles.mini_nav_item}>
              <a href='#' className={styles.mini_nav_link}>
                Art
              </a>
            </li>
            <li className={styles.mini_nav_item}>
              <a href='#' className={styles.mini_nav_link}>
                Food
              </a>
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
}
