function generateTodoForm(todo_list) {

    const body = document.querySelector('body');
    const dialog = document.createElement('dialog');
    dialog.setAttribute('class', 'todo-dialog');
    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    form.setAttribute('id', 'todo-form');
    dialog.appendChild(form);
    body.appendChild(dialog);


    const title_label = document.createElement('label');
    title_label.setAttribute('for', 'todo-title');
    const title_input = document.createElement('input');
    title_input.setAttribute('type', 'text');
    title_input.setAttribute('id', 'todo-title');
    title_input.setAttribute('name', 'todo-title');

    form.appendChild(title_label);
    form.appendChild(title_input);  
    

}

export default generateTodoForm;