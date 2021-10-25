import React, { useState } from 'react'
import { HTMLAttributes } from 'types'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import CounterHook from './components/CounterHook'

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
    </>
  )
}

export default App
