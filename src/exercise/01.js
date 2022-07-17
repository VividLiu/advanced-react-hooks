// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, { useReducer} from 'react'

function cntReducer(preState, action) {
  switch(action.type){
    case 'INCREMENT':
      return {count: preState.count + action.step};
    default:
        return preState;
  }
}

function Counter({initialCount = 0, step = 2}) {
  const [state, dispatch] = useReducer(cntReducer, {count: initialCount})

  const {count} = state;
  const increment = () => dispatch({type: 'INCREMENT', step});
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
