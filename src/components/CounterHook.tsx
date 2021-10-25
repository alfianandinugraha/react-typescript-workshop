import React, { useState } from 'react'

type CounterState = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<CounterState['count']>>
  incrementBy: (step: number) => void
}

const useCounter = (initialValue: number = 0): CounterState => {
  const [count, setCount] = useState(initialValue)

  const incrementBy = (step: number) => {
    setCount(count + step)
  }

  return { count, setCount, incrementBy }
}

const CounterHook = (): React.ReactElement => {
  const { count, incrementBy } = useCounter(5)

  return (
    <div>
      <h1>Counter Hook. Value: {count}</h1>
      <button onClick={() => incrementBy(5)}>Increment by 5</button>
    </div>
  )
}

export default CounterHook
