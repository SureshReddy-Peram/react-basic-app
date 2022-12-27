


 function ReactElement3() {

  //2.Embedding Result of a javascript function in JSX element
    function formatName(userName) {
        return userName.toUpperCase();
    }

    function formatNum(number) {
        //const binary = decimal.toString(2);  redix( i.e base)=2
        return number.toString(2);
    }
    const name = "Suresh Reddy";
    const num = 11;


    const element = <div> 
                      <h1>Hello {formatName(name)}</h1>
                      <h2>This is number { formatNum(num) }</h2>
                    </div>
    
    return element;  
          
 }
 export default ReactElement3;
 
 