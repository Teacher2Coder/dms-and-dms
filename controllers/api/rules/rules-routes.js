const router = require('express').Router();
const Characters = require('../../../models/Characters');

// URL looks like this: localhost.3001/api/characters
router.post('/', async (req, res) => {
    try {
        // Create a new character with the data from the req.body
        const ruleData = await Characters.create({
            name: req.body.nameInput,
            author: req.session.user,
            description: req.body.descriptionInput,
        });
        res.status(200).json(ruleData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.put('/:id')

router.delete('/:id')

module.exports = router;