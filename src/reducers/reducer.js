import { TOGGLE_TODO, DELETE_TODO, ADD_TODO } from "../actions/actions";


const INITIAL_STATE = [{}];

function mainReducer(state=INITIAL_STATE, action) {
    console.log('main reducer called : ' + action.type);
    
    switch (action.type) {
        case ADD_TODO:
            console.log('add-todo reducer called');
            return [...state, { todo: action.todo, completed: false, key : action.index }];
            
        case DELETE_TODO:
            return state.filter(todo => todo.key !== action.index)
            
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