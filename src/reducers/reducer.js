import Redux from "redux";
import { TOGGLE_TODO, DELETE_TODO, ADD_TODO } from "../actions/actions";

INITIAL_STATE = []

mainReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.todo]}
            break;
        case DELETE_TODO:
            return { todos: state.todos.filter((todo, i) => {i != action.index})}
            
        case TOGGLE_TODO:

            break;
    
        default:
            return state;
            break;
    }
}

