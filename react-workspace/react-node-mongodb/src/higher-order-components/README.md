https://reactjs.org/docs/higher-order-components.html


- for reusing component logic.
- it's a patten of React's compositional nature.

- it's a function that takes a component and returns a new component.

        
        const EnhanceComponent = higherOrderComponent(WrappedComponent);
        
        
        component -> Higher order function -> another component
        
        
- Example : Redux's connect function 
            Relay's createFragmentContainer
            
                        
        
## Use HOCs For Cross-Cutting Concerns

- Logic is to get boiler plate code/ repeating code in a wrapper function, and reuse this
wrapper component.
- Things like wrapped component, fetching data logic should be injected into wrapper component.
- IOC.
- It's a kind of module pattern which take WrappedComponent and some configuration as input
and returns a React.Component which will use that configuration and render WrappedComponent.


## Don't Mutate the Original Component. Use Composition.
- Modifying input component's prototype is mutation here, that's a bad pattern.
- input component should be wrapped in a container component to add new behavior, like
adding new lifecycle behavior.

## HOCs vs container component
- Container component strategy to separate responsibility between high-level and low-level concerns.
- Containers manage things like subscripts and state, and pass props to components that handle
things like rendering UI.
- HOCs use containers as part of their implementation.
- HOCs are just parameterized container component.


## Convention: Pass Unrelated Props Through To The Wrapped Compnent
- It makes HOCs as flexible and reusable as possible.

## Convention: Maximizing Composability

## Convention: Wrap the Display Name for Easy Debugging


## Caveats
#### Don't Use HOCs Inside the render Method
- If it is dynamic, use it inside constructor or in lifecycle methods.

#### Static Methods Must Be Copied Over
- use hoist-non-react-statics package for this.


        import hoistNonReactStatic from 'hoist-non-react-statics';
        function enhance(WrappedComponent) {
          class Enhance extends React.Component {/*...*/}
          hoistNonReactStatic(Enhance, WrappedComponent);
          return Enhance;
        }

- Another solution is to move static method in some utility file.

#### Refs Aren't Passed Through
- as ref is not really a prop, it's handled by React.
- usr the React.forwardRef API to fix this problem.





