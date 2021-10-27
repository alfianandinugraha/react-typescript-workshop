import React, { useState } from 'react'
import { HTMLAttributes } from 'types'
import LimitingProps from './advanced/LimitingProps'
import Heading from './advanced/Overloading'
import Polymorphic from './advanced/Polymorphic'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import CounterContextAPI from './components/CounterContextAPI'
import CounterHOC from './components/CounterHOC'
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
      <hr />
      <CounterHOC initialValue={99} />
      <hr />
      <LimitingProps />
      <hr />
      <Polymorphic />
      <hr />
      <h1>Overloading Function</h1>
      <Heading text="Hello" />
      <Heading />
    </>
  )
}

export default App
