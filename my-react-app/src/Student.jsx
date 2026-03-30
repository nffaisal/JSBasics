
function Student(props){
    return(
        <div className="StudentDetail">
            <p> Name: {props.name} </p>
            <p> Age: {props.age}</p>
            <p> is {props.name} Student? {props.isStudent ? "yes" : "No"}</p>
        </div>
    );
}

Student.defaultProps ={
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student