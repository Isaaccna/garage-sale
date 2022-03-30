const { Schema, model } = require('mongoose');
  
const ImageSchema = new Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
//Image is a model which has a schema imageSchema
const Image = model ('Image', ImageSchema)
  
module.exports = ImageSchema;