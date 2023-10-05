import {  useState } from "react";
import { Navigate } from "react-router-dom";

export const MainPage = () => {
    const [goToPage, setGoToPage] = useState(false)
    if(goToPage) {
        return <Navigate to = "/Products-compra"/>
    }
    return(
        <section id="main-sec">
         <div id="main-page-div">
            
            <h3>revisa los productos</h3>
            <button onClick={() => {setGoToPage(true)}}>click here</button>
            
         </div>
        </section>
    )
}
export default MainPage;