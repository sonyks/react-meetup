import { Meetup } from "./meetup.model";

export interface NewMeetupFormProps {
  onAddMeetup(meetup: Meetup): void;
}
