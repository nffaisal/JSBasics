function Button(){
    const styles ={
    backgroundColor:" rgb(220, 220, 248)",
   padding: "10px 20px",
   border: "none",
   cursor: "pointer",
   color: "rgb(37, 37, 100)",
   borderRadius: "5px",
    }
    
  /*   const handleClick =(name) => {
        if(count<3){
            console.log("Thanks for reading!");
        count++;
     }else{
                console.log(`${name} Okay stop clicking`);
            }
        }
     */
    const handleClick =(e) => e.target.textContent="Thank You!";
    const handleDoubleClick =(e) =>e.target.textContent ="Thank You Again!";
    return(
        <button style={styles} onClick={handleClick} onDoubleClick={handleDoubleClick}>Click Me!</button>
    );
}
export default Button