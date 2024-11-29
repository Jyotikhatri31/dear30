import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';

function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="black" color="white" p={3}>
      {/* Back Arrow */}
      <Box position="absolute" top={16} left={16}>
        <Link to="/otp">
        <IconButton sx={{ color: green[500] }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        </Link>
      </Box>

      <Typography variant="h2" fontWeight="bold" mb={3} sx={{fontFamily: "Poppins, sans-serif"}}>Reset Password</Typography>
      <Typography variant="h4" fontWeight="medium" textAlign="left" mb={1} sx={{fontFamily: "Poppins, sans-serif"}}>Change Password</Typography>
      <Typography variant="h6" mb={4} textAlign="left" maxWidth="520px" width="100%"  color="silver" sx={{fontFamily: "Poppins, sans-serif"}} >
        Type your new strong password. Your password must include:
        <ul style={{ marginTop: '8px' }}>
          <li>One capital letter & one small letter at least</li>
          <li>One special character</li>
          <li>Minimum 8 digits long</li>
        </ul>
      </Typography>

      {/* Password and Confirm Password Fields */}
      <Box display="flex" flexDirection="column" gap={2} mb={4} width="100%" maxWidth="520px">
        <TextField variant="outlined" type={showPassword ? 'text' : 'password'} label="Password" InputProps={{ style: { color: 'white' }, endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end" sx={{ color: 'white' }}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ bgcolor: 'black', '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: green[500],},'&:hover fieldset': {borderColor: green[500],},},'& .MuiInputLabel-root': {color: 'white',fontFamily: "Poppins, sans-serif",},}}
        />
        <TextField
          variant="outlined"
          type={showConfirmPassword ? 'text' : 'password'}
          label="Confirm Password"
          InputProps={{
            style: { color: 'white' },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleConfirmPasswordVisibility} edge="end" sx={{ color: 'white' }}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            bgcolor: 'black',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: green[500],
              },
              '&:hover fieldset': {
                borderColor: green[500],
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white',
              fontFamily: "Poppins, sans-serif",
            },
          }}
        />
      </Box>

      {/* Reset Button */}
      <Link to="/login">
        <Box sx={{ display: 'inline-block', p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mb: 3 }}>
          <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'none', borderRadius: 2, px: 2, width: {xs:"350px",md:"520px"} }}>Reset</Button>
        </Box>
      </Link>
    </Box>
  );
}

export default ChangePassword;
