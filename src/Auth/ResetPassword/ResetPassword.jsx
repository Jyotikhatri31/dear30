import React from 'react';
import { Box, Typography, TextField, Button, IconButton, FormControlLabel, Checkbox, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { green } from '@mui/material/colors';
import "./resetpassword.css";
import { Link } from 'react-router-dom';

function ResetPassword() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="black" color="white" p={3}>
      {/* Back Arrow */}
      <Box position="absolute" top={16} left={16}>
        <Link to="/login">
        <IconButton sx={{ color: green[500] }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        </Link>
      </Box>

      {/* Heading */}
      <Typography variant="h2" fontWeight="bold" mb={3}>
        Forget Password
      </Typography>

      <Typography variant="h4" fontWeight="bold" mb={3}>
        Reset Password
      </Typography>

      {/* Welcome Message */}
      <Typography variant="h6" fontWeight="medium" mb={1} textAlign="left" width="520px">
        We have send an otp on your registered email address/mobile number
      </Typography>

      {/* Username or Email Field */}
      <TextField
        label="Email Address"
        variant="outlined"
        fullWidth
        sx={{ bgcolor: 'white', borderRadius: 1, mb: 2, width: '520px', color: "#4D4D4D"}}
        InputProps={{ sx: { color: 'black' } }}
      />

      {/* ResetPassword Button */}
      <Link to="/otp">
      <Button variant="contained" fullWidth
        sx={{
          bgcolor: green[500],
          color: 'white',
          fontWeight: 'bold',
          py: 1,
          borderRadius: 2,
          fontSize: '1.7rem',
          mb: 3,
          textTransform: 'none',
          width: '520px' 
        }}>Submit</Button>
      </Link>
    </Box>
  );
}

export default ResetPassword;
