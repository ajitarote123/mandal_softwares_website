import { Box, Flex , chakra, Image, VStack, Link, Button, HStack} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"      



const MarketingCard = ({data}) => {

  useEffect(()=>{
    Aos.init({ 
      duration: 600,
    })
 },[])
  return (

    <Box  
    data-aos-once="zoom-in" 
      borderRight={{
        base:"none",lg:"4px solid #007aff"}}
      borderBottom={{base:"4px solid #007aff",lg:"none"}}
      bg="white"

     maxH={{base:"100%", lg:"300px"}}
     maxW={"650px"}
      display={{
        lg: "flex"}}
     
      shadow={{
        base: "lg",
      }}
      rounded={{
        lg: "lg",
      }}
    >
      <HStack
        bg="linear-gradient(180deg, rgba(255,255,255,1) 1%, rgba(115,185,255,1) 100%)"  >
        <VStack 
         
          justifyContent="center"
          alignContent={"center"}
      
          textAlign="center"
          rounded={{
            lg: "lg",
          }}
          minW={"100px"}
         
          w="100%"
          //backgroundImage={data.image}  
  >
          <Image   minW={"100px"} maxW="200px"
          alignSelf={"center"}
          src={data.image} />
        </VStack>
      </HStack>
  
      <VStack
    
       textAlign={"left"}
       alignContent="flex-start"
       alignItems={"flex-start"}
       justifyContent="space-around"
        p={5}
       
      
      >
        <chakra.h2
          fontSize={{
            base: "2xl",
            md: "2xl",
            xl: "3xl",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
        >
          {data.name}
          
        </chakra.h2>
        <chakra.p
        
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          dicta tenetur porro...
          
        </chakra.p>
  
        <Box mt={8} alignSelf={{base:"flex-end", lg:"flex-start"}} >
          <Button
          size={{md:"md",xl:""}}
            colorScheme={"messenger"}
            color="gray.100"
         
            px={5}
            py={3}
            fontWeight="semibold"
            rounded="lg"
            _hover={{
              bg: "gray.800",
            }}
          >
            Explore More
          </Button>
        </Box>
      </VStack>
    </Box>

  )
}

export default MarketingCard
