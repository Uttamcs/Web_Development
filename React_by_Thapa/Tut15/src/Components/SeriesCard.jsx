import React from "react";
import styles from "./SeriesCard.module.css";
import styled from "styled-components";

const ApnaBtn = styled.button`
  background-color: ${(props) => (props.super_hit ? "red" : "green")};
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
  `;
  
  const KhudKaRating = styled.span`
  color: black;
  background-color: ${(props) => (props.super_hit ? "red" : "green")};
  border-radius: 5px;
  padding: 5px 10px;
`;

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
          {/* <span
            className={`${styles.btn_atr} ${props.data.rating >= 8.5 ? styles.super_hit : styles.average
              }`}
          >
            Rating:{props.data.rating}
          </span> */}
          <KhudKaRating super_hit={props.data.rating >= 8.5}>
            Rating:{props.data.rating}
          </KhudKaRating>
        </h3>
        <p>{props.data.description}</p>
        <a href={props.data.watch_url}>
          {/* <button className={`${styles.btn_atr} ${props.data.rating >= 8.5 ? styles.super_hit : styles.average}`}>Watch now</button> */}
          <ApnaBtn super_hit={props.data.rating >= 8.5}>Watch now</ApnaBtn>
        </a>
      </div>
    </div>
  );
}

export default SeriesCard;
