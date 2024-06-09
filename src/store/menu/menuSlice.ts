import { createSlice } from '@reduxjs/toolkit'

interface MenuState{
    isOpen : boolean;
}

const initialState = {
    isOpen : false,
}

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {}
});

export const {} = menuSlice.actions

export default menuSlice.reducer