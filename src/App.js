import React, {useState} from 'react'
import './App.css'
import AddTodo from './AddTodo'
import Greeting from './Greeting'
import { Trash , PencilSquare} from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

function App(){
  const [act,setAct] = useState()
  const [list,setList] = useState([])
  const [btn,setBtn] = useState(false)
  const [isEdit,setIsEdit] = useState(false)
  // console.log(act) 
  const [i,setI] = useState(0)


  // const [addEdit,setAddedit] = useState(false)
  
function addAct() {
  if(isEdit){
    editTodo()
  }
  else{
 var name={index:i,n:act}
 console.log(`name ${name}`)
 setI(i+1);
 console.log(i)
 setList([...list,name])
//  console.log(list)
console.log(list)
  }
  setAct("")
  
}
function edit(index,name){
  setI(index)
  setAct(name)
  setIsEdit(true)
 
}

function editTodo(){
  var tempList=list
  // console.log(tempList)
tempList.forEach(element => {
  
  if(element.index === i){
    console.log(element)
    // console.log()
    element.n=act
  }
});
setList([...tempList])
setIsEdit(false)


}
const del = (index)=>{
console.log(index)
setList(list.filter((kg) => kg.index !== index));
}
    return(
      <div className=' relative flex items-center 
      justify-center bg-[#FBC7D4] opacity-100 min-h-screen'>
        <center>
          
        <div className='box-content h-50 w-50 p-8 border-1 opacity-100 '> 
        <motion.div
  initial={{ y: "-1000px", opacity: 0 }}
  animate={{ y: 0, opacity: 10 }}
  transition={{type:"spring"}}
  // exit={{ y: '-1000px', opacity: 0 }}
>
   <h1 className=' text-white font-mono text-2xl uppercase text text-indigo-600  font-extrabold font-Audiowide'><Greeting/> </h1><br></br>
</motion.div>
<motion.div
  initial={{ x: "-1000px", opacity: 0 }}
  animate={{ x: 0, opacity: 10 }}
  transition={{delay:1}}
  // exit={{ y: '-1000px', opacity: 0 }}
>
        <h1 className='font-Rampart text-5xl font-bold no-underline hover:italic '>TODO APP</h1> <br></br>
        </motion.div>
        {(btn)?
        <AddTodo addAct={addAct} act={act} setAct={setAct} setBtn={setBtn} isEdit={isEdit}/> :<button className='bg-blue-500 px-1 py-1 rounded full transition duration-300 delay-150 md:delay-300 text-white text-3x font-bold' onClick={()=>setBtn(true)}>ADD TODO</button>
      }
        <br></br>
        {
        (btn)?
        list.map(function(kg){
            return <div className='flex  box-border border-2 border-white-600 mb-[5px] px-2 py-2 bg-[#9796F0]'> 
            <h1>{kg.n}</h1> <div className='ml-auto flex'> <Trash size={30} className=''color="red" onClick={()=>del(kg.index)}/><PencilSquare color='green' size={30} className='' onClick={()=>edit(kg.index,kg.n)} /></div>
            
            
            </div> 

         
        })
        :
        ""
      
      }
        </div>
        </center>

        </div>
    )
}

export default App