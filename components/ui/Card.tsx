import { CardProps } from "./card-props.model";
import classes from "./Card.module.scss";

export const Card = (props: CardProps) => {
  return <div className={classes.card}>{props.children}</div>;
};
