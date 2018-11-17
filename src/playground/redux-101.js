import { createStore } from 'redux'

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }    
})

console.log(store.getState())





// Actions - it's an object that gets send to the store

// Increment the count 
store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'INCREMENT'
})


// Reset the count to zero
store.dispatch({
    type: 'RESET'
})

// Decrement the count
store.dispatch({
    type: 'DECREMENT'
})


// Whenever store dispatch gets called, createStore gets called to. Then depending on the dispatched action,
// the count changes.


console.log(store.getState()) // It gets {count: -1}    We incremented twice (+2), reseted (0) and decremented
// (-1).
