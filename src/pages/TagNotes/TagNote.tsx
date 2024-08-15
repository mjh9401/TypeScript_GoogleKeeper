import React from 'react'
import { useParams } from 'react-router'
import { useAppSelector } from '../../hooks/redux'
import Note from '../../types/note'
import { Container, EmptyMsgBox } from '../../styles/styles'
import { MainWraper } from '../../components'

const TagNote = () => {
  const {name} = useParams() as {name : string};
  const {mainNotes} = useAppSelector((state)=>state.notesList);

  let notes : Note[] = [];
  mainNotes.forEach((note)=>{
    if(note.tags.find(({tag})=>tag ===name)){
      notes.push(note);
    }
  })


  return (
    <Container>
      {notes.length ===0 ? (
        <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
      ):(
        <MainWraper notes={notes} type={name}/>
      )}
    </Container>
  )
}

export default TagNote