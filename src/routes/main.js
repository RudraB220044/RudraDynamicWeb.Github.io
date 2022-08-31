const express = require("express")
const { route } = require('express/lib/application')

const Detail = require("../models/Detail")

const Services = require("../models/Services")
const Contact = require("../models/Contact")
const routes = express.Router()

routes.get("/",async (req,res) => {

    const details =await Detail.findOne({"_id": "630f95f04ab955aa21579669"})
    
    const services = await Services.find()
    
    res.render("index",{
        details:details,
        
        services: services,
    });
})
routes.get("/gallery",async (req,res) =>{
    const details =await Detail.findOne({"_id": "630f95f04ab955aa21579669"})
    res.render("gallery",{
        details:details
    });
})

routes.post("/process-contact-form",async (req,res) => {
    //Save the data in the database
    try{
        const data =await Contact.create(req.body)
        console.log(data)
        res.redirect("/")
    }catch(e)
    {
        console.log(e)
        res.redirect("/")
    }

})

module.exports = routes