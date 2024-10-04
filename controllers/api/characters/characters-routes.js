const router = require('express').Router();
const { Characters } = require('../../../models/');

router.post('/', async (req, res) => {
    try {
        const characterData = await Characters.create({
            class: req.body.class,
            skills: req.body.skills,
            names: req.body.names,
            alignment: req.body.alignment,

        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;