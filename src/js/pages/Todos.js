import React from 'react';
import Todo from '../components/Todo'

export default class Featured extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
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
        }
      ]
    }
  }
  render() {
    const { todos } = this.state;
    const TodoComponents = todos.map((todo => {
      return <Todo key={todo.id} {...todo} />
    }));
    return(
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
