import React, { createContext, useContext, useState } from 'react'

type CounterStore = {
  value: number
  increment: () => void
  decrement: () => void
}

const CounterContext = createContext<CounterStore>({
  value: 0,
  increment: () => {},
  decrement: () => {},
})

const CounterState = () => {
  const { value } = useContext(CounterContext)

  return <h1>CounterContextAPI. Value: {value}</h1>
}

const CounterDispatch = () => {
  const { increment, decrement } = useContext(CounterContext)

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

const CounterContextAPI = (): React.ReactElement => {
  const [value, setValue] = useState<number>(0)

  const increment = () => setValue(value + 1)
  const decrement = () => setValue(value - 1)

  return (
    <CounterContext.Provider value={{ value, increment, decrement }}>
      <CounterState />
      <CounterDispatch />
    </CounterContext.Provider>
  )
}

export default CounterContextAPI
