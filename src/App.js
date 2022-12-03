import React, {useState} from 'react'
import './App.css'
import AddTodo from './AddTodo'
function App(){
  const [act,setAct] = useState()
  const [list,setList] = useState([])
  console.log(act)
  const [i,setI] = useState(0)
function addAct() {

  var name={index:i,n:act}
 setI(i+1);
  setList([...list,name])
  console.log(list)
}


const del = (index)=>{
console.log(index)
setList(list.filter((kg) => kg.index !== index));
}
    return(
      <div className=' box-border h-50 w-100 p-20  border-4 bg-gradient-to-r from-cyan-500 to-blue-500 backdrop-blur-md bg-white/30  block justify-center brightness-120'>
        <center>
        <h1 className='font-mono text-5xl font-bold no-underline hover:italic '>TODO APP</h1> <br></br>
        <AddTodo addAct={addAct} setAct={setAct}/>
        {list.map(function(kg){
            return <div className='flex justify-center box-border border-2 border-indigo-600 mb-[5px]'>
            <h1>{kg.n}</h1> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>del(kg.index)}>DELETE</button></div>
            
        })}
        </center>
        </div>
    )
}
export default App