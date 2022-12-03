import React from 'react'

function AddTodo(props) {
    const {addAct,setAct}=props
  return (
    <div><input className=' flex flex-row border-2 border-rose-300  ' type='text' onChange={(e)=>setAct(e.target.value)}/> <br></br>
    <button className=' ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 flex items-start max-w-2xl ' onClick={addAct}>ADD</button> <br></br>
    </div>
  )
}

export default AddTodo