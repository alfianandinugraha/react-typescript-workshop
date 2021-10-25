import React, { useState } from 'react'

interface CounterProps {
  children: React.ReactNode // ReactNode accept all type of component such as null, undefined, and boolean
  firstChild: React.ReactChild // ReactChild only accept react component, string, and number
}

const HeadingStyle: React.CSSProperties = {
  color: 'blue',
}

const Counter = (props: CounterProps): React.ReactElement => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h1 style={HeadingStyle}>This is counter: {count}</h1>
      {props.children}
      {props.firstChild}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter
