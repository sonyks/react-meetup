import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { MeetupItemProps } from "../components/meetups/meetup-item-props.model";
import { MeetupItemList } from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://i.imgur.com/A040Lxr.png",
    address: "Test address 5, some city",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://i.imgur.com/FOeYt4E.png",
    address: "Test second address 5, some city",
    description: "This is the second meetup",
  },
] as MeetupItemProps[];

const Home: NextPage = (props: any) => {
  return <MeetupItemList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default Home;
