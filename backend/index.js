require('dotenv').config()
const express = require('express');
const cors =require('cors');
const router = require('./router');
const app = express();

const Port  =  process.env.PORT || 5000 ;
app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(express.json());

app.listen(Port, () => {
    console.log(`server is listening in port ${Port}`);
})

app.use('/api', router)