import {
    ADD_CLIENT,
}from '../actions/types'; 


export default (state = []  , action) =>{ 
    switch(action.type){
        
        case ADD_CLIENT:               
            return [...state,  action.payload] ;  
        
        default:
            return state;
    }
}