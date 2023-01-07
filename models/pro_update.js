import mongoose from 'mongoose'
import { DescriptionSchema } from './Description.js'

const Pro_updateSchema = new mongoose.Schema(
    {
        remaining_product: { type: String, required: true },
        rem_stock: { type: String, required: true },
        out_of_stock: { type: Number, required: true },
        product_no: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        description: [DescriptionSchema]
    },
    { timestamps: true}
)

const Pro_update = mongoose.model("Pro_update", Pro_updateSchema)
export default Pro_update