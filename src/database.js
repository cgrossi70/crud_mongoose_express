import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_DATABASE}`)
.then(()=>{
  console.log('Database connected successfully')
})
.catch((error) => {
  console.log(error.code)
})

