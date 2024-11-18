import React from 'react';
import { Typography, Button, Box, Container, TextField} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";
import img1 from "../Images/contact.png";

function ContactUs() {
  return (
    <Box sx={{backgroundColor: '#000'}}>
      <Box className="prod-header">
        <Container maxWidth={false} className="container center-content" sx={{flexDirection: 'column'}}>
          <Typography variant="h3" sx={{fontWeight: 'bold'}}>Get in touch</Typography>
          <Typography variant='h6'>Reach out, and let's create a universe of possibilities together!</Typography>
        </Container>
      </Box>

      {/* Contact-section */}
      <Box className='center-content'>
        <Container maxWidth={false} className='container' sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' }, backgroundColor: '#111', borderRadius: '16px', my: 4, py: 4 }}>
        {/* Form-section */}
          <Box sx={{flex: 1, color: '#fff'}}>
            <Typography variant='h5' sx={{fontWeight: 'bold'}}>Let’s connect constellations</Typography>
            <Typography variant='body6'>Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</Typography>
            <Box component="form" noValidate sx={{ display: 'grid', gap: 2, mt: 5 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField fullWidth placeholder='First Name' variant='outlined' sx={{bgcolor: '#333', borderRadius: '8px', input: {color: '#fff'}}} />
                <TextField fullWidth placeholder="Last Name" variant="outlined" sx={{ bgcolor: '#333', borderRadius: '8px', input: { color: '#fff' } }} />
              </Box>
              <TextField fullWidth placeholder='Email' variant='outlined' sx={{bgcolor: '#333', borderRadius: '8px', input: {color: '#fff'}}}/>
              <TextField fullWidth placeholder='Phone Number' variant='outlined' sx={{bgcolor: '#333', borderRadius: '8px', input: {color: '#fff'}}}/>
              <TextField fullWidth multiline rows={4} placeholder='Message' variant='outlined' sx={{bgcolor: '#333', borderRadius: '8px', input: {color: '#fff'}}}/>
              <Box sx={{ display: 'inline-block',p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)'}}>
                <Button fullWidth variant="contained" sx={{background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'none', borderRadius: 2, px: 3}}>
                  Send
                </Button>
              </Box>
            </Box>
          </Box>
          {/* Image-section */}
          <Box sx={{flex: 1, borderRadius: '12px', overflow: 'hidden'}} className='center-content'>
            <Box component="img" src={img1} alt="about-1" sx={{ maxHeight: '500px',height: 'intial', width: "450px", objectFit: "cover", marginBottom: "10px"}}/>
          </Box>
        </Container>
      </Box>
      
      <Box sx={{background: 'linear-gradient(90deg, #5FEF45 0%, #51B175 100%)', py: 5}}> 
        <Container maxWidth={false} className='container center-content' sx={{flexDirection: 'column'}}>
          <Typography variant='h3' sx={{color: '#fff', fontWeight: 'bold'}}>Ready to get started?</Typography>
          <Typography variant='h4' sx={{my: 2}}>Talk to us today</Typography>
          <Box sx={{display: 'flex'}}>
            <Link to="/checkout"><Button variant='contained' sx={{ flex: 1, mr: 2, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: 16, color: '#57CA61', backgroundColor: '#fff'}}>Shop Now</Button></Link>
            <Link to="/cart"><Button variant='outlined' color='success' sx={{ flex: 1, ml: 2, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: 10, color: '#fff', border: '2px solid #fff' }}>Dealer Inquiry</Button></Link>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default ContactUs
