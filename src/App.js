import React from 'react'
import Layout from './layout'
import {Routes,Route } from 'react-router-dom'
import HomePage from './pages/home'
import NotFoundPage from './pages/error'
import {useLocation} from "react-router-dom"
import AboutPage from './pages/about'
import BlogsPage from './pages/blogs'
import ContactPage from './pages/contact'
import BlogsDetailPage from './pages/blogsDetail'
import Pagination from './pages/blogsDetail/Pagination'
const App = () => {
  const location = useLocation();
  const publicPath = ["/","/about","/contact","/blogs"];
  return (
       <>
         <Layout>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/gadget/:id" element={<Pagination />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/blogs" element={<BlogsPage/>}/>
        <Route path="/blogs/:id" element={<BlogsDetailPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
        </Layout>
       

       
       </>
  )
}

export default App