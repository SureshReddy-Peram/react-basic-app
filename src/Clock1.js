import { useEffect, useState } from "react";


const Clock1 = ()=>{
    
           const [date, setDate] = useState(new Date());

    
            useEffect( ()=> {
                const timerId = setInterval(()=>{
                    setDate(new Date());
                    return function cleanup(){
                        clearInterval(timerId);
                    }
                   }, 1000);
            }, []);
                       
                    
    return <div>
           <h1> {date.toLocaleString()}</h1>
           </div>
}
export default Clock1;