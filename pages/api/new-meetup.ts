import { NextApiRequest, NextApiResponse } from "next";
import { Meetup } from "../../components/meetups/meetup.model";
import { MongoClient } from "mongodb";

const mongoDbUrl = process.env.MONGODB_DATABASE_URL as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Meetup>
) {
  if (req.method === "POST") {
    const data = req.body;
    var bodyJson = JSON.parse(req.body);

    console.log(mongoDbUrl);

    const client = await MongoClient.connect(mongoDbUrl);
    const db = client.db();

    const meetupCollections = db.collection("meetups");
    const result = await meetupCollections.insertOne(bodyJson);

    console.log(result);
    client.close();

    res.status(201).json(data);
  }
}
