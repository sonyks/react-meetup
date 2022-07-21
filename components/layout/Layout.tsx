import { Props } from "../models/props.model";
import classes from "./Layout.module.scss";

export const Layout = (props: Props) => {
  return <div className={classes.card}>{props.children}</div>;
};
