import { useEffect, useState } from "react";

export default function Counter() {
    const [count,setCount] = useState(0);
    const [name,setName]  = useState("tariq");

    const increment = ()=>{
      setCount(count+1);
    }

    const decrement = ()=>{
      setCount(count-1);
    }
   
     const changeName = ()=>{
        setName("rami");
       
     }
    function printHi(){
        console.log("counter updated");
    }
    const printNameUpdated=()=>{
        console.log("name is updated")
    }

    useEffect( ()=>{
        printHi();
    },[]) 


    useEffect( ()=>{
        printNameUpdated();
    },[name]) 

  
  return (
    <div>
    <h1>Counter : {count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>+</button>
    <h2>name is {name}</h2>
    <button onClick={changeName}>change name</button>
 </div>

  )
}
