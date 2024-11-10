import React from "react";
import { Typography, Button, Box, Container} from "@mui/material";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Slider from "react-slick";
import img1 from "../Images/home-1.png";
import img2 from "../Images/home-2.png";
import img3 from "../Images/home-3.png";
import img4 from "../Images/home-4.png";
import img5 from "../Images/home-5.png";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const products = [
    {
      img: img1,  
      title: "TNT PIPE DREAM LOCK ON",
      price: "280.00",
    },
    {
      img: img2,
      title: "TNT PIPE DREAM LOCK ON",
      price: "280.00",
    },
    {
      img: img3,
      title: "TNT PIPE DREAM LOCK ON",
      price: "280.00",
    },
];

const customers = [
    {
        description:"“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
        img: img4,
        name: "Jane Smith",
        title: "Freelance Designer",
    },
    {
        description:"“I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional",
        img: img4,
        name: "Tom Williams",
        title: "Software Developer",
    },
    {
        description:"I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
        img: img4,
        name: "Michael Brown",
        title: "Online Entrepreneur",
    }
]

const blogs = [
    {
        img: img5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img1: img4,
        name: "Andy Claremont",
        date: "22 Nov 2023"
    },
    {
        img: img5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img1: img4,
        name: "Andy Claremont",
        date: "22 Nov 2023"
    },
    {
        img: img5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img1: img4,
        name: "Andy Claremont",
        date: "22 Nov 2023"
    }
]

function Home() {
      
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
      
  return (
    <Box>
     <Box className="home-sec">
      <Container maxWidth={false} className='container'>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2" gutterBottom sx={{fontSize: '5rem', fontWeight: 'bold'}}>
            Explore, Book, Conquer
          </Typography>
          <Typography variant="h5" gutterBottom>
            Discover premium <span style={{fontWeight: 'bolder'}}>hunting resources</span> and <span style={{fontWeight: 'bolder'}}>top-notch gear</span> effortlessly.
            Your next adventure is just a few clicks away!
          </Typography>
          <Button variant="contained"  sx={{ margin: '20px 20px 0 0', color: '#000', backgroundColor: '#fff', padding: '8px 40px', fontSize: '1.6rem', fontWeight: 'bold', borderRadius: '10px', textTransform: 'initial' }}>
            Book Now!
          </Button>
          <Button variant="outlined" color="secondary" sx={{ margin: '20px 20px 0 0', color: '#fff', backgroundColor: 'none', border: 'none', fontSize: '1.6rem',  fontWeight: 'bold', textTransform: 'initial'}}>
            Dealers Inquiry <KeyboardArrowRightOutlinedIcon sx={{fontSize: '2.5rem'}}/>
          </Button>
          <Box>

          </Box>
        </Box>
        <Box sx={{display: 'flex', marginTop: '40px'}} className="home-icons">
            <Box className="fav-i" sx={{marginRight:'20px'}}>
                <Box><HttpsOutlinedIcon sx={{color: '#77F044', marginRight: '10px', fontSize: '1.9rem'}}/></Box>
                <Typography sx={{fontWeight: 'bold'}}>Protected <br/>Payment Gateway</Typography>
            </Box>
            <Box className="fav-i" sx={{marginRight:'20px'}}>
                <Box><FavoriteBorderOutlinedIcon sx={{color: '#77F044', marginRight: '10px', fontSize: '1.9rem'}}/></Box>
                <Typography sx={{fontWeight: 'bold'}}>Easy <br/>to Use Platform</Typography>
            </Box>
            <Box className="fav-i">
                <Box><SpeedIcon sx={{color: '#77F044', marginRight: '10px', fontSize: '1.9rem'}}/></Box>
                <Typography sx={{fontWeight: 'bold'}}>Fast <br/>Bank Transfers</Typography>
            </Box>
        </Box>
      </Container>
     </Box>
     {/* Product-Sec */}
     <Box className="products-sec section" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4 }}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: '2.5rem'}}/></span> Our Latest Products
            </Typography>

            <Slider {...settings}>
                {products.map((product, index) => (
                <Box key={index} sx={{ padding: "10px", textAlign: "center" }}>
                    <Box component="img" src={product.img} alt={product.title} sx={{ height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px", marginBottom: "10px",}}/>
                    <Box display="flex" justifyContent="center" sx={{ color: "#FFDD44", mb: 1 }}>
                        {[...Array(5)].map((_, i) => (
                            i < 4 ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
                        ))}
                    </Box>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                        {product.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white" }}>
                        Regular price ${product.price}
                    </Typography>
                </Box>
                ))}
            </Slider>
            
          </Box>
        </Container>
     </Box>
     {/* Third-Sec */}
     <Box className="third-sec" />
     {/* Customer-Sec */}
     <Box className="customer-Sec section" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4 }}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: '2.5rem'}}/></span> Customers Reviews
            </Typography>

            <Slider {...settings} className="customer-reviews-slider">
                {customers.map((customer, index) => (
                <Box key={index} sx={{ padding: "30px", textAlign: "center", border: '2px solid #FFFFFF', height: '450px', width: '400px', borderRadius: '10px', background: 'linear-gradient(135deg, #1c1c1c 0%, #333 100%)', mx: '2' }}>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      {customer.description}
                    </Typography>
                    <Box display="flex" justifyContent="center" sx={{ color: "#FFDD44", my: 2 }}>
                        {[...Array(5)].map((_, i) => (
                            i < 4 ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
                        ))}
                    </Box>
                    <Box component="img" src={customer.img} alt={customer.title} sx={{ height: "50px", width: "50px", objectFit: "cover", borderRadius: "50%", marginBottom: "10px", mx: 'auto'}}/>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                        {customer.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "silver" }}>
                        {customer.title}
                    </Typography>
                </Box>
                ))}
            </Slider>
            
          </Box>
        </Container>
     </Box>
     {/* Blog-Sec */}
     <Box className="blog-sec section" sx={{backgroundColor: "#000"}}>
        <Container maxWidth={false} className='container'>
          <Box>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 4 }}>
                <span style={{ marginRight: "10px" }}><GpsFixedIcon sx={{ fontSize: '2.5rem'}}/></span> Latest Blogs
            </Typography>

            <Slider {...settings}>
                {blogs.map((blog, index) => (
                <Box key={index} sx={{ padding: "10px", textAlign: "left" }}>
                    <Box component="img" src={blog.img} alt={blog.title} sx={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "10px", marginBottom: "10px",}}/>
                    <Typography variant="h6" sx={{ color: "#F3B2D5", backgroundColor: '#381E2C', height: '40px', width: '80px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0'}}>News</Typography>
                    <Typography variant="h5" sx={{ color: "white", fontWeight: '600', margin: '20px 0' }}>Tagline</Typography>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "500" }}>
                        {blog.description}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white", display: "flex", alignItems: "center", mt: 2 }}>
                        <Box component="img" src={blog.img1} alt={blog.title} sx={{ height: "30px", width: "30px", objectFit: "cover", borderRadius: "10px", marginRight: "10px"}}/>
                        {blog.name} <span style={{color: '#96969E', marginLeft: '10px'}}>{blog.date}</span>
                    </Typography>
                </Box>
                ))}
            </Slider>
            
          </Box>
        </Container>
     </Box>
    </Box>
  );
}


const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <Box onClick={onClick} sx={{ position: "absolute", top: "50%", right: "10px"}} className="arrows">
        <KeyboardArrowRightOutlinedIcon sx={{fontSize: "3rem"}}/>
      </Box>
    );
};
  

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Box onClick={onClick} sx={{ position: "absolute", top: "50%", left: "10px",}} className="arrows">
        <KeyboardArrowRightOutlinedIcon sx={{ transform: "rotate(180deg)", fontSize: "3rem" }} />
      </Box>
    );
};

export default Home;
