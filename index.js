import { MongoClient } from "mongodb";
import cors from 'cors'
import express from 'express'

import { getAllPlants,addPlant,deletePlant,updatePlant } from "./src/dbFunctions.js";

const PORT = 3001;
const app = express()

app.use(cors())
app.use(express.json())

// api points / routes will go here...

app.get('/plants',getAllPlants)
app.post('/plants',addPlant)
app.post('/plants/del',deletePlant)
app.post('/plants/upd',updatePlant)
//app.post()

app.listen(PORT,()=>
console.log(`Listening on http://localhost:${PORT}...`));