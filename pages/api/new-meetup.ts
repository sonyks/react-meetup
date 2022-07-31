import { NextApiRequest, NextApiResponse } from "next";
import { Meetup } from "../../components/meetups/meetup.model";
import { MongoClient } from "mongodb";
import { mongoDbUrl } from "../../components/models/constants.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Meetup>
) {
  if (req.method === "POST") {
    const data = req.body;
    var bodyJson = JSON.parse(req.body);

    const client = await MongoClient.connect(mongoDbUrl);
    const db = client.db();

    const meetupCollections = db.collection("meetups");
    const result = await meetupCollections.insertOne(bodyJson);

    console.log(result);
    client.close();

    res.status(201).json(data);
  }
}
