const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = process.env.PORT || 3000;
const app = express();

// middleware
app.use(express.json());
app.use(cors());

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

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const placeCollection = client.db("VisitBD").collection("places");
    const divisionCollection = client.db("VisitBD").collection("places");
    /* ************Server API Start***************** */
    // get division from db
    app.get("/divisions", async (req, res) => {
      const result = await divisionCollection.find().toArray();
      res.send(result);
    });

    // get single division details using name from db
    app.get("/divisions/:name", async (req, res) => {
      const name = req.params.name;
      const result = await divisionCollection.findOne({ name: name });
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
