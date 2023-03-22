import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    try{
      let colors = new Values(color).all(40);
      setList(colors);
    }
    catch(err){
      setError(err);
    }
  }
  const handleChange = (e)=>{
    setColor(e.target.value);
  }
  return (<>
    <section className='container'>
      <h3>Color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} onChange={handleChange} placeholder="#ff88ff" className={error ? "error" : null} />
        <button className='btn' type='submit'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color,index) =>{
        console.log(color);
        return <SingleColor key={index} {...color}/>
      })}
    </section>
  </>)
}

export default App
