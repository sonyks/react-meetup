import { Card } from "../ui/Card";
import Image from "next/image";
import { MeetupItemProps } from "./meetup-item-props.model";
import classes from "./MeetupItem.module.scss";

export const MeetupItem = (props: MeetupItemProps) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
};
