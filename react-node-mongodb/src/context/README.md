

- Global state for components.

- share data without having to pass props down all the way through the DOM tree.

        
        const ContextObject = React.createContext({foo: "bar" })
        
        MyComponent.contextType = ContextObject;
        
        
- in React data is passed top-down, parent->child via props, but locale preference, ui theme
are required by many components.

Data nature : Global
like: authenticated user, theme, preferred language      

- Using context, we can avoid passing props through intermediate elements.  