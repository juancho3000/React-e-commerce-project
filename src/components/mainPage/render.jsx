import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const RenderPage = () => {

   const [loading, setLoading] = useState(true);
   const [elementos, setElementos] = useState([]);

   useEffect(() => {
    setTimeout(() => {
        setElementos(["a","b","c"])
        setLoading(false)
    }, 5000);
   }, [])

   if(loading){
    return <AiOutlineLoading3Quarters className="loading-icon"/>
   }

    return(
        <div>
            <h2>elemntos</h2>
            <ul>
                {elementos.map((e) => ( 
            <li key={e}>{e}</li>
            ))}
            </ul>

        </div>
    )
}
export default RenderPage;