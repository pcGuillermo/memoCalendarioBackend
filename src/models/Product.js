import { Schema, model } from "mongoose";

const productSchema = new Schema({
    title: String,
    backgroundColor: String,
    start: Date,
    end: Date,
    user: String
},{
    timestamps:true,
    versionKey:false,
});

export default model('Product', productSchema);
