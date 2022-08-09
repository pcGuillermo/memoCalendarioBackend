import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: String,
    description: String,
    type: String,
    day: String,
    month: String,
    year: String,
    hour: String,
    minute: String,
},{
    timestamps:true,
    versionKey:false,
});

export default model('Product', productSchema);
