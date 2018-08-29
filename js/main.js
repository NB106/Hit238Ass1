var removeimg='<img src=media/remove.png alt="button">';
var completeimg='<img src=media/complete.png alt="button">';
var detailsimg='<img src=media/details.png alt="button">';

var localdata= (localStorage.getItem('TodoList'))?JSON.parse(localStorage.getItem('TodoList')):{
  todolist:[], completed:[]
};

console.log(localdata);

//console.log( JSON.parse(localStorage.getItem('TodoList')));

//when user click on the plus button
document.getElementById('addtask').addEventListener('click', function() {
  var value = document.getElementById('task').value;
  if (value){
    addTaskTodo(value);
    document.getElementById('task').value='';

    localdata.todolist.push(value);
    localdataUpdated();
  }
});


function localdataUpdated(){

  localStorage.setItem('TodoList', JSON.stringify(localdata));

}

function removeTask(){
  var task = this.parentNode.parentNode;
  var parent = task.parentNode;
  var id=parent.id;
  var value = task.innerText;

  if(id==='todolist')
  {
    localdata.todolist.splice(localdata.todolist.indexOf(value),1);
  } else{
    localdata.completed.splice(localdata.completed.indexOf(value),1);
  }

  parent.removeChild(task);
  localdataUpdated();
}


function completeTask(){
  var task = this.parentNode.parentNode;
  var parent = task.parentNode;
  var id = parent.id;
  var value = task.innerText;

  if(id==='todolist')
  {
    localdata.todolist.splice(localdata.todolist.indexOf(value),1);
    localdata.completed.push(value);
  } else{
    localdata.completed.splice(localdata.completed.indexOf(value),1);
    localdata.todolist.push(value);
  }

  var target=(id==='todolist')? document.getElementById('completed'):document.getElementById('todolist');

  parent.removeChild(task);
  target.insertBefore(task,target.childNodes[0]);

  localdataUpdated();

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
