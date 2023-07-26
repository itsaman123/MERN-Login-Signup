const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/react-login-tutorial")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed")
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        require:true
    }
})
const collection=mongoose.model('collection',newSchema)
module.exports=collection