import mongoose from "mongoose";

 export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://mkaveeshakulathunga:CLycV0ZwhVA3Qepe@methma.pul7x6h.mongodb.net/blog-app')
    console.log("DB Connected")
}