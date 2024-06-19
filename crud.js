const mongoose  = require('mongoose');

// const mongoURL = 'mongodb://localhost:27017/Hotels'
const mongourl = 'mongodb+srv://mansirupareliya:mansi123@cluster0.cbaydkt.mongodb.net/'

// mongoose.connect(mongourl,{
//     useNewUrlparser : true,
//     useUnifiedTopology:true
// })

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected to mongodb server");

})
db.on('error',()=>{
    console.error(" mongodb server error");
    
})
db.on('disconnected',()=>{
    console.log("mongodb server discoonect");
    
})
