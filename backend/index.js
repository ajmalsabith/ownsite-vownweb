const mongoose= require('mongoose')
const express= require('express')
const app= express()
const userRoute=require('./Routes/userRoutes')
const cors= require('cors')
const cookieParser = require('cookie-parser');

app.use(cors({
    origin:['http://localhost:4200']
}))

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use(cookieParser());
app.use(express.json());

app.use('',userRoute)

mongoose.connect('mongodb://127.0.0.1:27017/ownsite').then(()=>{
    console.log(' database connected successfully');
}).catch((error) => {
    console.error('Error connecting to database:', error);
});

app.listen(4000,()=>{
    console.log('server started on port 4000 ...');
})
