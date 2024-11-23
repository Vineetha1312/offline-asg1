import React, { useState } from 'react';
import { Form, Input, Select, Button } from '../styles';

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState({ title: '', description: '', category: 'Work' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title || !note.description) {
      alert('Title and Description are required!');
      return;
    }
    addNote({ ...note, id: Date.now() });
    setNote({ title: '', description: '', category: 'Work' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        required
      />
      <Input
        type="text"
        placeholder="Description"
        value={note.description}
        onChange={(e) => setNote({ ...note, description: e.target.value })}
        required
      />
      <Select
        value={note.category}
        onChange={(e) => setNote({ ...note, category: e.target.value })}
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </Select>
      <Button type="submit">Add Note</Button>
    </Form>
  );
};

export default NoteForm;
