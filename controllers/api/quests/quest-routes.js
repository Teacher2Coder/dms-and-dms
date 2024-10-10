const router = require('express').Router();
const Quests = require('../../../models/Quest');

// URL looks like this: localhost.3001/api/characters
router.post('/', async (req, res) => {
    try {
        // Create a new character with the data from the req.body
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

router.put('/:id')

router.delete('/:id')

module.exports = router;