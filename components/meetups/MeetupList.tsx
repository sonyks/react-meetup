import { MeetupListProps } from "./meetup-list-props.module";
import { MeetupItem } from "./MeetupItem";
import classes from "./MeetupList.module.scss";

export const MeetupItemList = (props: MeetupListProps) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};
