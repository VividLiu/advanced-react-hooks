// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import React, { useContext, useState} from 'react'

// 🐨 create your CountContext here with React.createContext

const CountContext = React.createContext();

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

const CountProvider = ({children}) => {
  const [count, setCount] = useState(0);
  return(
    <CountContext.Provider value = {[count, setCount]} >
      {children}
    </CountContext.Provider>
  )
}
function CountDisplay() {
  const [count, _] = useContext(CountContext);
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [_, setCount] = useContext(CountContext);

  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
