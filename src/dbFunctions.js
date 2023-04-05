import { ObjectId } from "mongodb";
import { db } from "./dbConnect.js";
const coll = db.collection("plants");

export async function getAllPlants(req, res) {
  const plants = await db
    .collection("plants")
    .find({})
    .toArray()
    .then()
    .catch();
  res.send(plants);
}

export async function addPlant(req, res) {
  const data = req.body;
  await coll
    .insertOne(data) //es.send(`Added document ${doc.objectId}
    .then((doc) => res.send({ message: `Added document ${doc.insertedId}` }))
    .catch((err) => res.status(500).send(err));
}

// unused delete

export async function deletePlant__(req, res) {
  const data = req.body;
  // const docId = { _id: new ObjectId(req.params.docId) };
  const filter = {
    name: data.name,
  };
  await coll
    .deleteOne(filter)
    .then((doc) => res.send({ message: `Added document ${doc.insertedId}` }))
    .catch((err) => res.status(500).send(err));
}


// unused update
export async function updatePlant_(req, res) {
  const data = req.body;
  const key = data["key"];
  const updKey = data["updKey"];
  const updVal = data["updVal"];
  const updateFilter = {
    $set: {},
  };
  updateFilter["$set"][updKey] = updVal;
  const filter = {};
  filter[key] = data["field"];
  coll
    .updateOne(filter, updateFilter)
    .then((doc) => res.send({ message: `Added document ${doc.insertedId}` }))
    .catch((err) => res.status(500).send(err));
}

// 2nd methods

export async function deletePlant(req,res){
  const docId = {"_id": new ObjectId(req.params.docId)}
  await coll.deleteOne(docId)
  res.status(201).send({message: 'plant has been sadly deleted'})
}


// 
export async function updatePlant (req,res){
  const docId = {"_id": new ObjectId (req.params.docId)}
  const updatePlant = req.body;
  await coll.updateOne(
    {"_id": docId},{$set:{updatePlant}}
  );
  res.status(201).send({message: "plant has been updated"})
  .then(res.send({message: "document has been updated"}))
}