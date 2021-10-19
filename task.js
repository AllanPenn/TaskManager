const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager

`;

let userInput = prompt(menu);

while (userInput.toUpperCase() !== `CLOSE`){

  userInput = prompt(menu);
}

alert(`Thank you for using Task Manager`);