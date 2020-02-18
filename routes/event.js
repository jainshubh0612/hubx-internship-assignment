const route = require('express').Router()
const mongoose = require('mongoose')
const Events = require("../models/eventSchema")

route.get('/event' ,(req,res)=>{
    // res.send('fetching all routes')
    Events.find()
    .exec()
    .then((result)=>{
        // console.log(result)
        // const result1=JSON.parse(result)
        res.render('EventList' ,{
            title: 'AllEvent',
            result: JSON.parse(JSON.stringify(result))})
        console.log(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

route.get('/add-event' , (req,res)=>{
    res.render('AddEvent' , {
        title:'CreateEvent'
    })
})

route.post('/add-event' , (req,res)=>{
    const eventDetails = {
        eventName:req.body.eventName,
        eventVenue:req.body.eventVenue,
        eventDate:req.body.eventDate,
        eventTime:req.body.eventTime,
        eventDuration:req.body.eventDuration,
        eventGenre:req.body.eventGenre,
        eventDescription:req.body.eventDescription,
    }
    var event = new Events(eventDetails)
    event.save()
    .then((result)=>{
        res.redirect("/event")
    })
    .catch(err=>{console.log(err)})

    // res.send('Posting all routes')
})

module.exports = route