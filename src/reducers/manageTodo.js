import uuid from "uuid"


export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  // debugger/
  switch (action.type) {
    case 'ADD_TODO':
      let todo = {
        text: action.payload.text,
        id: uuid()
      }
      return { todos: state.todos.concat(todo) };

    case "DELETE_TODO":
      let todos = state.todos.filter(todo => todo.id !== action.payload)
      return {
        todos: todos
      }
    default:
      return state;
  }
}
