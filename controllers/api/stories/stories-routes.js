const router = require('express').Router();
const Stories = require('../../../models/Stories');

// URL looks like this: localhost.3001/api/characters
router.post('/', async (req, res) => {
    try {
        // Create a new character with the data from the req.body
        const storyData = await Stories.create({
            name: req.body.nameInput,
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

router.put('/:id', async (req, res) => {
    try {
        const storyData = await Stories.update({
            name: req.body.nameInput,
            description: req.body.descriptionInput,
            world: req.body.worldInput,
            main_villain: req.body.villainInput,
            potential_factions: req.body.factionsInput,
            levels: req.body.levelInput
        },
        {
            where: { id: req.params.id }
        });
        res.status(200).json(storyData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const storyData = Stories.destroy({ where: { id: req.params.id } });
        res.status(200).json(storyData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;