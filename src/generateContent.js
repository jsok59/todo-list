import new_plus from './images/new_plus.png';

function generateContent(project) {
    const content = document.querySelector('.content');
    const heading_div = document.createElement('div')
    heading_div.classList = 'content-heading-div';
    content.appendChild(heading_div);

/*** CONTENT HEADING START**** */
    const heading = document.createElement('h1');
    heading.textContent = project.title;
    heading_div.appendChild(heading);

/*** CONTENT HEADING END **** */

/*** ADD TODO BUTTON START**** */
    const addTodoBtn = document.createElement('div');
    addTodoBtn.classList = 'add-project-btn';
    const addTodoText = document.createElement('p');
    addTodoText.textContent = 'Add Todo';
    const plusImage = new Image();
    plusImage.src = new_plus;
    plusImage.classList = 'plus-img';
    addTodoBtn.appendChild(plusImage);
    addTodoBtn.appendChild(addTodoText);
    const dialog = document.querySelector('.todo-dialog');
    addTodoBtn.addEventListener('click', (e)=> {
        dialog.showModal();
    })
    content.appendChild(addTodoBtn);

/*** ADD TODO BUTTON END**** */



}

export default generateContent;