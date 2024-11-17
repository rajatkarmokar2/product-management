import React from 'react'

let colors={
  mediumGrey:'text-mediumGrey',
}

const Text = ( { children,className,color } ) => {
  return (
    <p className={ ` ${colors[color]} ${className}` }>{ children }</p>
  )
}

export default Text