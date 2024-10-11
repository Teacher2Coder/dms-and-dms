const router = require('express').Router();
const Comment = require('../../../models/Comment');

// URL looks like this: localhost:3001/api/comments
router.post('/', async (req, res) => {
    try {
        // Create a new comment with the data from the req.body
        const commentData = await Comment.create({
            // Author is named after the active user
            author: req.session.user,
            content: req.body.content,
            for: req.body.dataFor,
            category_id: req.body.primaryKey
        });
        res.status(200).json(commentData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;