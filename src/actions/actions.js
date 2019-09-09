//action types too few to warrant seperate file
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

let id = 0;

//action creators returning actions
export function addTodo(todo) {
    //console.log('added todo: ' + todo);
    return {
        type: ADD_TODO,
        index: id++,
        todo
    }
}

export function deleteTodo(i) {
    console.log('deleted todo at ind: ' + i);

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