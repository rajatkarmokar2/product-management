import { Button as MuiButton } from '@mui/material'

const Button = ( { children,className,...props } ) => {
  return (
    <MuiButton className={ `!min-w-0 transition-all font-medium rounded ${className}` }  { ...props } >{ children }</MuiButton>
  )
}

export default Button