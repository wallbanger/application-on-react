import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 1234342,
        text: "go to shop",
        complete: false
      },
      {
        id: 21726353,
        text: "buy pizza",
        complete: false
      },
      {
        id: 32133948,
        text: "read book",
        complete: false
      },
      {
        id: 493837234,
        text: "watch movie",
        complete: false
      },
      {
        id: 565676765,
        text: "play guitar",
        complete: false
      }
    ];
  }

  getAll() {
    return this.todos;
  }

}

const todoStore = new TodoStore;

export default todoStore;
