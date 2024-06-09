import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import {v4} from 'uuid'

const initialState = {
    tagsList :[
        {tag:"coding", id: v4()},
        {tag:"exercise", id: v4()},
        {tag:"quotes", id: v4()},
    ]
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTags:(state,{payload})=>{
      if(state.tagsList.find(({tag})=>tag === payload.tag)){
        toast.warning('이미 존재하는 태그입니다.');
      }else{
        state.tagsList.push(payload); // 불변성을 안지키는 이유 => immer 모듈 때문
        toast.info('새로운 태그가 등록되었습니다.');
      }
    },
    deletetTags:(state,{payload})=>{
      state.tagsList = state.tagsList.filter(({id})=> id !== payload);
      toast.info('태그가 삭제되었습니다.');
    },
  }
});

export const {addTags,deletetTags} = tagsSlice.actions

export default tagsSlice.reducer