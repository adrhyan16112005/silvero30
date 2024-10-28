const { createPool } = require('mysql');

const pool = createPool({
    host: 'localhost', 
    user: 'root', 
    password: 'rootwer', 
    connectionLimit: 10 
});

pool.query('select from apidb.user',(err,ret)=>{
    return console.log(res)
})




