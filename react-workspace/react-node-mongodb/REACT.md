 - lets you compose complex UIs from small and isolated pieces of code called “components”.
 - When our data changes, React will efficiently update and re-render our components.
 
 ## React Component
 - A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.
 - render returns a React element, which is a lightweight description of what to render.
 - When you call setState in a component, React automatically updates the child components inside of it too.
 
 
 - To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead.
 - The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.
 
 - we can pass down a function from the parent component to child component to maintain parent component's state's privacy.
   and child component can call this function on any event to notify or set data in parent component's state.
   This way child components are called controlled components as parent component has full control over them.
   
 - it is a convention to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events.
    Means parent component will have handle[Event] function, and we will pass this function's 
    reference to child component in on[Event] name.
    
    
 ## immutability is important
 -  two approach to changing data
    -   mutate the data directly.
           
          
                  var player = {score: 1, name: 'Jeff'};
                  player.score = 2;
        
     
   -    replace the data with a new copy which has desired changes.   
   
   
                    var player = {score: 1, name: 'Jeff'};
                    var newPlayer = Object.assign({}, player, {score: 2});
                    
   ### benefits of second approach:
   - Complex features become simple. 
        like 
            - maintaining history, jump back to previous moves in a game.
            - undo and redo certain actions
            - avoiding direct data mutation lets us keep previous versions of the
            history intact, and we can reuse them later.
            
            
   - Detecting changes.
        - if new object reference !== old object reference, then we know change happened.
        
   
   - Determining when to re-render in react
        - immutability helps in building pure components in react.
        - detecting changes in immutable object using object reference is faster,
        so react can determine easily whether a component requires re-rendering or not.
        - shouldComponentUpdate() 
        
        
 ## Function Components
 - if our components have only render method, don't have their
 own state.
 - It will take props as input and returns what should be rendered.
        
             
        
                                 
            
 
 
 
 
 
  
 
 
 
 