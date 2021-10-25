import React, { useReducer } from 'react'

enum ActionType {
  INCREMENT,
  RESET,
}

type ActionCount =
  | {
      type: ActionType.INCREMENT
      payload: number
    }
  | {
      type: ActionType.RESET
    }
  | number

type Reducer = (state: number, action: ActionCount) => number

const CounterReduce = (): React.ReactElement => {
  const [value, setValue] = useReducer<Reducer>((state, action) => {
    if (typeof action == 'number') return action

    switch (action.type) {
      case ActionType.INCREMENT:
        return state + action.payload
      case ActionType.RESET:
        return 0
      default:
        return state
    }
  }, 0)

  return (
    <div>
      <h1>CounterReduce. Value: {value}</h1>
      <button onClick={() => setValue(5)}>Set value to 5</button>
      <button
        onClick={() => setValue({ type: ActionType.INCREMENT, payload: 2 })}
      >
        Increment by 2
      </button>
      <button onClick={() => setValue({ type: ActionType.RESET })}>
        Reset
      </button>
    </div>
  )
}

export default CounterReduce
