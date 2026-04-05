import Header from './Header.jsx'
import Footer from'./Footer.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'
import Usergreeting from './Usergreeting.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import MycomponentTwo  from './MycomponentTwo.jsx'
import colorPicker from './colorPicker.jsx'
function App(){
  return(
    <>
    <Header></Header>
    <Usergreeting isLoggedIn={true} username="Noor"/>
    <MyComponent/>
    <Student name="Noor" age={18} isStudent ={true}/>
    <Student/>
    <Card/>
    <List/>
    <Button/>
    <colorPicker/>
    <Counter/>
    <MycomponentTwo/>
    <Footer></Footer>
    </>
      );
}

export default App;
