import React from 'react'

type TextTag = Extract<keyof JSX.IntrinsicElements, 'p' | 'a' | 'h1' | 'h2'>

type TextProps<T extends TextTag> = {
  as?: T
  onClickText?: () => void
} & JSX.IntrinsicElements[T]

function Text<T extends TextTag>(props: TextProps<T>) {
  const TagName: React.ElementType = props.as ? props.as : 'p'
  const tagProps = { ...props }
  delete tagProps.onClickText

  return (
    <TagName
      {...tagProps}
      onClick={() => props.onClickText && props.onClickText()}
    />
  )
}

const Polymorphic = (): React.ReactElement => {
  return (
    <>
      <Text as="a" id="string" href="a">
        Hello from 'a'
      </Text>
      <Text
        as="p"
        onClickText={() => {
          console.log('Clicking !')
        }}
      >
        Hello from 'p'
      </Text>
      <Text as="h1">Hello from 'p'</Text>
    </>
  )
}

export default Polymorphic
