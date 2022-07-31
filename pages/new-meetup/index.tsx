import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Meetup } from "../../components/meetups/meetup.model";
import { NewMeetupForm } from "../../components/meetups/NewMeetupForm";

const NewMeetup: NextPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (meetup: Meetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "applicationjson",
      },
    });

    const data = await response.json();

    console.log(data);

    router.replace("/");
  };

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add your own meetups" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetup;
