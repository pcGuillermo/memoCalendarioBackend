import { Schema, model } from "mongoose";

const productSchema = new Schema({
    title: String,
    backgroundColor: String,
    start: String,
},{
    timestamps:true,
    versionKey:false,
});

export default model('Product', productSchema);
