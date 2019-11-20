import { createStore } from 'redux';
import data from '../data.json';

const pageReducer = (state = 0, action) => {
    if (action.type === 'INCREAMENT_PAGE' && state < data.length) {
        return (state + 1) % data.length;
    } else if (action.type === 'DECREAMENT_PAGE') {
        if (state === 0)
            return data.length - 1;
        return state - 1
    }
    return state;
}
var store = createStore(pageReducer);

export default store;