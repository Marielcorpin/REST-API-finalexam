import mongoose from 'mongoose'

const Product_nameSchema = new mongoose.Schema(
    {
        code_no: { type: String, required:true, unique: true},
        brand: { type: String, required: true },
        name: { type: String, required: true},  
    },
    { timestaps: true}
)

const Product_name = mongoose.model('Product_name', Product_nameSchema)
export default Product_name
