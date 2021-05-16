import { FILTER_TODO } from './actions';
const filterreducer =(state=null,action) => {
    switch (action.type){
     case FILTER_TODO :
    return action.payload;
    default:
        return state ;   
    }
    
}
export default filterreducer