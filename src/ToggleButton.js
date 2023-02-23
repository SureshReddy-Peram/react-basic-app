

const ToggleButton = ()=> {

    function handleClick(e){
        e.preventDefault();
        return alert("Link Clicked");
    }
  /* Difference b/w HTML Event handling and React Event handling?
    Ans. We can't written false to prevent default behaviour in react.
    we need to use preventDefault() explicitly.
  */
    return <div>
            <button onClick={()=>{ alert("Hello, how are you?");} }> Hello </button>
            <a href="#page" onClick={handleClick}>Page </a>
           </div>
}
export default ToggleButton;
