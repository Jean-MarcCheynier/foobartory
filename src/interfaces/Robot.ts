import { LineEnum } from "../features/factory/factorySlice";

export interface IRobot {
  id: string;
  busy: boolean;
  activity?:LineEnum;
  changingActivity: boolean;
}