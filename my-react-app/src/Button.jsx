function Button(){
    const styles ={
    backgroundColor:" rgb(220, 220, 248)",
   padding: "10px 20px",
   border: "none",
   cursor: "pointer",
   color: "rgb(37, 37, 100)",
   borderRadius: "5px",
    }
    return(
        <button className="button" style={styles}>Click Me!</button>
    );
}
export default Button