import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import { Container, EmptyMsgBox } from '../../styles/styles';
import { MainWraper } from '../../components';

const TrashNote = () => {
  const {trashNotes} = useAppSelector((state)=>state.notesList);


  return (
    <Container>
      {trashNotes.length === 0 ?(
        <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
      ):(
        <MainWraper notes={trashNotes} type='trash'/>
      )}
    </Container>
  )
}

export default TrashNote