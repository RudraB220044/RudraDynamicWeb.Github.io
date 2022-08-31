const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const app  = express()

const routes = require('./routes/main')
const detail = require("./models/Detail")
const slider = require('./models/slider')
const service = require('./models/Services')
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/static",express.static("public"));
app.use('', routes)


//(template engine)

app.set("view engine", "hbs")
app.set("views", "views")

hbs.registerPartials("views/partials")

mongoose.connect("mongodb://localhost/Project2",()=>{
    console.log("database connected");

    // service.create([
    // {
    //     icon: 'fab fa-accusoft',
    //     title: 'Provide Best Courses',
    //     description: 'We provide courses that helps our student learning and in placement.',
    //     linkText: 'https//www.learncodewithdurgesh.com',
    //     link: 'Check',
    // },
    // {
    //     icon: 'fab fa-affiliatetheme',
    //     title: 'Learn Projects',
    //     description: 'We provide courses that helps our student learning and in placement.',
    //     linkText: 'https//www.learncodewithdurgesh.com',
    //     link: 'Learn',
    // },
    // {
    //     icon: 'fab fa-accusoft',
    //     title: 'Provide Best Courses',
    //     description: 'We provide courses that helps our student learning and in placement.',
    //     linkText: 'https//www.learncodewithdurgesh.com',
    //     link: 'Check',
    // },    
        

    // ])
    
    // detail.create({
    //     brandName: "Preeti Gandu Solution",
    //     brandIconURL:"https://images-platform.99static.com//-BY3xw5GMOzCV9EswMbUPMrlfL0=/370x63:1138x832/fit-in/500x500/99designs-contests-attachments/47/47745/attachment_47745826",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/",
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"

    //         },
    //         {
    //             label:"Gallery",
    //             url: "/gallery",
    //         },
    //         {
    //             label:"About",
    //             url: "/about",
    //         },
    //         {
    //             label:"Contact Us",
    //             url: "/contact-us",
    //         },
    //     ]
    // });

    // slider.create([
    //     {
    //         title:'Learn Java in a very easy manner',
    //         subTitle:'Java is one of the most popular programming language',
    //         imageURL:"/static/images/1_K_B9fk4OLex0SizoDAUC3w.jpeg",
    //     },
    //     {
    //         title:'What is Django in Python',
    //         subTitle:'Django is the most famous framework of python programming',
    //         imageURL:"/static/images/alexandre-van-thuan-mr9FouttLGY-unsplash.jpg",
    //     },
    //     {
    //         title:'What about  node js ?',
    //         subTitle:'Node js is runtime environment to execute javascript outside browser',
    //         imageURL:"/static/images/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg",
    //     },   
    // ])


})

app.get("/", (request,response)=>{
    response.send("Wow, this is data from server")
})

app.listen(process.env.PORT | 5556, ()=>{
    console.log("Server started");
})