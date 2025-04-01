import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

// Database connection
const username = process.env.username

const password = process.env.password

const dbName = 'Contacts'

const connectString = `mongodb+srv://${username}:${password}@cse341.kvqg6.mongodb.net/${dbName}?retryWrites=true&w=majority`

const options = {
    autoIndex: false, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4 
  };

export const db = mongoose.connect(connectString, options)
.then(res => {
    if(res) {
        console.log('Database connected successfully')
    }
}).catch(err => {
    console.log(err)
})