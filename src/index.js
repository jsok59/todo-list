import ProjectList from "./createProjectList";
import Project from "./createProject";
import Todo from "./createTodo";
import {generateSidebar, createProjectDOM} from "./generateSidebar";
import generateProjectForm from './generateProjectForm';
import {generateTodoForm} from './generateTodoForm';
import './style.css';

const project_list = new ProjectList("Project List");

// const project1 = new Project("Grading Papers");
// const project2 = new Project("Lesson Plans");
// const todo1 = new Todo("todo1", 
// "wasdfa", "wfasd", 1);
// const todo2 = new Todo("todo2", 
// "wasdfa", "wfasd", 1);
// project1.addTodo(todo1);
// project1.addTodo(todo2);
// project1.removeTodo(todo1);

// project1.list[0].priority = 0;

// project_list.addProject(project1);
// project_list.addProject(project2);

// generateProjectForm(project_list);
generateTodoForm();

generateSidebar(project_list);
generateProjectForm(project_list);




// generateTodoForm(project1);



