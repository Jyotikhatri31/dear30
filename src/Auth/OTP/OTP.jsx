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
      <Typography variant="h2" fontWeight="bold" mb={3} textAlign="center">Forget Password</Typography>

      {/* Subheading */}
      <Typography variant="h4" fontWeight="medium" mb={1} sx={{ textAlign: {xs: 'center', md: 'left'}}}>Verify Your Code</Typography>

      <Typography variant="h6" mb={4} color='silver' maxWidth="520px" sx={{fontFamily: "Poppins, sans-serif" , textAlign: {xs: 'center', md: 'left'}}}>
        Enter the passcode you just received on your email address ending with ********@gmail.com
      </Typography>

      {/* OTP Input Boxes */}
      <Box display="flex" justifyContent="center" sx={{gap: {xs: 2, md: 8}}} mb={4}>
        {[0, 1, 2, 3].map((index) => (
          <TextField key={index} variant="outlined" inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: '2.2rem', padding: {xs: '10px 14px', md: '15px 14px'}, color: 'white'}}} sx={{ bgcolor: 'black', borderColor: green[500], width: {xs: '65px', md: '80px'}, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: green[500], borderRadius: 1 , }, '&:hover fieldset': { borderColor: green[500],},},}}/>
        ))}
      </Box>

      {/* Submit Button */}
      <Link to="/changepassword">
        <Box sx={{ display: 'inline-block', p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mb: 3 }}>
          <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'none', borderRadius: 2, px: 2, width: {xs:"350px",md:"520px"} }}>Submit</Button>
        </Box>
      </Link>
    </Box>
  );
}

export default OTP;
