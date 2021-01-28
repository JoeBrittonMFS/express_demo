const express = require("express");
const app = express();

app.use(express.json())


app.get("/", (req, res) => {
    // Do whatever I want.
    console.log(req.body);
    res.send( { data: req.body } );
});
app.post("/", (req, res) => {
    // Do whatever I want.
    console.log(req.body);
    res.send( { data: req.body } );
});


app.get("/data", (req, res) => {
    console.log(req.query);
    res.send({ data: "Hello Joe" })
});
app.post("/data", (req, res) => {
    res.send( { data: {name: "Joe", age: 24} } );
})


// Write a route that responds with an object which contains your name and age
app.get("/name", (req, res) => {
    console.log(req.query);
    res.send( {
        name: "Joe",
        age: 24
    })
});


app.get("/dog", (req, res) => {
    res.send("woof");
});
app.get("/dog/:id", (req, res) => {
    console.log(req.params);
    res.send("success");
});

// Create a route for /person/:12. Make a request in Insomnia to 'url...' and log the id to the terminal in vscode when you make a request.
app.get("/person/:id", (req, res) => {
    console.log(req.params.id);
    res.send("success")
})

app.listen(5000, () => {
    console.log("Listening on port 5000")
});