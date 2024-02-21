function generateContent(project) {
    const content = document.querySelector('.content');
    const heading_div = document.createElement('div')
    heading_div.classList = 'content-heading-div';
    content.appendChild(heading_div);


    const heading = document.createElement('h1');
    heading.textContent = project.title;
    heading_div.appendChild(heading);



}