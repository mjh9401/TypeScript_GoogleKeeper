import React from 'react'
import Note from '../../types/note'
import { NotesContainer } from '../../styles/styles';
import NoteCard from '../NoteCard/NoteCard';

interface MainWraperProps{
  notes: Note[];
  type: string;
}

const MainWraper = ({notes,type}:MainWraperProps) => {
  return (
    <NotesContainer>
      {notes.map((note)=>
        <NoteCard key={note.id} note={note} type={type}/>
      )}
    </NotesContainer>
  )
}

export default MainWraper