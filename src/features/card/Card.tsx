import styles from "./Card.module.css";

import { FC } from "react";
import { Robot } from "../../model/robot.model";

interface CardProps {
  robot: Robot;
}

export const Card: FC<CardProps> = ({ robot }) => {
  return (
    <div className={styles.container}>
      <img
        src={robot.thumb}
        className={styles.image}
        alt={`${robot.name}-pic`}
      />
      <div className={styles.info}>
        <div className={styles.properties}>
          <span className={styles.property}>Name:</span>
          <span className={styles.property__name}> {robot.name}</span>
        </div>
        <div className={styles.properties}>
          <span className={styles.property}>Speed:</span>
          <span className={styles.property__name}> {`${robot.speed}kmh`}</span>
        </div>
        <div className={styles.properties}>
          <span className={styles.property}>Endurance:</span>
          <span className={styles.property__name}> {robot.endurance}</span>
        </div>
        <div className={styles.properties}>
          <span className={styles.property}>Date:</span>
          <span className={styles.property__name}>
            {" "}
            {robot.date.getDate()} / {robot.date.getMonth()} /{" "}
            {robot.date.getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};
