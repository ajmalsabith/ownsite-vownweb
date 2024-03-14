const mongoose=require('mongoose')
const { type } = require('os')

const userShema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:''
    },
    isverified:{
        type:Boolean,
        default:false
    }

})

module.exports= mongoose.model('userSchema',userShema)