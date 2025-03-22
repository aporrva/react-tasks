import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Data, setData] = useState(null)
  const [limit, setlimit] = useState(1)
  const [skip, setskip] = useState(1)
  const [skipvalue, setskipvalue] = useState(0)
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`).then((res) => res.json()).then((data) => setData(data))
  }, [skip])
  console.log(Data)
  return (
    <div className='flex flex-col items-center p-[10%] '>
      <div className='p-[5%] flex flex-col gap-2  bg-yellow-100 w-full m-[5%] text-center'>
        {Data?.products.map((ele) =>
          <div className='bg-pink-200'>
            <div key={ele.id}>
              Product Name: {ele.title}
            </div>
            <div key={ele.id}>
              Price: {ele.price} Rs.
            </div>
          </div>
        )}
      </div>
      <div className='flex gap-4  m-[2.5%] text-center'>
        <div className='bg-purple-800 w-fit text-white p-[2%]'>Number of Product u want:</div>
        <input className='bg-red-800 text-white w-fit text-center' value={limit} type="number" onInput={(e) => {
          e.target.value <= 10 && e.target.value >= 1 && setlimit(e.target.value)
        }} />
      </div>
      <div className='flex gap-4  m-[2.5%] text-center'>
        <div className='bg-purple-800 w-fit text-white p-[2%]'> Number of Products to skip:</div>
        <input className='bg-red-800 text-white w-fit text-center' value={skipvalue} type="number" onInput={(e) => {
          e.target.value <= 10 && e.target.value >= 1 && setskipvalue(e.target.value)
        }} />
      </div>
      <div className='flex gap-4 text-white'>
        <button className='bg-green-800 p-[10%]' onClick={() => {
          Data.total - skip > limit && setskip(skip + parseInt(skipvalue))
          console.log(skip)
        }}> Next </button>
        <button className='bg-blue-800 p-[10%]' onClick={() => {
          skip > 1 && setskip(skip - parseInt(skipvalue))
          console.log(skip)
        }}>Previous</button>
      </div>
    </div>
  )
}
export default App
