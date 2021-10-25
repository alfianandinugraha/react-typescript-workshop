import React from 'react'

type CounterProps = {
  initialCount?: number
  step?: number
}

type CounterState = {
  value: number
}

class CounterClass extends React.Component<CounterProps, CounterState> {
  state: CounterState = {
    value: this.props.initialCount ? this.props.initialCount : 0,
  }

  increment() {
    const step = this.props.step ? this.props.step : 1

    this.setState({
      ...this.state,
      value: this.state.value + step,
    })
  }

  render() {
    const { value } = this.state
    const increment = this.increment.bind(this)

    return (
      <div>
        <h1>Count from CounterClass: {value}</h1>
        <p>Step: {this.props.step}</p>
        <button onClick={increment}>Increment</button>
      </div>
    )
  }
}

export default CounterClass
