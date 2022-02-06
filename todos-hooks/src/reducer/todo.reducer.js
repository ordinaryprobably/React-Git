import { v4 as uuid } from 'uuid';

export default (state, action) => {
  switch(action.type) {
    case 'ADD':
      return [ ...state, { id: uuid(), task: action.task, completed: false }];
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return state.map(todo => {
            if(todo.id === action.id) {
              return { ...todo, completed: !action.state };
            } else {
              return todo;
            }
          });
    case 'EDIT':
      return state.map(todo => {
        if(todo.id === action.id) {
          return { ...todo, task: action.value };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}
