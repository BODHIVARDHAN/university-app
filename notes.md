- Do not mutate props 
- state in React is a anything .. object
- state can be accessed only for Class based components
- state can be mutated - this.setState(newState)
- whenver you change state, React will rerender 
- to update the state, you call this.setState(newState)
- While rerendering, React reconciler will calculate the DOM difference and updates it and thats why it is performant.
- React maintains Virtual DOM which is Javascript Object
- React component Lifecycle methods for class based Comps

1. componentWillMount()
2. componentDidMount()
3. componentDidUpdate()


API calls -

- 2 ways
1. fetch api request - new API given by latest browsers
2. axios library - npm package - and use its apis

- Difference between React.PureComponent and React.Component ??
- PureComponent is more performant than Component
- PureComponent implements shouldComponentUpdate() which shallow checks prevState and newState. If refs are different, return true else return false;
- Handle error cases

Excercise
- Show custom error message on API failure
- Reset the form after adding the data to list
- render Edit button for each package Component 
- On click, open same AddForm but this time with prefilled values and support edit