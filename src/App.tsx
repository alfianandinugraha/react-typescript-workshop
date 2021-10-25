import React, { useState } from 'react'
import { HTMLAttributes } from 'types'
import Counter from './components/Counter'

interface AppProps extends HTMLAttributes {}

function App(props: AppProps) {
  return (
    <Counter>
      <p>Hello from parent !</p>
    </Counter>
  )
}

export default App
