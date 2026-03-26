const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res)=>{
//     console.log("request received");
//     res.send({
//         name: "apple",
//         color: "red"
//     })
// });

// app.get("/apple", (req, res) => {
//     res.send("you connected with apple path");
// })
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    console.log(req.params)
    res.send(`hello, i am root @${username} , ${id}`);
})

app.get("/search",(req,res)=>{
    let {q} =(req.query);
    res.send(`search results for query : ${q}`);
})
