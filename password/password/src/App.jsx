import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const errorlist = {
    caps: "Password should include atleast one and atmost five Capital letter",
    nums: "Password should include atleast one and atmost four numbers",
    specialchars: "Password should include atleast one and atmost three special characters",
    repetition: "Entered the previous password. Please make a change in the Password"
  }
  const [input, setinputt] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [registerd, setregistered] = useState("")
  // const [error , seterror] = useState('')

  function error(given) {
    return (
      <div>
        {errorlist.given}
      </div>
    )
  }

  function clickhandler() {
    if (input.email === '' || input.name === '') {
      return
    }
    else if (localStorage.getItem(input.email) === null) {
      localStorage.setItem(input.email, input.password)
      setregistered("newly registered")
    }
    else if (localStorage.getItem(input.email) === '') {
      localStorage.setItem(input.email, input.password)
      return
    }
    else {
      setregistered("previosly registered")
      if (localStorage.getItem(input.email) === e.target.value) {
        error(repetition)
      }
      return
    }
  }
  function gotInput(e) {
    setinputt({ ...input, [e.target.name]: e.target.value })
  }
  return (
    <div className='bg-yellow-100'>
      {registerd === '' && (
        <form className='flex flex-col items-center'>


          <div className='flex p-[2.5%] text-center  gap-4 '>
            <div>Name</div>
            <input onInput={gotInput} type="text" name="name" placeholder='Enter your name' className='bg-pink-100' minLength={3} />
          </div>


          <div className='flex p-[2.5%] text-center justify-center gap-4 '>
            <div className='p-[1%]'>Email Id</div>
            <input className='bg-pink-200 p-[1%]' name='email' type="email" onInput={gotInput} placeholder='Enter your email' />
          </div>

          <button className='text-center bg-red-900 text-white p-[1%] m-[1%]' type='submit' name='button1' onClick={clickhandler}>Next</button>
        </form>
      )}
      {registerd === "newly registered" ?
        (<div className='flex flex-col items-center'>
          <div className='flex p-[2.5%] text-center justify-center gap-4 '>
            <div className='p-[1%]'>Create Password</div>
            <input className='bg-pink-200 p-[1%]' name='password' type="password" onInput={gotInput} placeholder='Enter your password' maxLength={10} minLength={5} />
          </div>

          <button className='text-center bg-red-900 text-white p-[1%] m-[1%] w-fit ' type='submit' name='button2' onClick={clickhandler}>Submit</button>

        </div>)

        :

        registerd === "previosly registered" &&



        (<div className='items-center flex flex-col'>
          <div className='flex p-[2.5%] text-center justify-center gap-4 '>
            <div className='p-[1%]'>old password</div>
            <input className='bg-pink-200 p-[1%]' type="text" onInput={input} placeholder='enter your old password' />
          </div>

          <div className='flex p-[2.5%] text-center justify-center gap-4 '>
            <div className='p-[1%]'>new password</div>
            <input className='bg-pink-200 p-[1%]' type="text" onInput={input} placeholder='enter your new password' />
          </div>

          <button className='text-center bg-red-900 text-white p-[1%] m-[1%] w-fit ' type='submit' name='button2' onClick={clickhandler}>Submit</button>
        </div>)
      }

    </div>
  )
}

export default App
