var removeimg='<img src=media/remove.png alt="button">';
var completeimg='<img src=media/complete.png alt="button">';
var detailsimg='<img src=media/details.png alt="button">';

var localdata={
  todolist:[], completed:[]
};

//when user click on the plus button
document.getElementById('addtask').addEventListener('click', function() {
  var value = document.getElementById('task').value;
  if (value){
    addTaskTodo(value);
    document.getElementById('task').value='';
  }
});

function removeTask(){
  var task = this.parentNode.parentNode;
  var parent = task.parentNode;
  parent.removeChild(task);
}


function completeTask(){
  var task = this.parentNode.parentNode;
  var parent = task.parentNode;
  var id = parent.id;

  var target=(id==='todolist')? document.getElementById('completed'):document.getElementById('todolist');

  parent.removeChild(task);
  target.insertBefore(task,target.childNodes[0]);

}

function addTaskTodo(text){

  var list = document.getElementById('todolist');

  var task=document.createElement('li');
  task.innerText=text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

//remove item click event listener

  var remove = document.createElement('button');
  remove.classList.add('removeTask');
  remove.innerHTML=removeimg;

  remove.addEventListener('click', removeTask);



//complete task event listener
  var complete = document.createElement('button');
  complete.classList.add('completeTask');
  complete.innerHTML=completeimg;

  complete.addEventListener('click', completeTask);

  var details = document.createElement('button');
  details.classList.add('details');
  details.innerHTML=detailsimg;

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  buttons.appendChild(details);
  task.appendChild(buttons);

  list.insertBefore(task, list.childNodes[0]);

}
