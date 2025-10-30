import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import userAuthRoute from './routes/userAuthRoute.js'
import foodAuthRoute from './routes/foodPartnerRoute.js'
import foodItemRoute from './routes/foodRoutes.js'
import getFoodRouter from './routes/getFoodPartnerFood.js'
dotenv.config()

const PORT  = process.env.PORT || 3000

const app = express()
app.use(cookieParser())
app.use(express.json())


app.get('/',(req,res)=>{
    return res.json({message : 'Hello World!'})
})

app.use('/api/user', userAuthRoute)
app.use('/api/food-partner', foodAuthRoute)
app.use('/api/food-item',foodItemRoute)
app.use('/api/food-partner',getFoodRouter)

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})
