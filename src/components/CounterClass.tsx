import React from 'react'

type CounterProps = {
  initialCount?: number
  step?: number
}

type InitialCounterProps = {
  initialCount: number
  step: number
}

type CounterState = {
  value: number
}

class CounterClass extends React.Component<CounterProps, CounterState> {
  getInitialProps(): InitialCounterProps {
    return {
      initialCount: this.props.initialCount ? this.props.initialCount : 0,
      step: this.props.step ? this.props.step : 1,
    }
  }

  state: CounterState = {
    value: this.getInitialProps().initialCount,
  }

  increment() {
    const { step } = this.getInitialProps()

    this.setState({
      ...this.state,
      value: this.state.value + step,
    })
  }

  render() {
    const { value } = this.state
    const { step, initialCount } = this.getInitialProps()
    const increment = this.increment.bind(this)

    return (
      <div>
        <h1>Count from CounterClass: {value}</h1>
        <p>Step: {step}</p>
        <p>Initial Count: {initialCount}</p>
        <button onClick={increment}>Increment</button>
      </div>
    )
  }
}

export default CounterClass
