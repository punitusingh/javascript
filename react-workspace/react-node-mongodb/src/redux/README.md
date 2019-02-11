https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6

Bank vault = Redux Store
Cashier = Reducer
Withdraw money = Action
Initial deposit = initialState

### Redux Principle #1.

    Have a single source of truth: 
    The state of your whole application is stored in an object tree within a single Redux store.
    
    
### Redux Principle #2.
    
    State is read-only:
    The only way to change the state is to emit an action, an object describing what happened.

### Redux Principle #3.

    To specify how the state tree is transformed by actions, you write pure reducers.  
    
    

The most important Redux actors are: the store, the reducer and an action      