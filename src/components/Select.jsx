import { MenuItem,Select as MuiSelect } from "@mui/material"

const Select = ({children,className,...props}) => {
  return (
    <MuiSelect className={`shadow-input ${className}`} {...props}>{children}</MuiSelect>
  )
}

export default Select

