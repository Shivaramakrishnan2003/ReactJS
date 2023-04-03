import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

function Form() {
    const [n, setn] = React.useState('');
    // const fruit = document.getElementById('de/mo-simple-select-label').value
    // const handleChange = (eve) => {
    //   setf(eve.target.value)
    //   console.log(eve.target.value)
    // };
    const sub=(event)=>{
    setn(event.target.value)
    console.log(event.target.value)
  }
  const show=(event)=>{
    document.write('Hello '+event.target.value+'!Your favourite fruit is ')
    
  }
  const fruits = [
    { label: 'Apple'},
    { label: 'Banana'},
    { label: 'Cherry'},
    { label: 'Durian'},
    { label: 'Elderberry'}]
  return (
    <div style={{borderStyle:"Solid", borderColor:"blue", margin:"2%"}}>
        <h1>Enter your name and favourite Fruit</h1>
        <TextField type={"text"} id="outlined-basic" label="Name" variant="outlined" onChange={sub}/>
        <Autocomplete
        style={{textAlign:"center"}}
      disablePortal
      id="combo-box-demo"
      // onChange={handleChange}
      options={fruits}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    <Button variant="contained" onClick={show} value={n}>Submit</Button>
    </div>
  )
}

export default Form