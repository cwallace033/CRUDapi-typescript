import express from 'express'
import { db } from '../Config/db.config'
import { router } from '../Routes/contact.routes'

const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/contacts', router)

//Database connection
db.then(() => {
    app.listen(3000, () => console.log('Server is listening on port 3000'))
})