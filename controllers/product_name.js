import Product_name from '../models/Product_name.js'

export const getProduct_names = async (req, res) => {
    try {
        const product_name = await Product_name.find()
        if (product_name.length !== 0)
            res.status(200).json(product_name)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getProduct_name = async (req, res) => {
    try {
        const { id } = req.params
        const product_name = await Product_name.findById(id)
        if (product_name)
            res.status(200).json(product_name)
        else
            res.status(404).json({ error: 'resources not found' })
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

export const addProduct_name = async (req, res) => {
    try{
        const { code_no, brand, name } = req.body
        const newProduct_name = await Product_name.create({
            code_no,
            brand,
            name
        })
        const savedProduct_name = await newProduct_name.save()
        res.status(201).json({ id: savedProduct_name._id })
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export const deleteProduct_name = async (req, res) => {
    try {
        await Product_name.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message})
    }
}

export const updateProduct_name = async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        const { code_no, brand, name } = req.body
        const update = {
            code_no: code_no,
            brand: brand,
            name: name
        }

        await User.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message})
    }
}
