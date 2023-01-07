import Pro_update from "../models/Pro_update.js";

export const getPro_updates = async (req, res) => {
    try {
        const pro_update = await Pro_update
            .find({ product_no: req.params.product_no })
            .populate("product_no")
            .select('remaining_product rem_stock out_of_stock product_no')
        if ( pro_update.lenght !== 0)
            res.status(200).json(pro_update)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export const getPro_update = async (req, res) => {
    try {
        const { id } = req.params
        const pro_update = await Pro_update.findById(id)
            .populate("product_no")
            .select('remaining_product rem_stock out_of_stock product_no')
        if (pro_update)
           res.status(200).json(pro_update)
        else
           res.status(404).json({ error: 'resources not found' })
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export const addPro_update = async (req, res) => {
    try{
        const { remaining_product, rem_stock, out_of_stock  } = req.body
        const product_no = req.params.product_no
        const newPro_update = await Pro_update.create({
            remaining_product,
            rem_stock,
            out_of_stock,
            product_no
        })
        const savedPro_update = await newPro_update.save()
        res.status(201).json({ id: savedPro_update._id })
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export const deletePro_update = async (req, res) => {
    try {
        await Pro_update.deleteOne({
            product_no: req.params.product_no,
            _id: req.prams.id
        })
        res.status(204).send()
    } catch (err) {
        res.status(404).json({ error: err.message})
    }
}

export const updatePro_update = async (req, res) => {
    try {
        const filter = {
            product_no: req.params.product_no,
            _id: req.params.id
        }
        const { remaining_product, rem_stock, out_of_stock, } = req.body
        const update = {
            remaining_product: remaining_product,
            rem_stock: rem_stock,
            out_of_stock: out_of_stock
        }

        await Pro_update.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message})
    }
}
