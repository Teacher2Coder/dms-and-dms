// Call the router
const router = require("express").Router();

// Import the models
const Story = require("../models/Stories");
const Comments = require("../models/Comment");

// Import the authentication helper
const withAuth = require("../utils/auth");

// URL looks like localhost:3001/stories
router.get("/", async (req, res) => {
  try {
    // Get all the stories from all users in reverse order
    const storiesData = await Story.findAll({
      order: [["id", "DESC"]],
    });

    // Make the data plain
    const storiesDataPlain = storiesData.map((story) =>
      story.get({ plain: true })
    );

    // Render stories.handlebars and pass in these variables
    res.render("stories", {
      storiesDataPlain,
      loggedIn: req.session.loggedIn,
      user: req.session.user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// URL looks like localhost:3001/stories/1
router.get("/:id", withAuth, async (req, res) => {
  try {
    // Get the single story data
    const singleStoryData = await Story.findByPk(req.params.id);

    // Find the comments on this particular story
    const commentData = await Comments.findAll({
      where: { for: "stories", category_id: req.params.id },
    });

    // Make the data plain
    const story = singleStoryData.get({ plain: true });
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    // Determine if the user can edit the story
    const canEdit = req.session.user == story.author;

    // Render single-story.handlebars and pass in these variables
    res.render("single-story", {
      story,
      comments,
      loggedIn: req.session.loggedIn,
      user: req.session.user,
      canEdit,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
