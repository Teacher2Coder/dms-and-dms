// Call the router
const router = require("express").Router();
// Import the model
const Quests = require("../../../models/Quest");

// URL looks like this: localhost:3001/api/quests
router.post("/", async (req, res) => {
  try {
    // Create a new quest with the data from the req.body
    const questData = await Quests.create({
      name: req.body.nameInput,
      // Author is named after the active user
      author: req.session.user,
      description: req.body.descriptionInput,
      quest_giver: req.body.questGiverInput,
      location: req.body.locationInput,
      rewards: req.body.rewardsInput,
    });

    res.status(200).json(questData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// URL looks like this: localhost:3001/api/quests/1
router.put("/:id", async (req, res) => {
  try {
    // Update the quest with the data from the req.body
    const questData = await Quests.update(
      {
        name: req.body.nameInput,
        description: req.body.descriptionInput,
        quest_giver: req.body.questGiverInput,
        location: req.body.locationInput,
        rewards: req.body.rewardsInput,
      },
      {
        // Update the quest with the id that matches the req.params.id
        where: { id: req.params.id },
      }
    );
    res.status(200).json(questData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// URL looks like this: localhost:3001/api/quests/1
router.delete("/:id", async (req, res) => {
  try {
    // Delete the character where the quest's id is req.params.id
    const questData = Quests.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json(questData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
