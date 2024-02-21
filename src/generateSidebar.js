import plus from './images/new_plus.png';
import { dialog } from './generateProjectForm';

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
    const addImage = new Image();
    addImage.src = plus;
    addImage.classList = 'plus-img';
    
    addProjectBtn.appendChild(addImage);
    addProjectBtn.appendChild(addProjectText);
    sidebar.appendChild(addProjectBtn);

     /************** Add project Button END*************/
    
     




}

function createProjectDOM(projects, sidebar) {
    
    projects.list.forEach((project) => {
        const div = document.createElement('div');
        div.setAttribute('class','project');
        div.textContent = project.title;
        sidebar.appendChild(div);
    })

}




export {generateSidebar, createProjectDOM};