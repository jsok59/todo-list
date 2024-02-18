import Project from "./createProject";
import Todo from "./createTodo";
import generateSidebar from "./generateSidebar";
import './style.css';

const test = new Project();
const todo1 = new Todo("todo1", 
"wasdfa", "wfasd", 1);
const todo2 = new Todo("todo2", 
"wasdfa", "wfasd", 1);
test.addTodo(todo1);
test.addTodo(todo2);
test.removeTodo(todo1);

test.list[0].priority = 0;

console.log(test.list);
console.log(test.title);

generateSidebar();

