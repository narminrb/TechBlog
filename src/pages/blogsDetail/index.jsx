import React from 'react'
import { useParams } from 'react-router-dom'
import ApiDataByIdHook from '../../hook/ApiDataByIdHook';
import BlogDetailContainer from '../../components/BlogDetailContainer';
import NotFoundPage from '../error/index'
const BlogsDetailPage = () => {
  const {id} = useParams()
  const {data,error} = ApiDataByIdHook("/blogs", id)
  if(error){
    return NotFoundPage();
  }

  return (
    <div>
      <BlogDetailContainer  name={data?.name}desc ={data?.desc} image ={data?.image} header={data?.name}/>
    </div>
  )
}

export default BlogsDetailPage