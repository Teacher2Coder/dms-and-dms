const router = require('express').Router();
const Quests = require('../../../models/Quest');

// URL looks like this: localhost:3001/api/quests
router.post('/', async (req, res) => {
    try {
        // Create a new quest with the data from the req.body
        const questData = await Quests.create({
            name: req.body.nameInput,
            author: req.session.user,
            description: req.body.descriptionInput,
            quest_giver: req.body.questGiverInput,
            location: req.body.locationInput,
            rewards: req.body.rewardsInput
        });
        res.status(200).json(questData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost:3001/api/characters/1
router.put('/:id', async (req, res) => {
    try {
        // Update the quest with the data from the req.body
        const questData = await Quests.update({
            name: req.body.nameInput,
            description: req.body.descriptionInput,
            quest_giver: req.body.questGiverInput,
            location: req.body.locationInput,
            rewards: req.body.rewardsInput
        },
        {
            where: { id: req.params.id }
        });
        res.status(200).json(questData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost:3001/api/characters/1
router.delete('/:id', async (req, res) => {
    try {
        const questData = Quests.destroy({ where: { id: req.params.id } });
        res.status(200).json(questData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;