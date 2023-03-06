import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Robot } from "../../model/robot.model";
import { Card } from "../card/Card";
import styles from "./CardList.module.css";
import { fetchRobots, selectRobots } from "./cardlistSlice";

const CardList = () => {
  const robots = useAppSelector(selectRobots);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRobots());
  }, [dispatch]);

  return (
    <div>
      <ul className={styles.robots__container}>
        {robots.map((robot: Robot, i) => (
          <li key={robot.name + "list"}>
            <Card robot={robot} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
