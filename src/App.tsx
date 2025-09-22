import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './page/Homepage/page'
import TopNavigate from './Navigate/Menu'
import DetailOfMovie from './page/Homepage/Movie/[id]'

function App() {
  return (
    <div>
      <TopNavigate></TopNavigate>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/movie/:id' element={<DetailOfMovie/>}></Route>
        </Routes>
      </BrowserRouter>



      
    </div>
  )
}

export default App
