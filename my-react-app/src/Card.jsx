import profilepic from './assets/ProfilePic.png'
function Card(){
 return(
    <div className="Card">
        <img className="CardImg" src={profilepic} alt="My Profile" style={{width:'250px',height:'150px'}}/> 
        <h2 className="CardText">Noor FF</h2>
        <p className="CardPara">I'm Learning react</p>
        </div>
 );

}
export default Card