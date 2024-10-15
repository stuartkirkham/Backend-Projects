const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, "tasks.json");
function addTask() {
    console.log("in add task");
}
const args = process.argv.slice(2);
// Add task
if (args.includes("add")) {
    const taskName = args.slice(1);
    if (args.length < 2) {
        console.log ("Please enter a name for the task.")
        console.log("Ex. add 'Buy Groceries'")
    }
    else {
        addTask(taskName);
    }
}
// Update task
else if (args.includes("update")) {

}
//Delete task
else if (args.includes("delete")) {

}
// Mark a task as in progress or done
else if (args.includes("mark-in-progress")){

}
else if (args.includes("mark-done")) {

}
// List all tasks
// List all tasks that are done
// List all tasks that are not done
// List all tasks that are in progress
else if (args.includes("list")) {

}
else {
    console.log();
    console.log("Task Tracker input options");
    console.log("node index.js <command> [arguments] ");
    console.log();
    console.log("Commands:");
    console.log("add <task description> ");
    console.log("update <id> <new description> ");
    console.log("delete <id> ");
    console.log("mark-in-progress <id>");
    console.log("mark-done <id> ");
    console.log("list [status] (includes done, todo, in-progress)");
    console.log();

}