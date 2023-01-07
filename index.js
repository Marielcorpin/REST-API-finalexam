import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import descriptionRoutes from './routes/description.js'
import product_nameRoutes from './routes/product_name.js'
import pro_updateRoutes from './routes/pro_update.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

/* routes */
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/product_name', product_nameRoutes)
app.use('/product/:product_no/pro_update', pro_updateRoutes)
app.use('/pro_update/:pro_updateId/description', descriptionRoutes)

/* Connect to Database */
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    dbName: 'grocery_monitorings'
})
.then(() => app.listen(PORT, () => console.log('Server listening on ${PORT}')))
.catch((error) => console.log('${error} did not connect'))