import type { NextPage } from "next";
import { Meetup } from "../../components/meetups/meetup.model";
import { NewMeetupForm } from "../../components/meetups/NewMeetupForm";

const NewMeetup: NextPage = () => {
  const addMeetupHandler = (meetup: Meetup) => {
    console.log(meetup);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
