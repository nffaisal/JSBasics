import Header from './Header.jsx'
import Footer from'./Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import Usergreeting from './Usergreeting.jsx'
function App(){
  return(
    <>
    <Header></Header>
    <Usergreeting isLoggedIn={true} username="Noor"/>
    <Student name="Noor" age={18} isStudent ={true}/>
    <Student/>
    <Card/>
    <Button/>
    <Footer></Footer>
    </>
      );
}

export default App;
