const mongoose = require('mongoose')


const empSchema = new mongoose.Schema({
    eid:{
        type:Number,
        required:["true","Employee id is needed"],
        unique:true
    },
    ename:{
        type:String,
        required:["true","Employee name is required"]
    },
    email:{
        type:String,
        required:["true","Employee mail is needed"]
    },
    password:{
        type:String,
        required:["true","Employee password is needed"]
    }

})

const mycompanyemployeemodel = mongoose.model("newemployeemodel",empSchema)
module.exports=mycompanyemployeemodel;