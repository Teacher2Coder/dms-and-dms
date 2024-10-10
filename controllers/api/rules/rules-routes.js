const router = require('express').Router();
const Rules = require('../../../models/Rules');

// URL looks like this: localhost.3001/api/characters
router.post('/', async (req, res) => {
    try {
        // Create a new character with the data from the req.body
        const ruleData = await Rules.create({
            title: req.body.titleInput,
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