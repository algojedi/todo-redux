//action types too few to warrant seperate file
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

//action creators returning actions
export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

export function deleteTodo(i) {
    return {
        type: DELETE_TODO,
        index: i
    }
}

export function toggleTodo(i) {
    return {
        type: TOGGLE_TODO,
        index: i
    }
}