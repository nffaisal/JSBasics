function Header(){
const styles ={
    padding:"20px",
    fontFamily:"Arial",
    margin:"10px",
    color:"purple",
    border:"1px solid black",
}
 return(
    <header style={styles}>
        <h1 style={{textAlign:'center'}}>My Profile</h1>
        <nav>
            <ul>
                <li ><a href="#">Home</a> </li> 
                <li><a href="#">Contact </a></li>
            </ul>
        </nav>
    </header>
 );
}
export default Header;