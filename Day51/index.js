const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'pass123'
});


let getRandonUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};
// HOME ROUTE
app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home",{count});
        })
    }
    catch (err) {
        console.log(err);
        res.send("some error in DB")
    }
})
// Show route
app.get("/user", (req, res)=>{
    let q = 'SELECT * FROM user';
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("showuser" , {users});
        })

        
    }
    catch (err) {
        console.log(err);
        res.send("some error in DB")
    }

})

// Edit  Route
app.get("/user/:id/edit",(req,res)=>{
    let id = req.params.id;
    let q = `SELECT * FROM user WHERE id= '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit", { user });
        })    
    }
    catch (err) {
        console.log(err);
        res.send("some error in DB")
    }
})

// Update (DB) Route
app.get("/user/:id/update",(req,res)=>{
    let id = req.params.id;
    let {password: formPass, username: formUsername} = req.body;
    let q = `SELECT * FROM user WHERE id= '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(formPass != user.password){
                res.send("password is incorrect");
            }
            else{
                let q2 = `UPDATE user SET username = '${formUsername}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.send("username updated successfully");
                })
            }
            res.render("edit", { user });
        })    
    }
    catch (err) {
        console.log(err);
        res.send("some error in DB")
    }
})
app.listen("8080", () => {
    console.log("server is listening to port 8080");
})
