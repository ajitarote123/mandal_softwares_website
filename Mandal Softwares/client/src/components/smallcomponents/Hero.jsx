import {
  Box,
    Button,
    Center,
    Divider,
    Flex,
    Heading,
    HStack,
    IconButton,
    Image,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
    VStack,
  } from '@chakra-ui/react';
import { useState } from 'react';
 
   
  import handshake from '../../public/handshake.png';
  import search from '../../public/search.png';
import GetinTouchModal from './ModalComp';


  export default function HeroPage() {

    const [modalVisible, setmodalVisible] = useState(false);

 


    return (
      <Stack 
     //  border={"2px solid red"}
     
      w="100%" 
      spacing={5}
      align={"center"} >

        <Stack 
       
        backgroundSize={"100%"}
      
         backgroundImage="url('https://jevelin.shufflehound.com/hello/wp-content/uploads/sites/22/2016/05/Jevelin-showcase-main-image.png')"
         // https://assets.materialup.com/uploads/4421cff4-d9f9-444d-9b55-2f12024fbbb2/preview.gif
         backgroundPosition={"bottom"}
         backgroundRepeat="no-repeat"
         bgColor={"#f7f8fe"}
         //border="1px solid red"
         //bg="linear-gradient(180deg, rgba(255,255,255,1) 28%, rgba(228,237,246,1) 100%)"
          spacing={5} minW="100%" 
        
          
        p={{ base: 50, md:50, lg:100, xl:150 }}
         minH="100%" 
        h={{base:"350px",md:"350px", lg:"350px", xl:"400px"}}  >

           <Stack  
         
             justifyContent={"space-between"}
           align="center"
           direction={{base:"column", md:"row"}}
           marginTop={{base:"none",md:"-10",lg:"none"}}
            h={"100%"} w="100%" >

               <VStack w={{ base: "100%", md:"70%", lg:"60%" }} alignItems="flex-start">
                  <Text fontSize={"xl"} fontWeight={"semibold"} color={"gray.500"} >It’s Better than Ever </Text>
                  <Heading g
                  fontSize={{ base: "25px", md:"30px", lg:"30px",xl:'40px' }} 
                  fontWeight={"extrabold"} >Analyze, Advertise and Optimize ! We do it all for you. </Heading>
               </VStack>

               <Button // position={"relative"} top={{ base: "-100", sm:"-140" }} 
         alignSelf={{md:"center",lg:"flex-end"}}
         top={{base:"-30px"}}
         size={{base:"md", xl:"lg"}} 
         visibility={{ xl:"hidden" }}
        onClick={()=> setmodalVisible(true)}
         fontSize="2xl" fontWeight={"normal"} colorScheme='messenger'>Get Quote</Button>
           </Stack>

           <GetinTouchModal
isOpen={modalVisible}
setmodalVisible={setmodalVisible}
/>

        </Stack>

        <SimpleGrid 
        justify="center"
        alignContent={{md:"flex-start", lg:"center"}}
        justifyContent={{md:"flex-start", lg:"center"}}
        columns={{ base: 1, md:1, lg:3 }} 

        position={"relative"} 
        top={{base:"-50px", md:"-100px"}} bg="white" shadow={"2xl"} borderRadius={5}
        w={{ base: "100%", md:"fit-content",lg:"80%"}} >

      <VStack 
      bg="white"
       transition={'all .3s ease'}
       p={{ base: 5, md:10, lg:"35", xl:"35" }} 
      alignContent="center"
      justifyContent={"center"}
       _hover={{transform:"scale(1.05)", color:"#294cff", 
       shadow:"rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"}}
      >
                <HStack align={"flex-start"} >
            <Image w="40px"  src={"https://jevelin.shufflehound.com/hello/wp-content/uploads/sites/22/2019/08/service-1.png"}/>
            <Spacer/>
             <VStack align={"flex-start"}>
                 <Text fontWeight={"semibold"}    _hover={{color:"#294cff"}}
                fontSize={{base:"15px",md:"15px",lg:"15px", xl:"18px"}} >
                 One stop Solution
                </Text>
                <Text color={"gray.500"} 
                 fontSize={{base:"13px",md:"14px",lg:"14px", xl:"14px"}}   >
                For faster business growth, all it takes is one phone call !

                </Text>
             </VStack>
          
            </HStack>


          </VStack>
     
          


          <VStack  bg="white"
       transition={'all .3s ease'}
       p={{ base: 5, md:10, lg:"35", xl:"35" }} 
      alignContent="center"
      justifyContent={"center"}
       _hover={{transform:"scale(1.05)", color:"#294cff", 
       shadow:"rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"}}>
        
            <HStack align={"flex-start"} >
            <Image w="40px"  src={search}/>
            <Spacer/>
             <VStack align={"flex-start"}>
                 <Text fontWeight={"semibold"}    _hover={{color:"#294cff"}}
                fontSize={{base:"15px",md:"15px",lg:"15px", xl:"18px"}} >
                 Better tools to rank higher
                </Text>
                <Text color={"gray.500"} 
                 fontSize={{base:"13px",md:"14px",lg:"14px", xl:"14px"}}   >
                Utilizing the most up-to-date and effective tools, boosting your business!

                </Text>
             </VStack>
          
            </HStack>

          </VStack>
        
          <VStack  bg="white"
       transition={'all .3s ease'}
       p={{ base: 5, md:10, lg:"35", xl:"35" }} 
      alignContent="center"
      justifyContent={"center"}
       _hover={{transform:"scale(1.05)", color:"#294cff", 
       shadow:"rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"}}>
            <HStack align={"flex-start"} >
            <Image w="40px"  src={handshake}/>
            <Spacer/>
             <VStack align={"flex-start"}    >
                 <Text fontWeight={"semibold"}   _hover={{color:"#294cff"}} fontSize={{base:"15px",md:"15px",lg:"15px", xl:"18px"}} >
                 Build trust together

                </Text>
                <Text color={"gray.500"}  fontSize={{base:"13px",md:"14px",lg:"14px", xl:"14px"}}     >
                Get specialized support to resolve any of your business-related problems
                </Text>
             </VStack>
          
            </HStack>

          </VStack>

          
          
        </SimpleGrid>

        
 


      </Stack>
    );
  }