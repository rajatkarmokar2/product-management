import React from 'react'
import { Logo } from '../assets'
import Text from './Text'

const Header = () => {
  return (
    <header className='flex items-center gap-4 px-5 py-3 border-b border-b-border'>
      <img className='' src={ Logo } />
      <Text className='font-semibold' color='mediumGrey'>Monk Upsell & Cross-sell</Text>
    </header>
  )
}

export default Header