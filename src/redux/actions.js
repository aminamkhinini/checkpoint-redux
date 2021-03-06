export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const FILTER_TODO = "FILTER_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export function addTodo(todo) {
    return {
        type:ADD_TODO,
        payload: todo,
    }
}

export function deleteTodo(todoId) {
    return {
        type:DELETE_TODO,
        payload: todoId,
    }
}


export function updateTodo(todo) {
    return {
        type:UPDATE_TODO,
        payload: todo,
    }
}

export function toggleTodo (todoId) {
    return {
        type: TOGGLE_TODO, 
        payload: todoId,
 } 
 
   }
export function filtertodo(filter) {
    return {
        type:FILTER_TODO,
      filter,
    }
}
