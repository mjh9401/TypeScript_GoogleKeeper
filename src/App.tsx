import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { NavBar, SideBar } from './layout'
import AllNote from './pages/AllNotes/AllNote'
import ArchiveNotes from './pages/ArchiveNotes/ArchiveNotes'
import { ErrorPage, TagNotes, TrashNotes } from './pages'
import { CreateNoteModal, TagsModal } from './components'
import { useAppSelector } from './hooks/redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const {viewEditTagsModal, viewCreateNoteModal} = useAppSelector(state=>state.modal);

  return (
    <div className='app'>
      {viewEditTagsModal&&<TagsModal type='edit'/>}
      {viewCreateNoteModal&&<CreateNoteModal/>}
      
      <ToastContainer
        position='bottom-right'
        theme='light'
        pauseOnHover
        autoClose={1500}
        />
      <BrowserRouter>
        <SideBar/>
        <div className='app_container'>
          <NavBar/>
          <Routes>
            <Route path='/' element={<AllNote/>}/>
            <Route path='/archive' element={<ArchiveNotes/>}/>
            <Route path='/trash' element={<TrashNotes/>}/>
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
