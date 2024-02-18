class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
    }

    set title(newTitle) {
        this._title = newTitle;

    }

    get title() {
        return this._title;
    }

    set description(x) {
        this._description = x;

    }

    get descriptione() {
        return this._description;
    }

    set dueDate(x) {
        this._dueDate = x;

    }

    get dueDate() {
        return this._dueDate;
    }

    set priority(x) {
        this._priority = x;

    }

    get priority() {
        return this._priority;
    }

    set complete(x) {
        this._complete = x;
    }

    get complete() {
        return this._complete;
    }

}

export default Todo;