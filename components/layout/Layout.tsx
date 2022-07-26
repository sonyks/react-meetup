import { Props } from "../models/props.model";
import classes from "./Layout.module.scss";
import { MainNavigation } from "./MainNavigation";

export const Layout = (props: Props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};
