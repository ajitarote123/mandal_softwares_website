import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';


import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


function PriceWrapper({ children }) {
  return (
    <Box
     
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}




export default function Pricing() {

  const data = [
    <PriceWrapper>
          <Box py={4} px={{base:5,lg:12}}>
            <Text fontWeight="500" fontSize={{base:"xl",xl:"2xl"}}>
            Landing page
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="600">
                79
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}  px="0"
            borderBottomRadius={'xl'}>
            <List   spacing={3} textAlign="start"  
            px={{base:"0",lg:5,xl:12}}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="messenger" variant="outline">
              Select Plan
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>,

        <PriceWrapper>
          <Box position="relative">
          
            <Box py={4} px={12}>
            <Text fontWeight="500" fontSize={{base:"xl",xl:"2xl"}}>
              App development
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="600">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start"  px={{base:"0",lg:5,xl:12}}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="messenger">
                  Select Plan
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>,
   
   <PriceWrapper>
   <Box py={4} px={{base:5,lg:12}}>
   <Text fontWeight="500" fontSize={{base:"xl",xl:"2xl"}}>
     E - Commerce
     </Text>
     <HStack justifyContent="center">
       <Text fontSize="3xl" fontWeight="600">
         $
       </Text>
       <Text fontSize="5xl" fontWeight="600">
         79
       </Text>
       <Text fontSize="3xl" color="gray.500">
         /month
       </Text>
     </HStack>
   </Box>
   <VStack
     bg={useColorModeValue('gray.50', 'gray.700')}
     py={4}
     borderBottomRadius={'xl'}>
     <List spacing={3} textAlign="start"  px={{base:"0",lg:5,xl:12}}>
       <ListItem>
         <ListIcon as={FaCheckCircle} color="green.500" />
         unlimited build minutes
       </ListItem>
       <ListItem>
         <ListIcon as={FaCheckCircle} color="green.500" />
         Lorem, ipsum dolor.
       </ListItem>
       <ListItem>
         <ListIcon as={FaCheckCircle} color="green.500" />
         5TB Lorem, ipsum dolor.
       </ListItem>
     </List>
     <Box w="80%" pt={7}>
       <Button w="full" colorScheme="messenger" variant="outline">
       Select Plan
       </Button>
     </Box>
   </VStack>
 </PriceWrapper>
  ]
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1000: { items: 3 }
  };
  

  return (
    <Box w={"full"} >
    
      <Stack
      display={{base:"none",lg:"flex"}}
       
        textAlign="center"
        justify="center"
         >

          
        <AliceCarousel
        
          mouseTracking
          items={data}
          responsive={responsive}
         
         autoPlay
        // infinite
        //  autoPlayInterval={1000}
        //  animationDuration={3000}
        />
       
      </Stack>


      <Stack
      display={{base:"flex",lg:"none"}}
      
        textAlign="center"
        justify="center"
        >

          
        <AliceCarousel
        
          mouseTracking
          items={data}
          responsive={responsive}
         
         autoPlay
         infinite
        //  autoPlayInterval={1000}
         animationDuration={5000}
        />
       
      </Stack>
    </Box>
  );
}