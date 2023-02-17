import React from 'react'

import { XLg } from 'react-bootstrap-icons'

function AddTodo(props) {
    const {addAct,setAct,setBtn,isEdit,act}=props
    // console.log(act)
  return (
    <div className='border-solid border-2 p-[20px] shadow-lg shadow-indigo-500/50 bg-cyan-200'><XLg className=' ml-auto mb-[40px]' onClick={()=>setBtn(false)}/>
    <div className='flex   '>  
    
    <input className='  border-1 ' type='text' onChange={(e)=>setAct(e.target.value)} value={act}/> 
    <button className=' bg-indigo-500 hover:bg-blue-600 text-white font-bold  border border-blue-700 rounded px-1 py-1 w-20 hover:shadow-lg hover:shadow-indigo-500/50' onClick={addAct}>{(isEdit)? 'Edit' : 'Add'}</button> <br></br><br></br>
    </div></div>
  )
}

export default AddTodo