import { Client } from 'pg';

const client = new Client({
    user: "baxa",
    password: "uhupup667",
    database: "go",
    // user: 'myuser',
    host: 'localhost',
    // database: 'mydatabase',
    // password: 'mypassword',
    port: 5432,
});

client.connect();

client.query('SELECT * FROM mytable', (err, res) => {
    if (err) throw err;
    console.log(res.rows);
    client.end();
});
