import React from 'react';
import { Typography, Button, Box, Container } from "@mui/material";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Link } from "react-router-dom";

function OrderTracking() {
  return (
    <Box sx={{ backgroundColor: '#000', minHeight: '75vh', py: 4 }} className="center-content">
      <Container maxWidth={false} className="container">
        <Box sx={{ color: '#fff', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Typography variant='h4' sx={{ mb: 2 }}>Order ID: 3354654654526</Typography>

          {/* Order Date and Estimated Delivery */}
          <Typography variant='h6' sx={{ mb: 10 }}>Order Date: <span style={{ fontWeight: 'bold' }}>Jan 1, 2024</span> <span style={{margin: '0 10px'}}>|</span> 
            <span style={{ color: '#5FEF45', alignItems: 'center', ml: 1 }}>
              <LocalShippingOutlinedIcon sx={{ mr: 0.5 }} /> Estimated delivery: Jan 5th, 2024
            </span>
          </Typography>

          {/* Order Progress */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 4, width: '100%' }}>
            {['Order Confirmed', 'Shipped', 'Out For Delivery', 'Delivered'].map((status, index) => (
              <Box key={index} sx={{ textAlign: 'center', flex: 1, position: 'relative' }}>
                <Typography variant="h6" sx={{ fontWeight: index === 0 ? 'bold' : 'normal', color: index === 0 ? '#5FEF45' : '#aaa' }}>
                  {status}
                </Typography>
                <Box sx={{ width: 25, height: 25, borderRadius: '50%', backgroundColor: index === 0 ? '#5FEF45' : '#777', mx: 'auto', my: 1}} />
                <Typography variant="h6" sx={{ color: '#aaa' }}>
                  {index === 0 ? 'Wed, 1st Jan' : index === 1 ? 'Wed, 1st Jan' : index === 2 ? 'Wed, 2st Jan' : 'Expected by Sat, 5th Jan'}
                </Typography>
                {/* Horizontal line */}
                {index < 3 && (
                  <Box sx={{ position: 'absolute', top: '50px', left: '50%', right: '-50%', height: '5px', backgroundColor: '#777'}} />
                )}
              </Box>
            ))}
          </Box>

          {/* Back Button */}
          <Box sx={{ display: 'inline-block', p: '2px', borderRadius: 2, background: 'linear-gradient(90deg, #78FF00 0%, #fff 100%)', mt: 3 }}>
            <Link to="/paymentmessage">
              <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #599D21 0%, #179B7E 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.3rem', textTransform: 'none', borderRadius: 2, px: 10}}>
                Back
              </Button>
            </Link>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default OrderTracking;
