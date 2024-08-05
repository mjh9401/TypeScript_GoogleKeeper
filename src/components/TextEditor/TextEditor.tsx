import React, { useState } from 'react'
import { Container } from './TextEditor.styles'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
interface TextEditorPrps{
  value:string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  color: string,
}

/**
 * 텍스트 에디터
 * @param TextEditorPrps 
 * @returns 
 */
const TextEditor = ({color,value,setValue}:TextEditorPrps) => {
  
  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
  
    "color",
    "background",
  
    "image",
    "blockquote",
    "code-block",
  ];
  
  const modules = {
    toolbar: [
      [{ list: "ordered" }, { list: "bullet" }],
      [],
      ["italic", "underline", "strike"],
      [],
      [{ color: [] }, { background: [] }],
      [],
      ["image", "blockquote", "code-block"],
    ],
  };

  return (
    <Container noteColor={color}>
      <ReactQuill 
        formats={formats}
        modules={modules}
        theme='snow' 
        value={value} 
        onChange={setValue}/>
    </Container>
  )
}

export default TextEditor