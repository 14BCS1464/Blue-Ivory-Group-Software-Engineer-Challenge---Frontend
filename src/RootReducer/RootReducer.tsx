//@ts-ignore
import {combineReducers} from 'redux';
import ParentScreenReducer from '../main/reducer'
import CardReducer  from '../CardReducer/CardReducer'
const RootReducers = combineReducers({ 
    ParentScreenReducer,
 
    CardReducer
});


export default RootReducers;