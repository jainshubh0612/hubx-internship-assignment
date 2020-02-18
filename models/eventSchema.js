const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    eventVenue:{
        type:String,
        required:true
    },
    eventDate:{
        type:String,
        required:true
    },
    eventTime:{
        type:String,
        required:true
    },
    eventDuration:{
        type:String,
        required:true
    },
    eventGenre:{
        type:String,
        required:true
    },
    eventDescription:{
        type:String,
        required:true
    }
})

const model = mongoose.model('Events' , eventSchema)

module.exports = model