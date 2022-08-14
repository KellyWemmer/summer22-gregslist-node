import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const HouseSchema = new Schema(
  {
    bedrooms: { type: Number, required: true, min: 0, max: 100 },
    bathrooms: { type: Number, required: true, min: 0, max: 100 },
    levels: { type: Number  },
    year: { type: Number, required: true, min: 1918, max: 99999 },
    price: { type: Number, required: true, min: 0, max: 999999999 },
    img: { type: String, maxlength: 600, default: 'http://thiscatdoesnotexist.com' },
    description: { type: String, maxlength: 1000 },
    
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
