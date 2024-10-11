const router = require('express').Router();
const Stories = require('../../../models/Stories');

// URL looks like this: localhost:3001/api/stories
router.post('/', async (req, res) => {
    try {
        // Create a new story with the data from the req.body
        const storyData = await Stories.create({
            name: req.body.nameInput,
            // Author is named after the active user
            author: req.session.user,
            world: req.body.worldInput,
            description: req.body.descriptionInput,
            main_villain: req.body.villainInput,
            potential_factions: req.body.factionsInput,
            levels: req.body.levelInput
        });
        res.status(200).json(storyData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like localhost:3001/api/stories/1
router.put('/:id', async (req, res) => {
    try {
        // Update the story with the data from the req.body
        const storyData = await Stories.update({
            name: req.body.nameInput,
            description: req.body.descriptionInput,
            world: req.body.worldInput,
            main_villain: req.body.villainInput,
            potential_factions: req.body.factionsInput,
            levels: req.body.levelInput
        },
        {
            // Update the character with the id that matches the req.params.id
            where: { id: req.params.id }
        });
        res.status(200).json(storyData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like localhost:3001/api/stories/1
router.delete('/:id', async (req, res) => {
    try {
        // Delete the story where the story's id is req.params.id
        const storyData = Stories.destroy({ where: { id: req.params.id } });
        res.status(200).json(storyData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;