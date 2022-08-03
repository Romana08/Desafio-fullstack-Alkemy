import {
    USER_CREATE,

} from './actions.js';
const inicialState = {
    user: [], 
    // countries : [],
    // allCountries : [],
    // activities: [],
    // detail: [], 
    // orderCountries: []
 };
 const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case USER_CREATE :
            {
                return { ...state, user: action.payload}
            }

        default: return state 
    }
    
}


export default reducer; 