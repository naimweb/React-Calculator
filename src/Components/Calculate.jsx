import React, { useState } from 'react'
import './App.css'

function Calcualte() {
    const [value,setState] = useState("")


    const calculate = () => {
  if (value.trim() === "") {
    setState("Error");
    return;
  }

  try {
    setState(eval(value).toString());
  } catch {
    setState("Error");
  }
};


   
   
  return (
    <div className='main-container'>
        <div className='calculator'>
            <form action="">
                <div className='display'>
                    <input type="text" value={value} />
                   
                </div>
                <div>
                   <input type="button" value="AC" onClick={()=>setState("")}/>
                   <input type="button" value="DEL"onClick={()=> setState(value.slice(0,-1))} />
                   <input type="button" value="." onClick={e =>setState(value+ e.target.value)}/>
                   <input type="button" value="/" onClick={e =>setState(value+  e.target.value)}/>
                </div>
                 <div>
                   <input type="button" value="7" onClick={e =>setState( value+ e.target.value)} />
                   <input type="button" value="8" onClick={e =>setState( value+ e.target.value)}/>
                   <input type="button" value="9" onClick={e =>setState( value+ e.target.value)}/>
                   <input type="button" value="*" onClick={e =>setState( value+ e.target.value)}/>
                </div>
                 <div>
                   <input type="button" value="4"onClick={e =>setState( value+ e.target.value)} />
                   <input type="button" value="5" onClick={e =>setState( value+ e.target.value)}/>
                   <input type="button" value="6" onClick={e =>setState(value+  e.target.value)}/>
                   <input type="button" value="-" onClick={e =>setState( value+ e.target.value)}/>
                </div>
                 <div>
                   <input type="button" value="1" onClick={e =>setState(value+  e.target.value)}/>
                   <input type="button" value="2" onClick={e =>setState( value+ value+ e.target.value)}/>
                   <input type="button" value="3" onClick={e =>setState(value+  e.target.value)}/>
                   <input type="button" value="+" onClick={e =>setState(value+  e.target.value)}/>
                </div>
                 <div>
                   <input type="button" value="00" onClick={e =>setState( value + e.target.value)}/>
                   <input type="button" value="0" onClick={e =>setState(value+  e.target.value)}/>
                   <input className="equal" type="button" value="=" onClick={calculate}/>
                 
                </div>
            </form>

        </div>


    </div>
  )
}

export default Calcualte;