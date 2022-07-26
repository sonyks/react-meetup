import type { NextPage } from "next";
import { MeetupDetail } from "../../components/meetups/MeetupDetail";

const MeetupDetails: NextPage = () => {
  return (
    <>
      <MeetupDetail
        image="https://i.imgur.com/A040Lxr.png"
        title="A First Meetup"
        address="Some street"
        description="The meetup description"
      />
    </>
  );
};

export default MeetupDetails;
