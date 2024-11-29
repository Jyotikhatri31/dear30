import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton, InputAdornment, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from "@mui/icons-material/Apple";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleTogglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="black" color="white" p={3}>
      <Box position="absolute" top={16} left={16}>
        <Link to="/login">
          <IconButton sx={{ color: green[500] }}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>

      <Typography variant="h2" fontWeight="bold" mb={3} sx={{fontFamily: "Poppins, sans-serif"}}>Sign Up</Typography>

      <Typography variant="h4" fontWeight="medium" mb={1} sx={{fontFamily: "Poppins, sans-serif"}}>Register</Typography>
      <Typography variant="h6" mb={4} textAlign="left" maxWidth="520px" color="silver" sx={{fontFamily: "Poppins, sans-serif"}}>
        Ready to become part of the exclusive club? Fill in the details below, and let the journey begin!
      </Typography>

      <Box display="flex" flexDirection="column" gap={2} mb={4} width="100%" maxWidth="520px">
        <TextField variant="outlined" label="Full Name" InputProps={{ style: { color: "white" },}} sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500],},"&:hover fieldset": {borderColor: green[500],},},"& .MuiInputLabel-root": {color: "white",fontFamily: "Poppins, sans-serif",},}}/>
        <TextField variant="outlined" label="Email Address" InputProps={{ style: { color: "white" },}} sx={{ bgcolor: "black","& .MuiOutlinedInput-root": {"& fieldset": {borderColor: green[500],},"&:hover fieldset": {borderColor: green[500],},},"& .MuiInputLabel-root": {color: "white",fontFamily: "Poppins, sans-serif",},}}/>
        <TextField variant="outlined" type={showPassword ? "text" : "password"} label="Password" InputProps={{ style: { color: "white" }, endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility} edge="end" sx={{ color: "white" }}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
          ),}}
          sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500],}, "&:hover fieldset": {borderColor: green[500],},},"& .MuiInputLabel-root": {color: "white",fontFamily: "Poppins, sans-serif",},}}/>
        <TextField variant="outlined" type={showConfirmPassword ? "text" : "password"} label="Confirm Password" InputProps={{ style: { color: "white" }, endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleConfirmPasswordVisibility} edge="end" sx={{ color: "white" }}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
          ),}}
          sx={{ bgcolor: "black", "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: green[500],},"&:hover fieldset": {borderColor: green[500],},},"& .MuiInputLabel-root": {color: "white",fontFamily: "Poppins, sans-serif",},}}/>
      </Box>

      <Link to="/login">
        <Box sx={{ display: 'inline-block', p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mb: 1 }}>
          <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'none', borderRadius: 2, px: 2, width: {xs:"350px",md:"520px"} }}>Register</Button>
        </Box>
      </Link>

      <Typography variant="body6" color="white" sx={{ cursor: "pointer", my: "15px", fontFamily: "Poppins, sans-serif"}} textAlign="center">
        Already Account ? <Link to="/login" className="log-button">Log In</Link>
      </Typography>

      <Divider sx={{ maxWidth: "520px", width: "100%", bgcolor: "#4D4D4D", mb: 3 }}>OR</Divider>

      <Box display="flex" justifyContent="center" gap={2}>
        <Button variant="outlined" sx={{ color: "white", borderColor: "#4D4D4D", px: {xs: 5,md: 8.5}, py: 1, borderRadius: 1,}}>
          <GoogleIcon sx={{color: '#EA4335', fontSize: '1.8rem'}}/>
        </Button>
        <Button variant="outlined" sx={{ color: "white", borderColor: "#4D4D4D", px: {xs: 5,md: 8.5}, py: 1, borderRadius: 1,}}>
          <FacebookOutlinedIcon sx={{color: '#1877F2', backgroundColor: '#fff', borderRadius: '50%', fontSize: '1.8rem'}} />
        </Button>
        <Button variant="outlined" sx={{ color: "white", borderColor: "#4D4D4D", px: {xs: 5,md: 8.5}, py: 1, borderRadius: 1,}}>
          <AppleIcon sx={{fontSize: '1.8rem'}}/>
        </Button>
      </Box>
    </Box>
  );
}

export default SignUp;
