import React from 'react'

type GenericProps<T> = {
  value: T
}

function Generic<T>(props: GenericProps<T>): React.ReactElement {
  return <h1>Generic. Value: {props.value}</h1>
}

export default Generic
