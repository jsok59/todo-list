class Project {
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

    addTodo(todo_object) {
        this.list.push(todo_object);
    }

    removeTodo(todo_object) {
        const index = this.list.indexOf(todo_object);
        this.list.splice(index, 1);
    }

}

export default Project;