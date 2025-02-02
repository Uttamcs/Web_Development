import React from "react";
import styles from "./SeriesCard.module.css";

function SeriesCard(props) {
  return (
    <div className={styles.card_data}>
      <div style={{ padding: "10px" }}>
        <img
          className={styles.card_img}
          src={props.data.img_url}
          alt={props.data.name}
          width="40%"
          height="40%"
        />
      </div>
      <div className={styles.card_content}>
        <h1>{props.data.name}</h1>
        <h3>
          <span
            className={`${styles.btn_atr} ${
              props.data.rating >= 8.5 ? styles.super_hit : styles.average
            }`}
          >
            Rating:{props.data.rating}
          </span>
        </h3>
        <p>{props.data.description}</p>
        <a href={props.data.watch_url}>
          <button
            className={`${styles.btn_atr} ${
              props.data.rating >= 8.5 ? styles.super_hit : styles.average
            }`}
          >
            Watch now
          </button>
        </a>
      </div>
    </div>
  );
}

export default SeriesCard;
