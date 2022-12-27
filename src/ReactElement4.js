

const ReactElement4 = ()=>{
    
    function formatName(userName) {
        return userName.toUpperCase();
    }
    //3.We can use JSX element as 'Expression' too. We can use JSX element in if-else statement or for loop
    //and also assign it as argument in function and also return it in functions.
    //If we give 'sudeep reddy' as argument for getGreeting() function, then 'if' statement return JSX element with formatName() function
    //'else' statement return JSX element without function. 
    function getGreeting(userName) {
        if(userName) {
            return <h1 style={{color:"green"}}>Hello { formatName(userName) }</h1>;
        }
        else {
            return <h1 style={{color:"red"}}>Hello Stranger</h1>;
        }
    }

    //const name = "Suresh Reddy";
    //const element = <h1>Hello {name} </h1>;
    //return element;
    return getGreeting("Sudeep Reddy");
}
export default ReactElement4;