import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';

function OTP() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="black" color="white" p={3}>
      {/* Back Arrow */}
      <Box position="absolute" top={16} left={16}>
      <Link to="/resetpassword">
        <IconButton sx={{ color: green[500] }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        </Link>
      </Box>

      {/* Heading */}
      <Typography variant="h2" fontWeight="bold" mb={3}>
        Forget Password
      </Typography>

      {/* Subheading */}
      <Typography variant="h4" fontWeight="medium" mb={1}>
        Verify Your Code
      </Typography>
      <Typography variant="body2" mb={4} textAlign="center" width="520px">
        Enter the passcode you just received on your email address ending with ********@gmail.com
      </Typography>

      {/* OTP Input Boxes */}
      <Box display="flex" justifyContent="center" gap={2} mb={4}>
        {[0, 1, 2, 3].map((index) => (
          <TextField
            key={index}
            variant="outlined"
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: 'center',
                fontSize: '2rem',
                padding: '10px 14px',
                color: 'white'
              }
            }}
            sx={{
              bgcolor: 'black',
              borderColor: green[500],
              width: '60px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: green[500],
                  borderRadius: 1,
                },
                '&:hover fieldset': {
                  borderColor: green[500],
                },
              },
            }}
          />
        ))}
      </Box>

      {/* Submit Button */}
      <Link to="/changepassword">
      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: green[500],
          color: 'white',
          fontWeight: 'bold',
          py: 1.5,
          borderRadius: 2,
          fontSize: '1.2rem',
          textTransform: 'none',
          width: '520px'
        }}
      >
        Submit
      </Button>
      </Link>
    </Box>
  );
}

export default OTP;
