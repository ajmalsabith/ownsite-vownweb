const express= require('express')
const userController=require('../Controllers/userControllers/mainController')
const userRoute=express()



userRoute.post('/loginUser',userController.loginUser)




module.exports = userRoute