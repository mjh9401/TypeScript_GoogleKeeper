import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { SideBar } from './layout'
import AllNote from './pages/AllNotes/AllNote'
import ArchiveNotes from './pages/ArchiveNotes/ArchiveNotes'
import { ErrorPage, TagNotes, TrashNotes } from './pages'

function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
        <SideBar/>
        <div className='app_container'>
          <Routes>
            <Route path='/' element={<AllNote/>}/>
            <Route path='/archive' element={<ArchiveNotes/>}/>
            <Route path='/trasch' element={<TrashNotes/>}/>
            <Route path='/tag/:name' element={<TagNotes/>}/>
            <Route path='/404' element={<ErrorPage/>}/>
            <Route path='/*' element={<Navigate to={"/404"}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
