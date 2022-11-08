if(process.env.NODE_ENV !== "production")
{
    require('dotenv').config();
}


const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const path = require('path');
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/Additive';
// const sort = require('sort');

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect(dbUrl);
    console.log('database connected');
}
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

app.use('/', userRoutes);

app.listen(port, ()=>{
    console.log('serving on port 3000');
})
