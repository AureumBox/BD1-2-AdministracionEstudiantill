/*const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: "12345",
    database: 'administraciónestudiantil'
});

client.connect();

client.query('Select * from historicoprofesor', (err, res)=>{
    if(err){
        console.log(err.message);
    }
    console.log(res.rows);
    client.end;
})
*/

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const routerApi = require('./routes');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
});

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});