

const ReactElement2 = ()=>{
    //Features of JSX element
    //1.Embedding 'Expression or Variable' in JSX element
    const name = "Suresh Reddy";
    //const num = 123456;
    //const bool = `false`;
    //let undef;
    //let nul = 'null';
    //const bigint = 534322134565343324;

    const element = <h1>Hello {name}</h1>
     return element;

    //  return <div>
    //         <h1 style={{color:"green"}}> Hello {name}</h1>
    //         <h2 style={{color:"blue"}}>  {num}</h2>
    //         <h3 style={{color:"brown"}}>  {bool}</h3>
    //         /* We can't print undefined  */
    //         <h1 style={{color:"green"}}> {undef}</h1> 
    //         <h2 style={{color:"green"}}> {nul}</h2>
    //         <h3 style={{color:"green"}}>  {bigint}</h3>
    //       </div> 
          
}

export default ReactElement2;