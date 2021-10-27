import React from 'react'

type HeadingProps = {
  text: string
}

type AsyncAddCallback = (result: number) => void

function asyncAdd(a: number, b: number): Promise<number>
function asyncAdd(a: number, b: number, fn: AsyncAddCallback): void

function asyncAdd(a: number, b: number, fn?: AsyncAddCallback) {
  const result = a + b
  if (fn) new Promise<number>(() => fn(result))
  return new Promise<number>((promise, reject) => {
    promise(result)
  })
}

function Heading(): React.ReactElement
function Heading(props: HeadingProps): React.ReactElement

function Heading(props?: HeadingProps): React.ReactElement {
  asyncAdd(1, 2, (a) => console.log(a))
  asyncAdd(2, 5).then((res) => console.log(res))
  return <h3>{props?.text ? `Text: ${props.text}` : 'No Props'}</h3>
}

export default Heading
