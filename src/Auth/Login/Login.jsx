import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { green } from "@mui/material/colors";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="black"
      color="white"
      p={3}
    >
      {/* Back Arrow */}
      <Box position="absolute" top={16} left={16}>
        <Link to="/">
          <IconButton sx={{ color: green[500] }}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>

      {/* Heading */}
      <Typography variant="h2" fontWeight="bold" mb={3}>
        Log In
      </Typography>

      {/* Welcome Message */}
      <Typography variant="h4" fontWeight="medium" mb={1} textAlign="left">
        Welcome Back, Deer30!
      </Typography>
      <Typography
        variant="h6"
        mb={4}
        textAlign="left"
        color="silver"
        width="520px"
      >
        We are excited to have your back. Log in now and access your account.
      </Typography>

      {/* Username or Email Field */}
      <TextField
        label="Username or Email"
        variant="outlined"
        fullWidth
        sx={{
          bgcolor: "white",
          borderRadius: 1,
          mb: 2,
          width: "520px",
          color: "#4D4D4D",
        }}
        InputProps={{ sx: { color: "black" } }}
        // defaultValue="123@gmail.com"
      />

      {/* Password Field */}
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ bgcolor: "white", borderRadius: 1, mb: 2, width: "520px" }}
        InputProps={{
          sx: { color: "black" },
          endAdornment: (
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          ),
        }}
      />

      {/* Remember Me & Forgot Password */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="520px"
        mb={3}
      >
        <FormControlLabel
          control={<Checkbox sx={{ color: green[500] }} />}
          label={<Typography sx={{ color: "white" }}>Remember me</Typography>}
        />
        <Link to="/resetpassword">
          <Typography variant="body2" color="white" sx={{ cursor: "pointer" }}>
            Forgot your password?
          </Typography>
        </Link>
      </Box>

      {/* Login Button */}
      <Link to="/resetpassword">
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: green[500],
            color: "white",
            fontWeight: "bold",
            py: 1,
            borderRadius: 2,
            fontSize: "1.7rem",
            mb: 3,
            textTransform: "none",
            width: "520px",
          }}
        >
          Log In
        </Button>
      </Link>
          <Typography variant="body2" color="white" sx={{ cursor: "pointer", marginBottom: "10px"}} textAlign="center">
              No Account ? <Link to="/signup" className="log-button">SignUp</Link>
          </Typography>

      {/* Divider with "or" */}
      <Divider sx={{ width: "520px", bgcolor: "#4D4D4D", mb: 3 }}>OR</Divider>

      {/* Social Login Buttons */}
      <Box display="flex" justifyContent="center" gap={2}>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "#4D4D4D",
            px: 8.5,
            py: 1,
            borderRadius: 1,
          }}
        >
          <GoogleIcon />
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "#4D4D4D",
            px: 8.5,
            py: 1,
            borderRadius: 1,
          }}
        >
          <FacebookIcon />
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "#4D4D4D",
            px: 8.5,
            py: 1,
            borderRadius: 1,
          }}
        >
          <AppleIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
