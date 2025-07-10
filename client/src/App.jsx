import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Articles from './pages/Articles'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import AddBlog from './pages/Admin/AddBlog'
import BlogList from './pages/Admin/BlogList'
import Comments from './pages/Admin/Comments'
import Login from './components/Admin/Login' 
import 'quill/dist/quill.snow.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/articles'element={<Articles/>}/>
        <Route path='/blog/:id'element={<Blog/>}/>
        <Route path='/admin' element={true ?  <Layout/> : <Login/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='addBlog' element={<AddBlog/>}/>
        <Route path='listBlog' element={<BlogList/>}/>
        <Route path='comments' element={<Comments/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App