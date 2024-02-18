class ProjectList {
    constructor(title) {
        this.title = title;
        this.list = [];
    }

    set title(x) {
        this._title = x;
    }

    get title() {
        return this._title;
    }

    addProject(project_object) {
        this.list.push(project_object);
    }

    removeProject(project_object) {
        const index = this.list.indexOf(project_object);
        this.list.splice(index, 1);
    }
}

export default ProjectList;

