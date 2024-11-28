import React from "react";
import {Box,Typography,TextField,Button,IconButton,FormControlLabel,Checkbox,Divider,} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { green } from "@mui/material/colors";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="black" color="white" p={3}>
      {/* Back Arrow */}
      <Box position="absolute" top={16} left={16}>
        <Link to="/">
          <IconButton sx={{ color: green[500] }}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>

      {/* Heading */}
      <Typography variant="h2" fontWeight="bold" mb={3}>Log In</Typography>

      {/* Welcome Message */}
      <Typography variant="h4" fontWeight="medium" mb={1} textAlign="center">Welcome Back, Deer30!</Typography>
      <Typography variant="h6" mb={4} textAlign="center" color="silver" maxWidth="520px">
        We are excited to have your back. Log in now and access your account.
      </Typography>

      {/* Username or Email Field */}
      <TextField label="Username or Email" variant="outlined" fullWidth sx={{ bgcolor: "white", borderRadius: 1, mb: 2, maxWidth: "520px", color: "#4D4D4D"}} InputProps={{ sx: { color: "black" } }}/>
      {/* Password Field */}
        <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ bgcolor: "white", borderRadius: 1, mb: 2, maxWidth: "520px" }} InputProps={{ sx: { color: "black" },endAdornment: (
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          ),
        }}
      />

      {/* Remember Me & Forgot Password */}
      <Box display="flex" alignItems="center" justifyContent="space-between" maxWidth="520px" width="100%" mb={3}>
        <FormControlLabel control={<Checkbox sx={{ color: green[500] }} />} label={<Typography sx={{ color: "white" }}>Remember me</Typography>}/>
        <Link to="/resetpassword">
          <Typography variant="body2" color="white" sx={{ cursor: "pointer" }}>Forgot your password?</Typography>
        </Link>
      </Box>

      {/* Login Button */}
      <Link to="/resetpassword">
        <Box sx={{ display: 'inline-block', p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mb: 3 }}>
          <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'none', borderRadius: 2, px: 3, width: {xs:"350px",md:"520px"} }}>Log In</Button>
        </Box>
      </Link>
      
      <Typography variant="body2" color="white" sx={{ cursor: "pointer", marginBottom: "10px"}} textAlign="center">
        No Account ? <Link to="/signup" className="log-button">SignUp</Link>
      </Typography>

      <Divider sx={{ maxWidth: "520px", width: "100%", bgcolor: "#4D4D4D", mb: 3 }}>OR</Divider>

      {/* Social Login Buttons */}
      <Box display="flex" justifyContent="center" gap={2}>
        <Button variant="outlined" sx={{ color: "white", borderColor: "#4D4D4D", px: {xs: 5,md: 8.5}, py: 1, borderRadius: 1,}}>
          <GoogleIcon />
        </Button>
        <Button variant="outlined" sx={{ color: "white", borderColor: "#4D4D4D", px: {xs: 5,md: 8.5}, py: 1, borderRadius: 1,}}>
          <FacebookIcon />
        </Button>
        <Button variant="outlined" sx={{ color: "white", borderColor: "#4D4D4D", px: {xs: 5,md: 8.5}, py: 1, borderRadius: 1,}}>
          <AppleIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
