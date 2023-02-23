
const NumberList = (props)=>{

     return (
        <ul>
            {props.numbers.map((number,index)=>
            ( <li key={index}>{number}</li> )) }
        </ul>
     );

   /*  const numbers = [1,2,2,3,4,5,"Tea", "Coffee", 'Hai', 'Hello' ];
    const listItems = numbers.map((numbers,index)=>(<li key={index}>{numbers}</li>));
    return (
        <ul style={{listStyleType: "square"}}>
            {listItems}
            <ul>
                <li>Tea</li>
                <li>Coffee</li>
            </ul>
        </ul>
    ) ; */
}
export default NumberList;