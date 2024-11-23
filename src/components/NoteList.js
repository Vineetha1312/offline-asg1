import React from 'react';
import { NoteCard, NoteActions, NoteContainer } from '../styles';

const NoteList = ({ notes, updateNote, deleteNote }) => {
  const handleEdit = (note) => {
    const title = prompt('Edit Title:', note.title);
    const description = prompt('Edit Description:', note.description);
    const category = prompt('Edit Category:', note.category);
    if (title && description && category) {
      updateNote({ ...note, title, description, category });
    }
  };

  return (
    <NoteContainer>
      {notes.map((note) => (
        <NoteCard key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <span>Category: {note.category}</span>
          <NoteActions>
            <button onClick={() => handleEdit(note)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </NoteActions>
        </NoteCard>
      ))}
    </NoteContainer>
  );
};

export default NoteList;
