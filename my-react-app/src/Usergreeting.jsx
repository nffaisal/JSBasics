function Usergreeting(props){
    if(props.isLoggedIn){
        return (<h2> Welcome {props.username}</h2>);
    }else{
        return (<h2> You are not Logged in</h2>);
    }
}
export default Usergreeting