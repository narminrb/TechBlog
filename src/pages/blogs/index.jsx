import React from 'react'
import ApiDataHook from '../../hook/ApiDataHook'
import CustomCard from '../../components/common/CustomCard'
import CreateBlogContainer from '../../components/CreateBlogContainer'

const BlogsPage = () => {
  const {data,loading} = ApiDataHook("/blogs")
  if(loading){
    <div>salam</div>
  }
  return (
    <div className='container mx-auto my-10'>
      <CreateBlogContainer/>
      <div className='grid grid-cols-3 gap-4'>
      {
        data && data.map((blog,index) => <CustomCard key={index} image = {blog?.image}
        name = {blog?.name}
        desc = {blog?.desc}
        url = {`/blogs/${blog?.id}`}
        />)
      }
      </div>

    </div>
  )
}

export default BlogsPage