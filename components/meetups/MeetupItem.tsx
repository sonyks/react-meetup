import { Card } from "../ui/Card";
import Image from "next/image";
import { MeetupItemProps } from "./meetup-item-props.model";
import classes from "./MeetupItem.module.scss";
import { useRouter } from "next/router";

export const MeetupItem = (props: MeetupItemProps) => {
  const router = useRouter();
  const showDetailHandler = () => {
    router.push(`/${props.id}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};
