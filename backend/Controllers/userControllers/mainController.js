
const User=require('../../Models/userModels/UserModel')

const loginUser=async(req,res)=>{

    try {
        const {name,email}=req.body
        console.log(email,name);
        const user= new User({
            name:name,
            email:email
        })
        const rese= await user.save()

        if(rese){
            res.status(200).send({
                message:'login success'
            })
        }else{
            res.status(400).send({
                message:'somthing went wrong...!'
            })
        }
    } catch (error) {
        console.log(error.message);
    }
}






module.exports={
    loginUser
}