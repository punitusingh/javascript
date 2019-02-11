

- Redux connect function

- a function that takes a component and returns a new component.


        const hoc = connect(state => state)
        const WrappedComponent = hoc(SomeComponent)
        
        
- why we need this?
    - to remove boiler-plate common code from all the components.
    - to abstract out that common code in hoc component.
    - like authorization
    - reuse code and remove bloat.
            