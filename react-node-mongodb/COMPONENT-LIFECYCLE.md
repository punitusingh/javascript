https://medium.freecodecamp.org/these-are-the-concepts-you-should-know-in-react-js-after-you-learn-the-basics-ee1d2f4b8030


- First time mounting - 
        
        
        constructor() -> static getDerivedStateFromProps() -> render() -> componentDidMount()


- New props / setState() / forceUpdate()
        
        
        getDerivedStateFromProps() -> static shouldComponentUpdate() -> render() -> getSnapshotBeforeUpdate() -> componentDidUpdate()
        
      
- Unmounting


        componentWillUnmount()        
        



Other lifecycle methods
    
   - getDerivedStateFromError: in the event of an error in a component, getDerivedStateFromError
   runs and we can update state to reflect that an error occurred.
    







