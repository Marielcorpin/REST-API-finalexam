import mongoose from 'mongoose'

export const DescriptionSchema = new mongoose.Schema(
    {
        code_no: { type: String, required:true, unique: true },
        price: { type: Number, required: true },
        weight: { type: String, required: true},
        exp_date: { type: String, required: true},
        texture: { type: String, required: true }
    },
    { timestamps: true}
)

const Description = mongoose.model("Description", DescriptionSchema)
export default Description