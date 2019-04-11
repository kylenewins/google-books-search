const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//Generate the Schema
const bookSchema = new Schema({
    title: {type: String, required: true},
    authors: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String},
    link: {type:String}
});

//store the schema in a single variable
const Book = mongoose.model("Book", bookSchema)

//export the schema
module.exports = Book