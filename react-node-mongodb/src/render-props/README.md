

- A technique for sharing code between React components using a prop
whose value is a function.


- this function returns a React Element.


    <DataProvider render={ data => (
        <h1> Hello {data.target} </h1>
    )
    }/>

- Here DataProvider component simply call render on it's props.render function.



## Libraries which are using render props are:
   - React Router
   - Downshift
   
   

## Use Render Props for Cross-Cutting Concerns
        