var express = require('express');
var router = express.Router();
const Note = require('../models/note');
const withAuth = require('../middlewares/auth');

router.post('/', withAuth, async (req, res) => {
    const { title, body } = req.body;

    console.log('Received POST request with title:', title); // Logging request receipt

    try {
        let note = new Note({ title: title, body: body, author: req.user._id });
        await note.save();
        console.log('Note saved successfully'); // Logging after note is saved
        res.status(200).json(note); // Ensure the response is sent back
    } catch (error) {
        console.error('Error saving note:', error); // Logging error
        res.status(500).json({ error: 'Problem to create a new note' });
    }
});

module.exports = router;