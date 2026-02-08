const express = require("express");
const app = express();
const port = 5678;
const path = require("path");
const { v4 : uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views", (path.join(__dirname,"views")));

app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
});

let posts =[
    {
        id:uuidv4(),
        username:"raze",
        content : "Here comes the party",
    },
    {
        id:uuidv4(),
        username:"deadlock",
        content : "My territory my rules",
    },
    {
        id:uuidv4(),
        username:"chamber",
        content : "You want to play? Let's Play",
    },
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.post("/posts",(req,res)=>{
    let {username,content} = (req.body);
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs",{post});
})
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    let newContent = req.body.content;
    post.content = newContent ;
    res.redirect("/posts");
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
})
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
})