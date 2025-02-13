const express = require('express')
const app = express()
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000

var cors = require('cors')
app.use(cors())
app.use(express.json()); // Middleware to parse JSON requests

// fishingProject
// o6x8Ucatn66DG0YN


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://fishingProject:o6x8Ucatn66DG0YN@cluster0.bnqcs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const database = client.db("insertDB");
    const projectJanuary = database.collection("projectJanuary");
    const projectFebruary = database.collection("projectFebruary");
    const projectMarch = database.collection("projectMarch");
    const projectApril = database.collection("projectApril");
    const projectMay = database.collection("projectMay");
    const projectJune = database.collection("projectJune");
    const projectJuly = database.collection("projectJuly");
    const projectAugust = database.collection("projectAugust");
    const projectSeptember = database.collection("pojectSeptember");
    const projectOctobor = database.collection("projectOctobor");
    const projectNovember = database.collection("projectNovember");
    const projectDecember = database.collection("projectDecember");

    app.get("/januaryProject",async(req,res)=>{

        const cursor = await projectJanuary.find().toArray();
        res.send(cursor)
    })
    app.get("/febProject",async(req,res)=>{

        const cursor = await projectFebruary.find().toArray();
        res.send(cursor)
    })
    app.get("/marchProject",async(req,res)=>{

        const cursor = await projectMarch.find().toArray();
        res.send(cursor)
    })
    app.get("/appProject",async(req,res)=>{

        const cursor = await projectApril.find().toArray();
        res.send(cursor)
    })
    app.get("/mayProject",async(req,res)=>{

        const cursor = await projectMay.find().toArray();
        res.send(cursor)
    })
    app.get("/juneProject",async(req,res)=>{

        const cursor = await projectJune.find().toArray();
        res.send(cursor)
    })
    app.get("/julyProject",async(req,res)=>{

        const cursor = await projectJuly.find().toArray();
        res.send(cursor)
    })
    app.get("/augProject",async(req,res)=>{

        const cursor = await projectAugust.find().toArray();
        res.send(cursor)
    })
    app.get("/sepProject",async(req,res)=>{

        const cursor = await projectSeptember.find().toArray();
        res.send(cursor)
    })
    app.get("/octProject",async(req,res)=>{

        const cursor = await projectOctobor.find().toArray();
        res.send(cursor)
    })
    app.get("/novProject",async(req,res)=>{

        const cursor = await projectNovember.find().toArray();
        res.send(cursor)
    })
    app.get("/decProject",async(req,res)=>{

        const cursor = await projectDecember.find().toArray();
        res.send(cursor)
    })

    app.post("/addProject",async(req,res)=>{


        let data=req.body
        console.log(data.month)

        let result

        if(data.month=="January"){
            result = await projectJanuary.insertOne(data);

        }
        if(data.month=="February"){
            result = await projectFebruary.insertOne(data);

        }
        if(data.month=="March"){
            result = await projectMarch.insertOne(data);

        }
        if(data.month=="April"){
            result = await projectApril.insertOne(data);

        }
        if(data.month=="May"){
            result = await projectMay.insertOne(data);

        }
        if(data.month=="June"){
            result = await projectJune.insertOne(data);

        }
        if(data.month=="July"){
            result = await projectJuly.insertOne(data);

        }
        if(data.month=="August"){
            result = await projectAugust.insertOne(data);

        }
        if(data.month=="September"){
            result = await projectSeptember.insertOne(data);

        }
        if(data.month=="October"){
            result = await projectOctobor.insertOne(data);

        }
        if(data.month=="November"){
            result = await projectNovember.insertOne(data);

        }
        if(data.month=="December"){
            result = await projectDecember.insertOne(data);

        }

        res.send(result)
    })








    // // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})