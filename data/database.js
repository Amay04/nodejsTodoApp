import mongoose from "mongoose";

//connecting database
export const connectDB = ()=>{
mongoose
.connect(process.env.MONGO_URI, {
  dbName: "backendAPI",
})
.then(() => console.log("Database connected"))
.catch((e) => console.log(e));

}