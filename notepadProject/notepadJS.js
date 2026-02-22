const btn = document.getElementById('btn');
const  list =document.querySelector('ul');
    const TaskInput =document.getElementById('TaskInput');
function addTask(){
     const Tasktext =TaskInput.value.trim(); 
     if(Tasktext ===""){  
        return;
     }
const li =document.createElement('li');  //create a list item
li.textContent =Tasktext; //text content transferred to list item

TaskInput.value =''; //empties input value place
const deleteButton =document.createElement('button');
deleteButton.textContent ="delete";
 deleteButton.addEventListener('click',removeTask);
function removeTask(){
    li.remove();
}
li.appendChild(deleteButton);
list.appendChild(li);

}
  btn.addEventListener('click', addTask);
  const DarkModeBtn =document.getElementById('DarkMode');
  const body = document.querySelector('body');
  DarkModeBtn.addEventListener('click', function() {
    body.style.backgroundColor = black;
    body.style.color =white;
  })
  
 
