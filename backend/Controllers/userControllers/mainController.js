
const User=require('../../Models/userModels/UserModel')
const jwt=require('jsonwebtoken')

const loginUser=async(req,res)=>{

    try {
        let image=''
        console.log(req.body);
        const {name,email,picture}=req.body
        image=picture
        const user= new User({
            name:name,
            email:email,
            image:image
        })
        const rese= await user.save()
        const token = jwt.sign({ _id:rese._id}, "usersecret")

        if(rese){
            res.status(200).send({
                message:'login success',token:token
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