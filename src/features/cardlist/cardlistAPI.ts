import { RobotResponse } from "../../model/robot.model";

export const getRobotsList = async () => {
  const response = await fetch(
    `https://two02301-w6chwe-back-enrique-lorena.onrender.com/api/v1/robots`
  );
  const robotsList: RobotResponse[] = await response.json();
  const newRobotsList = robotsList.map((robot) => ({
    ...robot,
    date: new Date(robot.date),
  }));

  return newRobotsList;
};
