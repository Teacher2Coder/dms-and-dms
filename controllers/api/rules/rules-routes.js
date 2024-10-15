// Call the router
const router = require('express').Router();
// Import the models
const Rules = require('../../../models/Rules');

// URL looks like this: localhost:3001/api/rules
router.post('/', async (req, res) => {
    try {
        // Create a new character with the data from the req.body
        const ruleData = await Rules.create({
            title: req.body.titleInput,
            // Author is named after the active user
            author: req.session.user,
            description: req.body.descriptionInput,
        });

        res.status(200).json(ruleData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like localhost:3001/api/rules/1
router.put('/:id', async (req, res) => {
    try {
        // Update the rule with the data from the req.body
        const ruleData = await Rules.update({
            title: req.body.titleInput,
            description: req.body.descriptionInput
        }, 
        {
            // Update the rule with the data from the req.body
            where: { id: req.params.id }
        });

        res.status(200).json(ruleData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

// URL looks like localhost:3001/api/rules/1
router.delete('/:id', async (req, res) => {
    try {
        // Delete the rule where the rule's id is req.params.id
        const ruleData = await Rules.destroy({
            where: { id: req.params.id }
        });

        res.status(200).json(ruleData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;