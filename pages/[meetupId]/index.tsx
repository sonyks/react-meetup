import { MongoClient } from "mongodb";
import { ObjectId } from "bson";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { MeetupDetail } from "../../components/meetups/MeetupDetail";
import { mongoDbUrl } from "../../components/models/constants.model";

const MeetupDetails: NextPage = ({
  meetupData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(mongoDbUrl);
  const db = client.db();

  const meetupCollections = db.collection("meetups");
  const meetups = await meetupCollections
    .find({}, { projection: { _id: 1 } })
    .toArray();

  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = await MongoClient.connect(mongoDbUrl);
  const db = client.db();

  const meetupCollections = db.collection("meetups");

  const meetupId: string = context.params?.meetupId as string;
  const id = new ObjectId(meetupId);
  const selectedMeetup = await meetupCollections.findOne({ _id: id });

  return {
    props: {
      meetupData: {
        id: selectedMeetup?._id.toString(),
        image: selectedMeetup?.image,
        title: selectedMeetup?.title,
        address: selectedMeetup?.address,
        description: selectedMeetup?.description,
      },
    },
  };
};

export default MeetupDetails;
