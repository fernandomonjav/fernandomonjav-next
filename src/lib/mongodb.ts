import { MongoClient } from 'mongodb'

const { MONGODB_URI } = process.env

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!MONGODB_URI) {
  throw new Error('Please add your MongoDB URI')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(MONGODB_URI)
  clientPromise = client.connect()
}

export default clientPromise
