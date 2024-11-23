import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import { AppContainer, Header } from './styles';



const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addNote = (newNote) => setNotes([...notes, newNote]);

  const updateNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppContainer>
      <Header>Notes Application</Header>
      <SearchBar setSearchQuery={setSearchQuery} />
      <NoteForm addNote={addNote} />
      <NoteList notes={filteredNotes} updateNote={updateNote} deleteNote={deleteNote} />
    </AppContainer>
  );
};

export default App;
