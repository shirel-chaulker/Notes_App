const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || 'http://localhost:3000' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const NOTES_FILE = path.join(__dirname, 'notes.json');

function readNotes() {
  try {
    const data = fs.readFileSync(NOTES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeNotes(notes) {
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
}

app.get('/api/notes', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  if (!req.body || typeof req.body.text !== 'string') {
    return res.status(400).json({ error: 'Missing text in body' });
  }

  const notes = readNotes();
  const newNote = { id: Date.now(), text: req.body.text };
  notes.push(newNote);
  writeNotes(notes);
  res.status(201).json(newNote);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));