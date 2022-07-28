import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { MeetupDetail } from "../../components/meetups/MeetupDetail";

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
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const meetupId = context.params?.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: "https://i.imgur.com/A040Lxr.png",
        title: "A First Meetup",
        address: "Some street",
        description: "The meetup description",
      },
    },
  };
};

export default MeetupDetails;
