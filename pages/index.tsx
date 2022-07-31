import { MongoClient } from "mongodb";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { MeetupItemProps } from "../components/meetups/meetup-item-props.model";
import { MeetupItemList } from "../components/meetups/MeetupList";
import { mongoDbUrl } from "../components/models/constants.model";

const Home: NextPage = ({
  meetups,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <MeetupItemList meetups={meetups} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const client = await MongoClient.connect(mongoDbUrl);
  const db = client.db();

  const meetupCollections = db.collection("meetups");
  const meetups = await meetupCollections.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(
        (meetup) =>
          ({
            title: meetup.title,
            address: meetup.address,
            description: meetup.description,
            image: meetup.image,
            id: meetup._id.toString(),
          } as MeetupItemProps)
      ),
    },
  };
};

export default Home;
