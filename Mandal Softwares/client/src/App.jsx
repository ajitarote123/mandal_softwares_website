
import './App.css';
import { Box } from '@chakra-ui/react';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import GoogleAnalytics from './components/GoogleAnalytics';
import GoogleTagManager from './components/GoogleTagManager';



function App() {


  useEffect(()=>{
    Aos.init({ 
      duration: 600,
      once: true
    })
 },[])

 useEffect(()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
});
}, [])




  return (
    <Box h={"100%"} w="100%" bg={"gray.100"} className="App">

       {/* Google Tag Manager for Analytics this script will added to Every html page  */}
      <GoogleAnalytics/>
  
     
      <Navbar/> 

      <AllRoutes  />
      <Footer/>
    
    </Box>

  );
}

export default App;


 //npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
  // npm i react-router-dom
  // npm install react-icons --save
  
  ////****** SLIDER both install   /////////
  // npm install react-slick --save
  // npm install slick-carousel --save
  /////////  /////////  /////////  /////////

  //npm i @chakra-ui/icons
// npm install aos --save


// npm i react-alice-carousel

// trigger event on scroll
// npm i react-intersection-observer

// npm i emailjs-com  formik yup


// npm i react-helmet