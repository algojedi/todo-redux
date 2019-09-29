import { TOGGLE_TODO, DELETE_TODO, ADD_TODO, CLEAR_TODOS } from "../actions/actions";


const INITIAL_STATE = [];

function mainReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case CLEAR_TODOS:
            return INITIAL_STATE;
        
        case ADD_TODO:
            return [...state, { todo: action.todo, completed: false, id : action.index }];
            
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.index)
            
        case TOGGLE_TODO:
            let completed = true;
            const newState = state.map(el => { 
                if (el.key === action.index) {
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

export default mainReducer;