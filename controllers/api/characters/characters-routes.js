const router = require('express').Router();
const Characters = require('../../../models/Characters');

// URL looks like this: localhost.3001/api/characters
router.post('/', async (req, res) => {
    try {
        const characterData = await Characters.create({
            class: req.body.class,
            skills: req.body.skills,
            names: req.body.names,
            alignment: req.body.alignment,

        });
        res.status(200).json(characterData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;