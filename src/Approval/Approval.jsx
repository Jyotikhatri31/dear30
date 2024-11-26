import React from 'react';
import { Typography, Button, Box, Container} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";

function Approval() {
  return (
    <Box>
    <Box className="dealers-header">
      <Container maxWidth={false} className="container">
        <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          Home <ArrowForwardIosOutlinedIcon sx={{margin: '0 10px'}}/> <span style={{fontWeight: 'bold'}}>Dealers</span>
        </Typography>
      </Container>
    </Box>
    <Box sx={{padding: '150px 0', backgroundColor: '#000', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
      <Container maxWidth={false} className="container">
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{textAlign: 'center', flex: '1', position: 'relative'}}>
          <Box sx={{height: '3px', backgroundColor: "#5FEF45", width: "calc(100% - 20px)", position: "absolute", top: "68%", left: "230px", zIndex: 0,}}/>
          <Typography variant='h6' sx={{color: '#5FEF45'}}>Request Submitted</Typography>
          <FiberManualRecordIcon sx={{ fontSize: "30px", color: "#5FEF45" }} />
        </Box>

        <Box sx={{textAlign: 'center', flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Box sx={{height: '3px', backgroundColor: "#5FEF45", width: "135%", position: "absolute", top: "70%", left: "0"}}/>
            <Typography variant="h6" sx={{ color: "#5FEF45"}}>Approval</Typography>
            <CheckCircleIcon sx={{ fontSize: "30px", color: "#5FEF45"}}/>
          {/* </Box> */}
        </Box>

        <Box sx={{textAlign: "center", flex: 1, position: "relative", display: "flex", flexDirection: "column", alignItems: "center",}}>
          {/* <Box sx={{height: "3px", backgroundColor: "#5FEF45", width: "100%", position: "relative", bottom: '300px', right: '20px',display: 'flex', alignItems: 'center'}}/> */}
          <Typography variant="body6" sx={{ mb: 1 }}>Create Dealer Account</Typography>
          <Link to="/signup"><Button variant="contained" sx={{background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'none', borderRadius: 2, px: 6}}>
            Sign Up
          </Button></Link>
        </Box>
        </Box>
      </Container>
    </Box>
    </Box>
  )
}

export default Approval
