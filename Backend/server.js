import express from "express";
import mongoose from "mongoose";
import Message from "./Dbmessages.js";
import Pusher from "pusher";
import cors from "cors" 

// app comfig
const app = express();
const port = 9001;


const pusher = new Pusher({
  appId: "1594174",
  key: "65928977311566ec73ff",
  secret: "2bceeeab8c835bd9668d",
  cluster: "eu",
  useTLS: true,
});

// Middleware
app.use(express.json());
app.use(cors())

app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Orgin", "*")
  res.setHeader("Access-Control-allow-Headers", "*")
  next()
})
const connectionString =
  "mongodb+srv://waa:waa@cluster0.2zcdyi9.mongodb.net/";

const Db = mongoose.connection;
Db.once("open", () => {
  console.log("Db connected");

  const mgCollection = Db.collection("messgaecontents");
  const chnagestream = mgCollection.watch();

  chnagestream.on("change", (chnage) => {
    console.log(chnage);
    if (chnage.operationType ==="insert") {
      const messageDetails=chnage.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.user,
        message: messageDetails.message,
      })
    } else {
      console.log("erroe triggering pusher")
    }
  });
});



// Database configuration
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
});

// API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).send(messages);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.post("/new", async (req, res) => {
  try {
    const dbmessage = req.body;
    const createdMessage = await Message.create(dbmessage);
    res.status(201).send(createdMessage);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
