import { createSlice } from '@reduxjs/toolkit'
import { Note } from '../../types/note';
import note from '../../noteData';

interface NoteState {
    mainNotes : Note[];
    archiveNotes: Note[];
    trashNotes : Note[];
    editNote : null | Note[]
}

const initialState : NoteState = {
    mainNotes : [...note],
    archiveNotes: [],
    trashNotes : [],
    editNote : null
}

const notesListSlice = createSlice({
  name: 'notesList',
  initialState,
  reducers: {
    removeTags : (state,{payload})=>{
      state.mainNotes = state.mainNotes.map((note)=>({
          ...note,
          tags : note.tags.filter(({tag})=>tag !== payload.tag)
      }))
    },
  }
});

export const {removeTags} = notesListSlice.actions

export default notesListSlice.reducer