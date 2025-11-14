import {Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './page/Homepage/page'
import TopNavigate from './Navigate/Menu'
import DetailOfMovie from './page/Movie/Detail'
import LoginPage from './page/Login/LoginPage'
import OTP from './page/Login/OTP'
import ListMovie from './page/Movie/ListMovie'
import ListTV_Show from './page/TV_show/ListTV_Show'
import DetailTvShow from './page/TV_show/Detail'

function App() {
  return (
    <div className='h-auto'>
        <TopNavigate></TopNavigate>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/danh_sach_phim/movie' element={<ListMovie/>}></Route>
          <Route path='/danh_sach_phim/tv' element={<ListTV_Show/>}></Route>
          <Route path='/movie/:id' element={<DetailOfMovie/>}></Route>
          <Route path='/tv/:id' element={<DetailTvShow/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/login/auth' element={<OTP/>}></Route>
        </Routes>
    </div>
  )
}

export default App
