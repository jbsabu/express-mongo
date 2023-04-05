import {mongoUri} from '../credentials.js'
import { MongoClient } from 'mongodb'
import express from 'express'
import cors from 'cors'

const client = new MongoClient(mongoUri)

export const db = client.db("my-garden")