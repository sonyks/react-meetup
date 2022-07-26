import { Meetup } from "./meetup.model";
import classes from "./MeetupDetail.module.scss";

export const MeetupDetail = (props: Meetup) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};
