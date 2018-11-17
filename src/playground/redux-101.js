import { createStore } from 'redux'

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }    
})

// This function gets called every single time the store changes
store.subscribe(() => {
    console.log(store.getState())

})




store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})
store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'RESET'
})
store.dispatch({
    type: 'DECREMENT'
})
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
})

store.dispatch({
    type: 'SET',
    count: 101
})


// Whenever store dispatch gets called, createStore gets called to. Then depending on the dispatched action,
// the count changes.



