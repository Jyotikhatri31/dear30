import React from 'react';
import { Typography, Button, Box, Container} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import img3 from "../Images/service-1.png";
import img2 from "../Images/service-2.png";
import img1 from "../Images/service-3.png";
import { Link } from "react-router-dom";

const service = [
    {
      img: img1,  
      title: "Bulk Purchasing",
      description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful, Lorem ipsum dolor sit amet.",
    },
    {
      img: img2,
      title: "Farm Management",
      description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful, Lorem ipsum dolor sit amet.",
    },
    {
      img: img3,
      title: "Dealer Partnership",
      description: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful, Lorem ipsum dolor sit amet.",
    },
];

function Service() {
  return (
    <Box>
      <Box className="service-header">
        <Container maxWidth={false} className="container">
          <Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Home <ArrowForwardIosOutlinedIcon sx={{margin: '0 10px'}}/> <span style={{fontWeight: 'bold'}}>Services</span>
          </Typography>
        </Container>
      </Box>

      <Box sx={{backgroundColor: '#000', color: '#fff', py: 5}}>
        <Container maxWidth={false} className='container'>
          {service.map((service, idx) => (
            <Box key={idx} sx={{display: 'flex', py: 3}}>
              <Box component="img" src={service.img} alt={service.title} sx={{ height: "200px", width: "40%", objectFit: "cover", borderRadius: "10px", marginBottom: "10px", mr: 5}}/>
               <Box className="center-content" sx={{flexDirection: 'column', alignItems: 'flex-start', width: '50%'}}>
                 <Typography variant='h4' sx={{fontWeight: 'bold', mb: 2}}>{service.title}</Typography>
                 <Typography variant='body6'>{service.description}</Typography>
               </Box>
               <Box className="center-content" sx={{width: '10%'}}>
                  <Typography sx={{height: '60px', width: '60px', backgroundColor: '#5FEF45', borderRadius: '50px'}} className='center-content'><ArrowForwardIosOutlinedIcon sx={{fontSize: '2.2rem', fontWeight: 'bold'}}/></Typography>
               </Box>
            </Box>
          ))}
        </Container>
      </Box>

      <Box sx={{background: 'linear-gradient(90deg, #5FEF45 0%, #51B175 100%)', py: 5}}> 
        <Container maxWidth={false} className='container center-content' sx={{flexDirection: 'column'}}>
          <Typography variant='h3' sx={{color: '#fff', fontWeight: 'bold'}}>Ready to get started?</Typography>
          <Typography variant='h4' sx={{my: 2}}>Talk to us today</Typography>
          <Box sx={{display: 'flex'}}>
            <Link to="/checkout"><Button variant='contained' sx={{ flex: 1, mr: 2, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: 16, color: '#57CA61', backgroundColor: '#fff'}}>Contact Us</Button></Link>
            <Link to="/cart"><Button variant='outlined' color='success' sx={{ flex: 1, ml: 2, textTransform: 'initial', fontSize: '1.3rem', fontWeight: 'bold', px: 10, color: '#fff', border: '2px solid #fff' }}>Submit Inquiry</Button></Link>
          </Box>
        </Container>
      </Box>

    </Box>
  )
}

export default Service;
