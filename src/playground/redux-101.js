import { createStore } from 'redux'

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})    

const resetCount = () => ({
    type: 'RESET'
})




const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
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




// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())


store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))


store.dispatch(setCount({ count: 150 }))



// Whenever store dispatch gets called, createStore gets called to. Then depending on the dispatched action,
// the count changes.



