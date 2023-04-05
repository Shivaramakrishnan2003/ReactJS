import React, {createContext} from 'react'
import { useState } from 'react'

const Name = createContext()

function RegnForm() {
  const [form,setForm]=useState([{name:"",email:"",phone:"",pass:"",tra:"",ret:"",dest:"",res:""}])
  // const [email,setEmail]=useState("")
  // const [phone,setPhone]=useState("")
  // const [pass,setPass]=useState("")
  // const [tra,setTra]=useState("")
  // const [ret,setRet]=useState("")
  // const [dest,setDest]=useState("")
  // const [res,setRes]=useState("")
  return (
    <div>
      <Name.Provider value={form}>
      <center>
        <h1>Registration Form</h1>
      </center>
      <form onSubmit={(event)=>event.preventDefault()}>
        <label>Name : </label>
        <input type='text' value={form.name} onChange={(a)=>setForm.name({...form, [a.target.name]:a.target.value})} required/><br/><br/>
        <label>Email : </label>
        <input type='email' value={form.email} onChange={(a)=>setForm.email({...form, [a.target.email]:a.target.value})} required/><br/><br/>
        <label>Phone : </label>
        <input type='number' value={form.phone} onChange={(a)=>setForm.phone({...form, [a.target.phone]:a.target.value})} required/><br/><br/>
        <label>Passport : </label>
        <input type='text' value={form.pass} onChange={(a)=>setForm.pass({...form, [a.target.pass]:a.target.value})} required/><br/><br/>
        <label>Travel Date : </label>
        <input type='date' value={form.tra} onChange={(a)=>setForm.tra({...form, [a.target.tra]:a.target.value})} required/><br/><br/>
        <label>Return Date : </label>
        <input type='date' value={form.ret} onChange={(a)=>setForm.ret({...form, [a.target.ret]:a.target.value})} required/><br/><br/>
        <label>Destination : </label>
        <input type='text' value={form.dest} onChange={(a)=>setForm.dest({...form, [a.target.dest]:a.target.value})} required/><br/><br/>
        <label>Reason for travel : </label>
        <input type='text' value={form.res} onChange={(a)=>setForm.r({...form, [a.target.r]:a.target.value})} required/><br/><br/>
        <input type='submit'/>
      </form>
      </Name.Provider>
    </div>
  )
}

export default RegnForm