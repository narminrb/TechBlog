import React from 'react'

const Counter = ({Increment,Decrement,count}) => {
  //const [count, setCount] = useState(0)

  // const Increment = () =>{
  //   setCount((prev) => prev + 1)
  // }
  // const Decrement = () =>{
  //   if(count > 0){
  //     setCount((prev) => prev - 1)
  //   }
  // }
  return (
    <div className='bg-slate-100 mx-auto max-w-md rounded-lg shadow-lg text-center p-4 my-10'>
       <button className= "p-4" onClick={Decrement}>Decrement</button>
      {count}
      <button className= "p-4" onClick={Increment}>Increment</button>
    </div>
  )
}

export default Counter