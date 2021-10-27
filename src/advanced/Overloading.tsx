import React from 'react'

type HeadingProps = {
  text: string
}

function Heading(): React.ReactElement
function Heading(props: HeadingProps): React.ReactElement

function Heading(props?: HeadingProps): React.ReactElement {
  return <h3>{props?.text ? `Text: ${props.text}` : 'No Props'}</h3>
}

export default Heading
