export interface RobotResponse {
  id: string;
  thumb: string;
  name: string;
  speed: number;
  endurance: number;
  date: string | Date;
}

export interface Robot extends RobotResponse {
  date: Date;
}
