import React from 'react'
import { useParams } from 'react-router-dom'
import ApiDataByIdHook from '../../../hook/ApiDataByIdHook';
import CustomTopics  from '../../../components/common/CustomTopics';
import NotFoundPage from '../../error/index'
const Pagination = () => {
  const {id} = useParams()
  const {data,error} = ApiDataByIdHook("/storypagination", id)
  if(error){
    return NotFoundPage();
  }

  return (
    <div>
      <CustomTopics name={data?.name} desc ={data?.desc} image ={data?.image} header={data?.name}/>
    </div>
  )
}

export default Pagination