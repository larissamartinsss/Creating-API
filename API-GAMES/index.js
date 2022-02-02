const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB = {
    
    games: [
        {
            id: 23,
            title: "Call of duty MW",
            year: 2019,
            price: 60
        },

        {
            id: 22,
            title: "Sea of thieves",
            year: 2018,
            price: 40
        },

        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        },
    ],

    users: [
        {
            id: 1,
            name: "Larissa",
            email: "larissa@gmail.com",
            password: "larissa123"
        },
        {
            id: 2,
            name: "Luana",
            email: "luanaa@gmail.com",
            password: "luana123"
        }
    ]
}

app.get("/games", (req, res) => {
    res.statusCode = 200; // One of pillars to build Restful api
    res.json(DB.games)
});

app.get("/game/:id", (req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.statusCode = 200;
            res.json(game);
        }else{
            res.sendStatus(404);
        }
    }
})

app.post("/game", (req, res) => {
    var {title, price, year} = req.body;

    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });
    res.sendStatus(200)
});

app.delete("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);

    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id ==id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
      
    }
});

app.put("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
           
            var{title, price, year} = req.body;

            if(title != undefined){
                game.title = title;
            }

            if(price != undefined){
                game.price = price;
            }

            
            if(year != undefined){
                game.year = year;
            }

            res.sendStatus(200);


        }else{
            res.sendStatus(404);
        }
    }
});

app.post("/auth", (req, res) => {
    var {email, password} = req.body;

    if(email != undefined){
       var user = DB.users.find(u => u.email == email);
        
        if(user != undefined){
            if(user.password == password){
                res.status(200);
                res.json({token: "Fake token!"})
            }else{
                res.status(401);
                res.json({err: "Invalid credencials"})
            }

        }else{
            res.status(404);
            res.json({err: "The email doesn't exist. "})
        }

    }else{
        res.status(400);
        res.json({err: "The email sent is invalid. "})
    }
});


app.listen(45678, () => {
    console.log("API running!");
});


