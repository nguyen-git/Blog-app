import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()


const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@blog-app.ansbgl8.mongodb.net/?retryWrites=true&w=majority`
    
    try {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }, console.log("Data connect success"))
    } catch (error) {
        console.log("Error connecting to Data Base", error);
    }
}

export default Connection;
