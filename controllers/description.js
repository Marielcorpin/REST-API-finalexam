import Pro_update from '../models/Description.js'

export const getDescriptions = async (req, res) => {
    try {
        const pro_update = await Pro_update.findById(req.params.pro_updateId)
        const { price, exp_date } = req.query

        if (price) {
            pro_update.description = pro_update.description.filter((item) => item.price == price)  
        }
        if (exp_date) {
            pro_update.description = pro_update.description.filter((item) => item.exp_date == exp_date)  
        }

        if (pro_update.description.length !== 0)
            res.status(200).json(pro_update.description)
        else 
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message})
    }   
}

export const getDescription = async (req, res) => {
    try {
        const {pro_updateId, id} = req.params
        const pro_update = await Pro_update.findById(pro_updateId)
        const description = pro_update.description.id(id)
        if (description)
            res.status(404).json(description)
        else
            res.status(404).json({ error: 'resources not found' })
    } catch (err) {
        req.status(500).json({ error: err.message })
    }
}

export const addDescription = async (req, res) => {
    try {
        const newDescription = req.body
        const pro_update = await Pro_update.findById(req.params.pro_updateId)
        pro_update.description.push(newDescription)
        await pro_update.save()
        const idNewDescription = pro_update.description[pro_update.description.length-1]._id 
        res.status(201).json({ id: idNewDescription })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteDescription = async (req, res) => {
    try {
        const {pro_updateId, id} = req.params
        const pro_update = await Pro_update.findById(pro_updateId)
        pro_update.description.id(id).remove();
        await pro_update.save()
        res.status(204).send()
    }  catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }
}

export const updateDescription = async (req, res) => {
    try {
        const {pro_updateId, id} = req.params
        const pro_update = await Pro_update.findById(pro_updateId)

        const { code_no, price, weight, exp_date, texture } = req.body
        pro_update.description.id(id).code_no = code_no
        pro_update.description.id(id).price = price
        pro_update.description.id(id).weight = weight
        pro_update.description.id(id).exp_date = exp_date
        pro_update.description.id(id).texture = texture

        await pro_update.save()
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message})
    }
}

