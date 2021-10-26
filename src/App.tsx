import React, { useState } from 'react'
import { HTMLAttributes } from 'types'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import CounterContextAPI from './components/CounterContextAPI'
import CounterHook from './components/CounterHook'
import CounterReduce from './components/CounterReduce'
import Generic from './components/Generic'

interface AppProps extends HTMLAttributes {}

function App(props: AppProps) {
  return (
    <>
      <Counter firstChild={<p>Hi from firstChild</p>}>
        <p>Hello from parent !</p>
      </Counter>
      <hr />
      <CounterClass step={2} />
      <CounterClass initialCount={5} />
      <hr />
      <CounterHook />
      <hr />
      <CounterReduce />
      <hr />
      <CounterContextAPI />
      <hr />
      <Generic<number> value={5} />
      <Generic<string> value="Hello world !" />
      <Generic<number> value={90} />
    </>
  )
}

export default App
