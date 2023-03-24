import { Image, Stack } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";


const AutoPlay = ({images}) => {

  
    const settings = {
         dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2050,
        autoplaySpeed: 0,
        cssEase: "linear"
      };

      return (
        <Stack  
        maxW={{base:"250px" , sm:"600px", md:"630px" ,  lg:"900px" ,  xl:"1200px"}}
      >
         
          <Slider style={{gap:"20px"}} {...settings }>
           {
            images.map((el)=>(
                <Stack>
                    <Image width={{base:"50px", md:"100px", xl:"100px"}} src={el} />
                </Stack>
            ))
           }
          </Slider>
        </Stack>
      );
}

export default AutoPlay

