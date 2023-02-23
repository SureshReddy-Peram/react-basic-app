import  "./ReactElement5.css";

const ReactElement5 = ()=>{

    const name = "Suresh Reddy";
    //4.We can use image tag as JSX element
    const userImage = "/logo192.png";
    const image = <img src={userImage} alt="logo"  style={{backgroundColor: "yellow"}}></img> ;

    //5.JSX element(<div>, <section>, <></>, etc) can have Child elements
    return <div className="sample">
            <h1 style={{color:"blue", backgroundColor:"burlywood" }}>Hello {name}</h1>
            <p style={{fontSize:"40px", fontStyle:"italic"}}>Good to see you.</p> 
            {image}  
           </div>
}
export default ReactElement5;