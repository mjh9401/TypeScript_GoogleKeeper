import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import { Container, EmptyMsgBox } from '../../styles/styles';
import { MainWraper } from '../../components';

const ArchiveNotes = () => {
  const {archiveNotes} = useAppSelector((state)=>state.notesList);
  console.log(archiveNotes.length)
  return (
    <Container>
      {archiveNotes.length === 0 ? 
        <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
        :
        <MainWraper notes={archiveNotes} type='archive'/>
      }
    </Container>
  )
}

export default ArchiveNotes