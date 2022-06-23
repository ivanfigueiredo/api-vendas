import mongoose, { Schema } from 'mongoose'

const CellSchema = new Schema(
  {
    code: {
      type: String,
      require: true
    },

    model: {
      type: String,
      require: true
    },

    startDate: {
      type: Date,
      require: true
    },

    endDate: {
      type: Date,
      require: true
    },

    price: {
      type: Number,
      require: true
    },

    brand: {
      type: String,
      require: true
    },

    color: {
      type: String,
      require: true,
      enum: {
        values: ['BLACK', 'WHITE', 'GOLD', 'PINK'],
        message: '{VALUE} is not supported'
      }
    }
  }
)

export default mongoose.model('Cell', CellSchema)
