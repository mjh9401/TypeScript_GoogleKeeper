import { createSlice } from '@reduxjs/toolkit'
import {v4} from 'uuid'

const initialState = {
    tagsList :[
        {tag:"learnings", id: v4()},
        {tag:"work", id: v4()},
        {tag:"quotes", id: v4()},
    ]
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {}
});

export const {} = tagsSlice.actions

export default tagsSlice.reducer