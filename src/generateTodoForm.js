import close from "./images/close.svg";
import { createTodoDOM } from "./generateContent";
function generateTodoForm(todo_list) {
	const body = document.querySelector("body");
	const dialog = document.createElement("dialog");
	dialog.setAttribute("class", "todo-dialog");
	const form = document.createElement("form");
	form.setAttribute("method", "dialog");
	form.setAttribute("id", "todo-form");
	dialog.appendChild(form);
	body.appendChild(dialog);

	/******* HEADING AND CLOSE BTN CREATION *******/

	const heading_div = document.createElement("div");
	heading_div.setAttribute("class", "heading_div");

	const heading = document.createElement("h1");
	heading.textContent = "New Todo";
	heading.setAttribute("class", "form-heading");
	heading_div.appendChild(heading);

	const close_btn = new Image();
	close_btn.src = close;
	close_btn.addEventListener("click", (e) => {
		dialog.close();
	});

	heading_div.appendChild(close_btn);

	form.appendChild(heading_div);

	/******* HEADING AND CLOSE BTN END *******/

	/******** TITLE INPUT START ********* */
	const title_div = document.createElement("div");
	const title_label = document.createElement("label");
	title_label.textContent = "Title: ";
	title_label.setAttribute("for", "todo-title");
	const title_input = document.createElement("input");
	title_input.setAttribute("type", "text");
	title_input.setAttribute("id", "todo-title");
	title_input.setAttribute("name", "todo-title");
	title_div.appendChild(title_label);
	title_div.appendChild(title_input);

	form.appendChild(title_div);

	/******** TITLE INPUT END ********* */

	/******** Description Text area START ********* */
	const description_div = document.createElement("div");
	const description_label = document.createElement("label");
	description_label.textContent = "Description: ";
	description_label.setAttribute("for", "todo-description");
	const description_textarea = document.createElement("textarea");
	description_textarea.setAttribute("rows", 20);
	description_textarea.setAttribute("cols", 50);
	description_textarea.setAttribute("id", "todo-description");
	description_textarea.setAttribute("name", "todo-description");
	description_div.appendChild(description_label);
	description_div.appendChild(description_textarea);

	form.appendChild(description_div);

	/******** Description Text area END ********* */

	/******** DATE INPUT START ********* */
	const date_div = document.createElement("div");
	const date_label = document.createElement("label");
	date_label.textContent = "Due Date: ";
	date_label.setAttribute("for", "todo-date");

	const date_input = document.createElement("input");
	date_input.setAttribute("type", "datetime-local");
	date_input.setAttribute("id", "todo-date");
	date_input.setAttribute("name", "todo-date");
	date_div.appendChild(date_label);
	date_div.appendChild(date_input);
	form.appendChild(date_div);
	/******** DATE INPUT END ********* */


    /******** PRIORITY SELECT START ********* */
	const priority_div = document.createElement("div");
	const priority_label = document.createElement("label");
	priority_label.textContent = "Priority: ";
	priority_label.setAttribute("for", "priority");
	const priority_select = document.createElement("select");
	priority_select.setAttribute("name", "priority");
	const option1 = document.createElement("option");
	option1.textContent = "High";
	option1.setAttribute("value", "high");
	const option2 = document.createElement("option");
	option2.textContent = "Medium";
	option2.setAttribute("value", "medium");
	const option3 = document.createElement("option");
	option3.textContent = "Low";
	option3.setAttribute("value", "low");

	priority_select.appendChild(option1);
	priority_select.appendChild(option2);
	priority_select.appendChild(option3);
	priority_div.appendChild(priority_label);
    priority_div.appendChild(priority_select);
	form.appendChild(priority_div);
    /******** PRIORITY SELECT START ********* */

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('class', 'submit-btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Add Todo';
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const todo = new Todo(form['todo-title'].value, form['todo-description'].value, form['todo-date'].value, form['todo-priority'].value );
        todo_list.addTodo(todo);
        const content_div = document.querySelector('.content-todo-div');
        content_div.innerHTML = '';
        createTodoDOM(todo_list);
    })
    form.appendChild(submitBtn);
}

export default generateTodoForm;
