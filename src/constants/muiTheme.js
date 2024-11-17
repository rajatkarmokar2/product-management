import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize primary color
    },
    secondary: {
      main: '#9c27b0', // Customize secondary color
    },
    success: {
      main: '#008060', // Customize secondary color
    },
  },
  typography: {
    button: {
      textTransform: 'none', // Remove uppercase styling
      fontSize: '1rem', // Adjust font size
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // root: {
        //   borderRadius: '8px', // Rounded corners
        //   padding: '8px 16px', // Adjust padding
        //   boxShadow: 'none', // Remove default shadow
        //   '&:hover': {
        //     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Add custom hover shadow
        //   },
        // },
        // containedPrimary: {
        //   backgroundColor: '#000060', // Override contained primary button
        //   color: '#fff',
        //   '&:hover': {
        //     backgroundColor: '#388e3c', // Darker shade on hover
        //   },
        // },
        outlined: {
            borderWidth: '2px',
        //   borderColor: '#1976d2', // Custom border color for outlined button
        //   color: '#1976d2',
        //   '&:hover': {
        //     borderColor: '#1565c0', // Darker shade on hover
        //     backgroundColor: 'rgba(21, 101, 192, 0.1)', // Light background on hover
        //   },
        },
      },
    },
  },
});

