import dispatcher from '../dispatcher';

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  // axios('http://someurl.com/somedata').then(data => {
  //   console.log('got the data', data);
  // });
  dispatcher.dispatch({type: 'FETCH_TODOS'});
  setTimeout(() => {
    dispatcher.dispatch({type: 'RECEIVE_TODOS', todos: [
      {
        id: 1234342,
        text: "go to shop again",
        complete: true
      },
      {
        id: 21726353,
        text: "buy pizza again",
        complete: false,
      },
    ]});

    if (false) {
      dispatcher.dispatch({type: 'FETCH_TODOS_ERROR'});
    }
  }, 1000)
}
