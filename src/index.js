ddocument.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('task-form'); 
  const taskList = document.getElementById('task-list'); 
  
  form.addEventListener('submit', function (event) {
      
      event.preventDefault();

     
      const taskInput = document.getElementById('task-input'); 
      const taskText = taskInput.value.trim();

      /
      if (taskText !== '') {
         
          const newTask = document.createElement('div');
          newTask.textContent = taskText;

         
          taskList.appendChild(newTask);
          taskInput.value = '';
      }
  });
});