import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  VStack,
  Box,
} from '@chakra-ui/react';


import business from "../../public/business.jpg"
import social from "../../public/social.jpg"
import advertising from "../../public/advertising.png"
import virtualassistant from "../../public/virtualassistant.jpeg"

//background: rgb(255,255,255);
//background: linear-gradient(0deg, rgba(255,255,255,1) 33%, rgba(237,242,247,1) 70%);



export default function WorkSaples() {

    const data = [
       
        {name : "E-commerce",
         image:"https://i.postimg.cc/KjDdbfpL/makossdsd.png"
        },
        {name : "Applications",
        image:"https://i.postimg.cc/nzC4phd1/makossdsd3.png"
        },
        {name : "Social media",
        image:social,
        },
        {name : "Business",
        image:business,
        },

        {name : "Virtual assistance",
        image:virtualassistant,
        }, 
        {name : "Advertising",
        image:advertising
        }

    ]
  


  return (
    <VStack   >
   

      {/*<CardMarketing/>*/}

<SimpleGrid w={{ base: "100%", md: "90%" }} 
 columns={{ base: 1, md:2, lg:3  }}
 spacing={{base:5, md:5, lg:10}}>

{
data.map((el)=>(
 <VStack 
 transition={'all .3s ease'}
 transform={'translate(-5px)'}
 _hover={{transform:"scale(1.02)"}}  >
  <Image  maxH={{ base:"220px" , xl:"275px"}}  h={"100%"} borderRadius={10} shadow={"rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"} src={el.image}  />
  <Box p={2}>
  <Text fontSize={"xl"} fontWeight={"semibold"}  >{el.name}</Text>
  </Box>
 </VStack>
))
}

</SimpleGrid>
        
      
    </VStack>
  );
}