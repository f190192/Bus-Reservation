//rest-api-tutorial
//username->mahrukh
//password->mahrukh123
//link->mongodb+srv://mahrukh:<password>@cluster0.v3lph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//poroject0
//username->f19_0103
//password->Itj0CKvQrRpyfR68
//link->mongodb+srv://f19_0103:Itj0CKvQrRpyfR68@cluster0.ngmmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require('express');
const mongoose = require('mongoose');
const {MONGO_URI} = require('./config');

//routes
const postsRoutes = require('./routes/api/posts');

const app = express();

/*app.get('/', (req,res)=>{

    res.send("hello from node");
});*/

//bodyParser middleware
app.use(express.json());

//connect to mongo db
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

    .then(()=> console.log('mongo db connencted'))
    .catch(err => console.log(err))


//user routes
app.use('/api/posts', postsRoutes);

const port = 3000;

app.listen(port,()=> console.log(`server is running at port ${port}.`));
