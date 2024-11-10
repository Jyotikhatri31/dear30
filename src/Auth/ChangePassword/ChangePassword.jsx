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

      {/* Heading */}
      <Typography variant="h2" fontWeight="bold" mb={3}>
        Reset Password
      </Typography>

      {/* Subheading */}
      <Typography variant="h4" fontWeight="medium" mb={1}>
        Change Password
      </Typography>
      <Typography variant="body2" mb={4} textAlign="left" width="520px">
        Type your new strong password. Your password must include:
        <ul style={{ marginTop: '8px' }}>
          <li>One capital letter & one small letter at least</li>
          <li>One special character</li>
          <li>Minimum 8 digits long</li>
        </ul>
      </Typography>

      {/* Password and Confirm Password Fields */}
      <Box display="flex" flexDirection="column" gap={2} mb={4} width="100%" maxWidth="520px">
        <TextField
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          InputProps={{
            style: { color: 'white' },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end" sx={{ color: 'white' }}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
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
            },
          }}
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
            },
          }}
        />
      </Box>

      {/* Reset Button */}
      <Link to="/login">
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
          width: '520px',
        }}
      >
        Reset
      </Button>
      </Link>
    </Box>
  );
}

export default ChangePassword;
