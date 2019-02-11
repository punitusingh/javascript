## Refs and the DOM

- to access DOM node or React elements in the DOM.
- props are the only way parent components interact with their children.
- to modify a chile, we re-render it with new props.
- Refs is the way to modify a child outside of the typical dataflow.

### When to Use Refs

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

Avoid using refs for the things which we can achieve declaratively.
like instead of open()/close() methods on a Dialog component, we can pass isOpen prop to it.

### Don't Overuse Refs


### Creating Refs
- Create using React.createRef() in constructor, attach to element via the ref attribute.

        
        class MyComponent extends React.Component {
          constructor(props) {
            super(props);
            this.myRef = React.createRef();
          }
          render() {
            return <div ref={this.myRef} />;
          }
        }
        
        
### Accessing Refs
- A reference to the node is available on current attribute of the ref.        
        
        
        const node = this.myRef.current;
        
### Exposing DOM Refs to Parent Components
- for triggering focus, measuring the size or position of a child DOM node.
- use ref forwarding for these cases.    

### Callback Refs
- another way to set refs.
- we pass a callback function to element's ref attribute, this callback function gets 
DOM element in the argument, and set's that DOM element in the instance variable.
- When the component mounts, React will call the ref callback.
- And when the component unmounts, Reacts will call the ref callback with null.
- Refs are set before componentDidMount or componentDidUpdate fires.

### Caveats with callback refs
- If the ref callback is defined as an inline function, it gets called twice during updates.
- First with null, then again with DOM element.
- As a new instance of the function is created with each render, so React needs to clear
the old ref and set up the new one.