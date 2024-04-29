const express = require('express')
const router = express.Router()
const { body, validationResult } = require("express-validator");
const auth = require('../middleware/auth')
const Keep = require("../models/Keep");
const User = require("../models/User");


// @route   GET api/keeps
// @desc    get keep
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const keeps = await Keep.find({ user: req.user.id }).sort({ date: -1 })
        res.json(keeps)
        return
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error')
    }
    res.send('get all contacts')
})


// @route   POST api/keeps
// @desc    add new keeps 
// @access  Private
router.post('/', auth, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), });
    }
    const { title, parg } = req.body

    try {
        const newKeep = new Keep({
            user: req.user.id,
            title,
            parg
        })
        const keep = await newKeep.save()
        res.json(keep)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
})


// @route   PUT api/keeps
// @desc    update keeps 
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { title, parg } = req.body
    const KeepFields = {}

    if (title !== null) KeepFields.title = title
    if (parg !== null) KeepFields.parg = parg

    try {
        let keep = await Keep.findById(req.params.id)

        if (!keep) return res.status(401).json({ msg: "keep not found" })

        if (keep.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'not authorized' })
        }

        keep = await Keep.findByIdAndUpdate(req.params.id, { $set: KeepFields }, {
            new: true
        })

        res.json(keep)
        return
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

})


// @route   DELETE api/contacts
// @desc    delete keeps 
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let keep = await Keep.findById(req.params.id)
        if (!keep) return res.status(404).json({ msg: "keep not found" })

        if (keep.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'not authorized', status: '401' })
        }

        await Keep.findByIdAndDelete(req.params.id)
        res.json({ msg: 'keep removed' })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router