const express = require('express');
const app = express();
const connectDB = require('./DB/connectDB');
const router = require('./routes/userRouter')
const port = process.env.PORT || 5000;
app.use(express.json());
connectDB();
app.use('/api',router)

app.listen(port,(err)=>err?console.log(err): console.log("Your server is running on port 5000"));
