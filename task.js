const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager

`;

const tasks = [
  `Charge MacBook`,
  `Master JavaScript`
];

let showTasks = ``;

let newTask;

let userInput = prompt(menu);

while (userInput.toUpperCase() !== `CLOSE`){
  if (userInput.toUpperCase() === `TASKS`){
    for (task of tasks){
      showTasks += `${task}\n`;
    }
    alert(showTasks);
    showTasks = ``;
  } else if (userInput.toUpperCase() === `NEW`){
    newTask = prompt(`Please enter the new task:`);
    alert(`"${newTask}" has been added!`);
    tasks.push(newTask);
  }
  userInput = prompt(menu);
}

alert(`Thank you for using Task Manager`);