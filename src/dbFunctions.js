import { db } from "./dbConnect.js";
const coll = db.collection('plants')

export async function getAllPlants(req,res){
const plants = await db.collection("plants").find({}).toArray()
.then()
.catch()
res.send(plants);


}

export async function addPlant(req,res){
  const data = req.body
  await coll.insertOne(data) //es.send(`Added document ${doc.objectId}
  .then(doc=>res.send({message: `Added document ${doc.insertedId}`}))
  .catch(err => res.status(500).send(err))
}

export async function deletePlant(req,res){
  const data = req.body
  const filter = {
    name: data.name
  }
  await coll.deleteOne(filter)
  .then(doc=>res.send({message: `Added document ${doc.insertedId}`}))
  .catch(err => res.status(500).send(err))
}

export async function updatePlant(req,res ){
  const data = req.body
  const key = data['key']
  const updKey = data['updKey']
  const updVal = data['updVal']
  const updateFilter = {
    $set:{
       
    }
  }
  updateFilter['$set'][updKey] = updVal
  const filter = {
  }
  filter[key] = data['field']
  coll.updateOne(filter,updateFilter)
  .then(doc=>res.send({message: `Added document ${doc.insertedId}`}))
  .catch(err => res.status(500).send(err))
}