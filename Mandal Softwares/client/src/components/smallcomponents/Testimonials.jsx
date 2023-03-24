import {
    Container,
    Box,
    chakra,
    Flex,
    Text,
    Stack,
    Avatar,
    SimpleGrid,
    useColorModeValue,
    VStack
  } from '@chakra-ui/react';
import TestimonalCard from './TestimonalCard';

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


//Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque obcaecati quasi harum laudantium incidunt voluptatem velit maxime esse, quibusdam perferendis!

  
  const testimonials = [
    
    {
      name: 'Annai Promoters',
// position: 'GM',
     // company: 'Olpers',
      image:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
      content: `Starting from establishing a logo to every experience i’ve done with my team is something I love the most. It won’t be easier without this supporting team. I enjoyed working with you all. Cheers to the Mandal Softwares and team. Keep it up.
      `,
     
    },
    {
      name: 'Haxin Laboratories',
   //   position: 'CFO',
     // company: 'Olpers',
      image:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
      content: ` A personality with understanding and honesty, Sir Ashokk Remi John is a kind heart, enthusiastic and hardworking person who completes every task without getting tired. I am glad I got a chance to work with Mandal Softwares`,
   
    }
   
   
   
  ];

  const data = testimonials.map((el)=> (
    <TestimonalCard data={el}/>
  ))

  console.log(data)

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1000: { items: 2 }
  };
  

  const Testimonials = () => {
    return (
      <VStack  
      align={"center"} justify="center"   
       h={{base:"100%", md:"full"}} 
       maxW="1200px"
       >

        <Container 
        minW={{base:"100%", md:"full"}}  
       >
        <Flex 
        justify="center" 
        mb={8}>
          <Text fontSize={{base:"2xl", md:"3xl"}} fontWeight="bold" 
        textAlign="center">
            What people are saying about Us
          </Text>
        </Flex>

        <AliceCarousel
          mouseTracking
          items={data}
          responsive={responsive}
         //autoPlay
         //infinite
          // autoPlayInterval={1000}
          // animationDuration={1000}
        />
    

   
      </Container>
    

      </VStack>
    );
  };
  
  export default Testimonials;