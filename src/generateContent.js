import new_plus from "./images/new_plus.png";
import close from "./images/close.svg";

function generateContent(project) {
	const content = document.querySelector(".content");
	const heading_div = document.createElement("div");
	const todo_div = document.createElement("div");
	heading_div.classList = "content-heading-div";
	todo_div.classList = "content-todo-div";
	content.appendChild(heading_div);
	content.appendChild(todo_div);

	/*** CONTENT HEADING START**** */
	const heading = document.createElement("h1");
	heading.textContent = project.title;
	heading_div.appendChild(heading);

	/*** CONTENT HEADING END **** */

	/*** ADD TODO BUTTON START**** */
	const addTodoBtn = document.createElement("div");
	addTodoBtn.classList = "add-project-btn";
	const addTodoText = document.createElement("p");
	addTodoText.textContent = "Add Todo";
	const plusImage = new Image();
	plusImage.src = new_plus;
	plusImage.classList = "plus-img";
	addTodoBtn.appendChild(plusImage);
	addTodoBtn.appendChild(addTodoText);
	const dialog = document.querySelector(".todo-dialog");
	addTodoBtn.addEventListener("click", (e) => {
		dialog.showModal();
	});
	heading_div.appendChild(addTodoBtn);
    
	if (project.list != undefined) {
		createTodoDOM(project);
	}

	/*** ADD TODO BUTTON END**** */
}

function createTodoDOM(project) {
	const todo_div = document.querySelector(".content-todo-div");
	const close_btn = new Image();
	close_btn.src = close;
	project.list.forEach((todo) => {
		const todo_card = document.createElement("div");
		todo_card.classList = "todo-card";
		const complete_div = document.createElement("div");
		const complete_label = document.createElement("label");
		complete_label.textContent = "Complete: ";
		const complete_checkbox = document.createElement("input");
		complete_checkbox.type = "checkbox";
		complete_checkbox.addEventListener("click", () => {
			if (readButton.checked === true) {
				todo_card.style.backgroundColor = "red";
			} else {
				todo_card.style.backgroundColor = "darkolivegreen";
			}
		});
		complete_label.appendChild(complete_checkbox);
		complete_div.appendChild(complete_label);
		todo_div.appendChild(complete_div);

		const title_p = document.createElement("p");
		title_p.textContent = `Title: ${todo.title}`;

		const dueDate_p = document.createElement("p");
		dueDate_p.textContent = `Due Date: ${todo.dueDate}`;

		const priority_p = document.createElement("p");
		priority_p.textContent = `Priority: ${todo.priority}`;

		todo_div.appendChild(title_p);
		todo_div.appendChild(dueDate_p);
		todo_div.appendChild(priority_p);
	});
}

export { generateContent, createTodoDOM };
