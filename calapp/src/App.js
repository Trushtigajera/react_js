// import logo from './logo.svg';
import React, { useState } from 'react'      
function App() {        
    let[val1, setval1] = useState()      
    let[val2, setval2] = useState()      

    let[ans,getans]=useState("")

    const calsum=()=>{
      getans(parseInt(val1)+parseInt(val2));
    }
    const calsub=()=>{
        getans(parseInt(val1)-parseInt(val2));
    }
    const calmul=()=>{
        getans(parseInt(val1)*parseInt(val2));
    }
    const caldiv=()=>{
        getans(parseInt(val1)/parseInt(val2));
    }
    return (      
        <div>  
            Value 1=   
            <input type="text" onChange={(e) => {setval1(e.target.value )}} /> 
            Value 2=     
            <input type="text" onChange={(e) => {setval2(e.target.value )}} />     

            ans=
            <input type='text' value={ans}/>
            <input type='button' value={'sum'} onClick={calsum}/>  
            <input type='button' value={'sub'} onClick={calsub}/>  
            <input type='button' value={'mul'} onClick={calmul}/>  
            <input type='button' value={'div'} onClick={caldiv}/>  
        </div>      
    )      
}      
export default App;