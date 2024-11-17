import { TextField } from '@mui/material'

const Input = ( { className,...props } ) => {
  return (
    <TextField className={ `w-full ${className}` }
      { ...props }
    />
  )
}

export default Input