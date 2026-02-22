const btn = document.getElementById('btn');
const  list =document.querySelector('ul');
    const TaskInput =document.getElementById('TaskInput');
    const counterPara =document.getElementById('counter');
    let counter=0;
function addTask(){
     const Tasktext =TaskInput.value.trim(); 
     if(Tasktext ===""){  
        return;
     }
const li =document.createElement('li');  //create a list item
li.textContent =Tasktext; //text content transferred to list item
counter++;

TaskInput.value =''; //empties input value place
//delete button functionality
const deleteButton =document.createElement('button');  //create a delete button
deleteButton.textContent ="delete";  //content of button
 deleteButton.addEventListener('click',removeTask);       //when clicked remove task will operate
function removeTask(){
    li.remove();
    counter--;
    counterPara.textContent =`Tasks: ${counter}`; 
}
li.appendChild(deleteButton); 
list.appendChild(li);

counterPara.textContent =`Tasks: ${counter}`; 
}
  btn.addEventListener('click', addTask);
  //dark mode
    const DarkModeBtn =document.getElementById('DarkMode');
    const body = document.querySelector('body');
    DarkModeBtn.addEventListener('click', function() {

      body.classList.toggle('darkMode');
    });

    
  
