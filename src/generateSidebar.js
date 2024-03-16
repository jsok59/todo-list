import plus from './images/new_plus.png';
import {generateContent, createTodoDO} from './generateContent';
import {createEventListener} from './generateTodoForm';

function generateSidebar(project_list) {
    const sidebar = document.querySelector('.sidebar');


    const heading = document.createElement('h1');
    heading.textContent = 'My Projects';
    heading.classList = 'sidebar-title';
    sidebar.appendChild(heading);


    if (project_list != undefined) {
        createProjectDOM(project_list, sidebar);
    }
    
    /************** Add project Button START*************/
    
    const addProjectBtn = document.createElement('div');
    const addProjectText = document.createElement('p');
    addProjectText.textContent = 'Add Project';
    addProjectBtn.classList = 'add-project-btn';
    addProjectBtn.addEventListener('click', (e)=> {
        const dialog = document.querySelector('.project-dialog');
        dialog.showModal();
    });
    const plusImage = new Image();
    plusImage.src = plus;
    plusImage.classList = 'plus-img';
    
    addProjectBtn.appendChild(plusImage);
    addProjectBtn.appendChild(addProjectText);
    sidebar.appendChild(addProjectBtn);

     /************** Add project Button END*************/
    
     




}

function createProjectDOM(project_list, sidebar) {
    
    project_list.list.forEach((project) => {
        const div = document.createElement('div');
        div.setAttribute('class','project');
        div.textContent = project.title;
        div.addEventListener('click', (e)=> {
            
            console.log("Creating Todo content for...");
            console.log(project);
            const content = document.querySelector('.content');
            content.innerHTML = '';
            console.log('Creating Event Listner for ...');
            console.log(project);
            createEventListener(project);
            generateContent(project);
            
        })
        sidebar.appendChild(div);
    })

}




export {generateSidebar, createProjectDOM};