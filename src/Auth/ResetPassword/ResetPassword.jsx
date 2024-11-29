import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { green } from '@mui/material/colors';
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
      <Typography variant="h2" fontWeight="bold" mb={3} sx={{fontFamily: "Poppins, sans-serif", textAlign: 'center'}}>Forget Password</Typography>

      <Typography variant="h4" fontWeight="medium" mb={3} sx={{fontFamily: "Poppins, sans-serif", textAlign: {xs: 'left', md: 'center'}}}>Reset Password</Typography>

      {/* Welcome Message */}
      <Typography variant="h6" fontWeight="medium" mb={1} color='silver' textAlign="left" maxWidth="520px" sx={{fontFamily: "Poppins, sans-serif"}}>We have send an otp on your registered email address/mobile number</Typography>

      {/* Username or Email Field */}
      <Box display="flex" flexDirection="column" width="100%" maxWidth="520px">
        <TextField variant="outlined" label="Full Name" InputProps={{ style: { color: "white" },}} sx={{ mb: 2, bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500],},"&:hover fieldset": {borderColor: green[500],},},"& .MuiInputLabel-root": {color: "white", fontFamily: "Poppins, sans-serif"},}}/>
      </Box>

      {/* ResetPassword Button */}
      <Link to="/otp">
        <Box sx={{ display: 'inline-block', p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mb: 3 }}>
          <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'none', borderRadius: 2, px: 2, width: {xs:"350px",md:"520px"} }}>Submit</Button>
        </Box>
      </Link>

    </Box>
  );
}

export default ResetPassword;
