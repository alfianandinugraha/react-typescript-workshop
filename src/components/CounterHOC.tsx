import React from 'react'

interface CounterProps {
  initialValue: number
}

function withTitle<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    return (
      <div>
        <h1>Hello from withTitle</h1>
        <Component {...props} />
      </div>
    )
  }
}

const CounterHOC = (props: CounterProps): React.ReactElement => {
  return <p>This is counter. Value : {props.initialValue}</p>
}

export default withTitle(CounterHOC)
