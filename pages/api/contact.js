import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (
      !name ||
      name.trim() === "" ||
      !email ||
      !email.includes("@") ||
      !message ||
      message.trim("") === ""
    ) {
      res.status(422).json({ message: "Invalid Inputs." });
      return;
    }
    const newMessage = {
      name,
      email,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://alaa:1123987007@cluster0.yca21r1.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "failed to connect to database" });
    }

    const db = client.db("portfolio");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      //newMessage.id = result.insertedId;
    } catch (error) {
      client.close();

      res.status(500).json({ message: "failed to store messages" });
    }
    client.close();

    res.status(201).json({ message: "Successfully Stored", data: newMessage });
  }
}
export default handler;
