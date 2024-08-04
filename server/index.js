const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = process.env.PORT || 3000;
const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
// ===============MongoDB Start===================

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rxr3v0u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
// custom middlewares

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const placeCollection = client.db("VisitBD").collection("places");
    const divisionCollection = client.db("VisitBD").collection("places");
    const mustdoCollection = client.db("VisitBD").collection("mustdo");
    const blogCollection = client.db("VisitBD").collection("blogs");
    // Auth related API
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "7d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false, //or you can check it dynamicle "process.env.NOODE_ENV==='production'"
          sameSite: "none", //or you can check it dynamicle "process.env.NOODE_ENV==='production'"
        })
        .send({ success: true });
    });
    // clear token after logout
    app.get("/logout", (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: false,
          sameSite: "none",
          maxAge: 0,
        })
        .send({ success: true });
    });
    /* ************Server API Start***************** */
    // get division from db
    app.get("/divisions", async (req, res) => {
      const result = await divisionCollection.find().toArray();
      res.send(result);
    });

    // get single division details using name from db
    app.get("/divisions/:name", async (req, res) => {
      // const token = req.cookies?.token;
      // console.log(token);

      const name = req.params.name;
      const result = await divisionCollection.findOne({ name: name });
      res.send(result);
    });
    // get mustdo data from db
    app.get("/mustdo", async (req, res) => {
      const result = await mustdoCollection.find().toArray();
      res.send(result);
    });
    // save blog data on db
    app.post("/blogs", async (req, res) => {
      const blogData = req.body;
      const result = await blogCollection.insertOne(blogData);
      res.send(result);
    });
    // get all blog from db
    app.get("/blogs", async (req, res) => {
      const result = await blogCollection.find().toArray();
      res.send(result);
    });

    /* ***********Server API End**************** */
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// ===============MongoDB End===================

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Your server is runnig at http://localhost:${port}`);
});
