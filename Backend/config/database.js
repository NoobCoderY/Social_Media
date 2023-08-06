import mongoose from "mongoose";


export const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI).then((con) => {
        console.log(`DataBase Connected:${con.Connection.name}`);
    }).catch((err) => {
        console.log(err);
    })
}