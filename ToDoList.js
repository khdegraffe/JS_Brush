// while loop
// get quit part to work first
// add to array of to dos
// enter new then prompt again to enter new todo
// splice with index to remove array

let input = prompt("What would you like to do?");
const todos = ["Collect eggs", "Clean kitchen"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("************");
  } else if (input === "new") {
    const newTodo = prompt("What would you like to add?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list.`);
  } else if (input === "delete") {
    const index = parseInt(prompt("What index would you like to delete?"));
    if (!Number.isNaN(index)) {
      const deletedTask = todos.splice(index, 1);
      console.log(`Deleted ${deletedTask[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("What would you like to do?");
}

console.log("You quit the app");
