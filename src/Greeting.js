  
import React from 'react';
//  import ReactDOM from "react-dom";

 function Greeting(){

let curDate =  new Date();
curDate=curDate.getHours();
console.log(curDate);
let Greeting='';

if(curDate >= 1 && curDate < 12)
{
  Greeting = 'Good Morning';
} else if(curDate>=12 && curDate < 19) {
  Greeting='Good Afternoon';
}else{
  Greeting='Good Evening';
}




  return (
     <h1>{ Greeting }</h1>
    // document.getElementById("root")
  );}


//  function Greeting() {
//  var hour=1;
//     return (
//       <div className='App'>
//       <h2>{hour < 12 ? "Good Morning" : "Good evening"} </h2>
//     </div>
//     )
//   }


  export default Greeting

  
  

// // //   <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
// // //      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
// // //         <div id='root'></div>