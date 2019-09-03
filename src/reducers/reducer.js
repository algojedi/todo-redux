import Redux from "redux";
import { TOGGLE_TODO, DELETE_TODO, ADD_TODO } from "../actions/actions";

INITIAL_STATE = [{}];

mainReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { todo: action.todo, completed: false, key : action.index }];
            
        case DELETE_TODO:
            return state.filter(todo => {todo.key != action.index})
            
        case TOGGLE_TODO:
            const newState = state.map(el => { 
                const completed;
                if (el.key == action.index) {
                    completed = !el.completed; 
                    } else { completed = el.completed; }

                return {    todo: el.todo,
                            completed, 
                            key : el.key
                        }
                });
            return newState;    
                            
        default:
            return state;
    }
}

