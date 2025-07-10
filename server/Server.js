import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './Configs/db.js';
import adminRouter from './Routes/adminRoutes.js';
import blogRouter from './Routes/blogRoutes.js';

const app = express();
await connectDB();

app.use(cors())
app.use(express.json()) 

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=> res.send("API is Working"))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)


app.listen(PORT, ()=>{
    console.log("Listening on port", PORT)
})

export default app