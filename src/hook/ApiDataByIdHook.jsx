import { useEffect,useState} from 'react'
import { getCardsById } from '../http/api';

const ApiDataByIdHook = (url,id) => {
    const [data, setData] = useState(null);
    const [loading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

  useEffect(() => {
      getCardsById(url, id, (data) => {
        setData(data)
        setIsLoading(false)
      })
        .catch((err) => {
        setError(err)
        setIsLoading(false)
      }).finally(() => {
        setIsLoading(false)
      })

  },[url,id])

  return {data,error,loading}
 
}

export default ApiDataByIdHook