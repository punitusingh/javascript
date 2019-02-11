

- the only way you should change state is via the setState method.
- it takes an object and merges it into the current state.

- setState is asynchronous.
- setState can take a callback function.

- when you have to set new state based on previous state,
always do that using callback function of setState().



        this.setState((prevState, props) => {
                return ({ counter: prevState.counter + 1})
              },
              () => console.log('callback: ' + this.state.counter)
            )
            
            
            
## 2 benefits of this approach
 1. It allows us to take a static copy of our state that will
 never change on its own.
 2. It will queue the setState calls so they run in order.
 
 
             