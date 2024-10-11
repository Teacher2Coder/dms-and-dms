const router = require('express').Router();
const Characters = require('../../../models/Characters');

// URL looks like this: localhost.3001/api/characters
router.post('/', async (req, res) => {
    try {
        // Create a new character with the data from the req.body
        const characterData = await Characters.create({
            name: req.body.nameInput,
            description: req.body.descriptionInput,
            class: req.body.classInput,
            skills: req.body.skillInput,
            race: req.body.raceInput,
            alignment: req.body.alignmentInput,
            strength: req.body.strengthInput,
            dexterity: req.body.dexterityInput,
            constitution: req.body.constitutionInput,
            intelligence: req.body.intelligenceInput,
            wisdom: req.body.wisdomInput,
            charisma: req.body.charismaInput
        });
        res.status(200).json(characterData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const characterData = await Characters.update({
            name: req.body.nameInput,
            author: req.session.user,
            description: req.body.descriptionInput,
            class: req.body.classInput,
            skills: req.body.skillInput,
            race: req.body.raceInput,
            alignment: req.body.alignmentInput,
            strength: req.body.strengthInput,
            dexterity: req.body.dexterityInput,
            constitution: req.body.constitutionInput,
            intelligence: req.body.intelligenceInput,
            wisdom: req.body.wisdomInput,
            charisma: req.body.charismaInput
        },
        {
            where: { id: req.params.id }
        });
        res.status(200).json(characterData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const characterData = Characters.destroy({ where: { id: req.params.id } });
        res.status(200).json(characterData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;