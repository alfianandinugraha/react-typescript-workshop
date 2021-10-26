import React from 'react'

type ButtonVariantProps =
  | {
      variant: 'primary' | 'secondary'
      disabled?: boolean
    }
  | {
      variant: 'error'
    }

type ButtonProps = ButtonVariantProps & React.HTMLAttributes<HTMLDivElement>

const Button = (props: ButtonProps) => {
  if (props.variant === 'error') return <button>Button {props.variant}</button>
  return <button disabled={props.disabled}>Button {props.variant}</button>
}

const LimitingProps = (): React.ReactElement => {
  return (
    <>
      {/* Only variant 'primary' and 'secondary' have disabled prop's */}
      <Button variant="error" />
      <Button variant="primary" disabled />
      <Button variant="secondary" disabled />
    </>
  )
}

export default LimitingProps
