import close from './images/close.svg';
import Project from './createProject';
import {generateSidebar} from './generateSidebar';

function generateProjectForm(project_list) {
    /******* FORM AND DIALOG CREATION *******/

    const body = document.querySelector('body');
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');
    dialog.setAttribute('class', 'project-dialog');
    form.setAttribute('method', 'dialog');
    form.setAttribute('id', 'project-form');
    dialog.appendChild(form);
    body.appendChild(dialog);

    /******* FORM AND DIALOG END *******/


    /******* HEADING AND CLOSE BTN CREATION *******/

    const heading_div = document.createElement('div');
    heading_div.setAttribute('class', 'heading_div');

    const heading = document.createElement('h1');
    heading.textContent = 'New project';
    heading.setAttribute('class', 'form-heading');
    heading_div.appendChild(heading);

    const close_btn = new Image();
    close_btn.src = close;
    close_btn.addEventListener('click', (e) => {
        
        dialog.close();
    });

    heading_div.appendChild(close_btn);

    form.appendChild(heading_div);

    /******* HEADING AND CLOSE BTN END *******/

    /**** FORM INPUTS AND SUBMIT BUTTON CREATION ********/
    
    const title_div = document.createElement('div');
    const title_label = document.createElement('label');
    const title_input = document.createElement('input');
    title_label.setAttribute('for', 'form-title');
    title_label.textContent = 'Title: ';
    title_input.setAttribute('type', 'text');
    title_input.setAttribute('id', 'form-title');
    title_input.setAttribute('name', 'form-title');
    title_div.appendChild(title_label);
    title_div.appendChild(title_input);
    form.appendChild(title_div);


    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Add Project';
    submitBtn.setAttribute('class', 'submit-btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        const sidebar = document.querySelector('.sidebar');
        const project = new Project(form['form-title'].value);
        console.log(form['form-title'].value);
        project_list.addProject(project);
        form.reset();
        dialog.close();
        sidebar.innerHTML ='';
        generateSidebar(project_list);
    })
    form.appendChild(submitBtn);

      /**** FORM INPUTS AND SUBMIT BUTTON END ********/

    
}

export default generateProjectForm;
