import plus from './images/new_plus.png';

function generateSidebar(projects) {
    const sidebar = document.querySelector('.sidebar');


    const heading = document.createElement('h1');
    heading.textContent = 'My Projects';
    heading.classList = 'sidebar-title';
    sidebar.appendChild(heading);
    
    /************** Add project Button START*************/

    const addProjectBtn = document.createElement('div');
    const addProjectText = document.createElement('p');
    addProjectText.textContent = 'Add Project';
    addProjectBtn.classList = 'add-project-btn';
    const addImage = new Image();
    addImage.src = plus;
    addImage.classList = 'plus-img';

    addProjectBtn.appendChild(addImage);
    addProjectBtn.appendChild(addProjectText);
    sidebar.appendChild(addProjectBtn);

     /************** Add project Button END*************/
    




}




export default generateSidebar;