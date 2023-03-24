import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Divider, Flex, Heading, Highlight, HStack, Image, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import welcome from "../../public/welcome.png" 
import bgMaterial from "../../public/material/ngMaterial.svg" 
import steps from "../../public/material/steps.png" 
import lines from "../../public/material/line.png" 

import brandingLogo from "../../public/brandingLogo.png" 


import { MdOutlineMonitor } from "react-icons/md"
import { GoLocation } from 'react-icons/go'
import { IoMdPhotos } from 'react-icons/io'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { AiOutlineHtml5 } from 'react-icons/ai'


import { GrBarChart } from 'react-icons/gr'
import { MdOutlineColorLens } from 'react-icons/md'
import { RxCodesandboxLogo } from 'react-icons/rx'
import { SlRocket } from 'react-icons/sl'
import FormFreePrototype from '../../components/smallcomponents/FormFreePrototype'
import BrandingHero from '../../components/smallcomponents/BrandingHero'



const data= [
  { name : "Type Designer" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <MdOutlineMonitor/>   
  },
  { name : "Logo Designer" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <GoLocation/>   
  },
  { name : "Illustrator" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <IoMdPhotos/>   
  },
  { name : "Brand Kit" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <AiOutlineHtml5/>   
  },
  { name : "Creative" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <RiSecurePaymentFill/>   
  },
  { name : "Prestigious" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <AiOutlineFieldTime/>   
  }
]



const BrandingPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <VStack bg="white"
    // bore  padding={{base:"20px",md:"50px 100px"}}
    borderColor={"none"}  alignSelf="center" spacing={10} 
   > 

  {/*  Main Header  */ }
    <Stack  
    position={"relative"}
    overflow={"hidden"}
    justify={"center"} align={"center"}
    spacing={5}  w="100%" bgGradient={"linear-gradient(180deg, rgba(0,120,255,1) 0%, rgba(5,80,201,1) 100%)"} minH={"35vh"} >

     <Heading
      color={"white"}
      
          fontSize={{ base: '4xl', md: '5xl', lg:"6xl" }}
          lineHeight={'110%'}>
         Branding
        
    </Heading>

    <Breadcrumb fontSize={{base:"15px", md:"md"}} color={"white"}>
  <BreadcrumbItem>
    <BreadcrumbLink    transition={'all .3s ease'} _hover={{transform:"scale(1.08)"}}  href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink   transition={'all .3s ease'} _hover={{transform:"scale(1.08)"}}   href='/our-services'>Services</BreadcrumbLink>
  </BreadcrumbItem>


  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink   transition={'all .3s ease'} _hover={{transform:"scale(1.08)"}}   href='/our-services/branding'>Branding</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>


<Image opacity={"80%"} src={bgMaterial} position={"absolute"} w="400px" right="0"  />

<Image opacity={"80%"} src={bgMaterial} position={"absolute"} w="400px" left="0" bottom="-50"  transform={"scaleX(-1) scaleY(-1)"}  />


    </Stack>

     {/*  Main Content  */ }
     <Stack  justify={"center"} align={"center"}
    spacing={5}  w="100%"   >

   {/*  content main stack */}
    <Stack  justify={"center"} align={"center"}
    spacing={10}  w="90%" maxW="1200px" >

 
   {/*  content 1 */}
 <Stack 
      overflow={"hidden"}
      justify={"space-between"} align={{md:"center", lg:"center"}} 
      w="100%" h="100%"
      direction={{base:"row", md:"row"}} >

<BrandingHero/>
</Stack>

 {/*  Fetures */}

 { /*      <VStack > 
          <VStack position="relative" maxW="800px" textAlign={"center"}>
      <VStack   spacing={"none"}     >
      <Text fontSize={{base:"3xl", md:"3xl" ,lg:"4xl", xl:"5xl"}}>
      <Highlight

       styles={{ fontsize:"", px: '1', py: '1', color: '#0078ff' }}
          query='Offer' >
          What We Offer
    </Highlight>
      </Text >
    
      </VStack>

      <Text color="gray.500" fontsize={{base:"15px",md:"xl"}} lineHeight={{base:"20px", md:"30px"}} >
      We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site!
        </Text>
      </VStack>

          
      <SimpleGrid
  
       w={{ base: "100%", md: "100%" }} 
 columns={{ base: 1, md:2, lg:3  }}
 spacing={{base:2,md:2,lg:6}}>

{
data.map((el)=>(
  <HStack 

  transition={'all .3s ease'}

  _hover={{transform:"scale(1.02)"}} 
  h="100%" w="100%" > 

<Box  
 p={{base:5,md:5}} borderRadius={50} border="2.5px solid #0078ff"> 
   <Text _hover={{color:"#0078ff"}} fontWeight="semibold" fontSize={"4xl"}>{el.logo}</Text></Box> 

 <VStack   h="100%" // shadow={"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}
 borderRadius={5}
 textAlign={{base:"start", md:"start"}}
maxW="300px"
   align={{base:"flex-start", md:"flex-start"}}
   spacing={1} 
   data-aos="zoom-out" 
  p={{base:3, md:4}} 
  >
   <Text fontWeight={"medium"} fontSize={{base:"xl", md:"2xl"}} color="#0078ff"  _hover={{color:"#0468aa"}} >{el.name}</Text>
   <Text 
    fontSize={"15px"} fontWeight={"normal"}  >{el.desc}</Text>
 
  </VStack>
 
 </HStack>
))
}



</SimpleGrid>
</VStack> */}

<Divider/>
       {/*  how it is going steps */}

       <VStack > 
          <VStack position="relative" maxW="800px" textAlign={"center"}>


      <VStack   spacing={"none"}     >
      <Text fontSize={{base:"3xl", md:"3xl" ,lg:"4xl", xl:"5xl"}}>
      <Highlight

       styles={{ fontsize:"", px: '1', py: '1', color: '#0078ff' }}
          query='Going' >
          How It Is Going
    </Highlight>
      </Text >
    
      </VStack>

      <Text color="gray.500" fontsize="xl" lineHeight={{base:"20px", md:"30px"}}  >
      We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site!
        </Text>
      </VStack>
 
      </VStack> 

     {/* STEP BOX FOR MD LG XL  */ }
      <Box 

      position={"relative"}  
      spacing=""
      w={"100%"} minH={{base:"none", md:"350px", lg:"400px"}}>

  {/* info gath */ }
        <Stack  
            _hover={{transform:"scale(1.1)"}} 
          spacing={{base:50, md:5}}
          alignItems={"center"}
          
          direction={{base:"row", md:"column"}}
          position={{base:"relative", md:"absolute"}}
          data-aos={{base:"zoom-in", md:"fade-down"}} 
        zIndex={"2"}  
        left={{md:"50px",lg:"100px",xl:"100px" }} >
           <Text color={"gray.300"} fontSize={{base:"3xl", md:"3xl", lg:"4xl"}}  >01</Text>
           <Box bg="white" 
           p={{base:3,md:4, lg:5}} borderRadius={50} 
           border="2.5px solid #0078ff"> 
          <Text _hover={{color:"#0078ff"}} fontWeight="semibold"
           fontSize={{base:"3xl",md:"2xl", lg:"3xl"}}>  <IoMdPhotos/> </Text></Box> 
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}} >Info Gathering</Text>
 
        </Stack>

<Divider  my={2} display={{base:"block", md:"none"}} />

  {/* planning */ }
        <Stack 
            spacing={{base:50, md:5}}
          alignItems={"center"}
          
          direction={{base:"row", md:"column"}}
          position={{base:"relative", md:"absolute"}}
   
        data-aos={{base:"zoom-in", md:"fade-down"}}
         _hover={{transform:"scale(1.1)"}} 
        zIndex={"2"}  
        left={{md:"170px",lg:"230px",xl:"320px" }}
        top={{md:"150px", lg:"160px"}}>
           <Text color={"gray.300"} fontSize={{base:"3xl", md:"3xl", lg:"4xl"}}   >02</Text>
           <Box bg="white" 
           p={{base:3,md:4, lg:5}} borderRadius={50} 
           border="2.5px solid #0078ff"> 
          <Text _hover={{color:"#0078ff"}} fontWeight="semibold" fontSize={{base:"3xl",md:"2xl", lg:"3xl"}}>  <GrBarChart/> </Text></Box> 
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}} >Planning</Text>
 
        </Stack>
<Divider  my={2} display={{base:"block", md:"none"}} />

 {/* Design */ }
 <Stack 

  spacing={{base:50, md:5}}
  alignItems={"center"}
  
  direction={{base:"row", md:"column"}}
  position={{base:"relative", md:"absolute"}}
  data-aos={{base:"zoom-in", md:"fade-down"}}
  _hover={{transform:"scale(1.1)"}} 
        zIndex={"2"}  
        top={{md:"30px",lg:"30px",xl:"30px" }}
        left={{md:"300px",lg:"400px",xl:"530px" }}  >
           <Text color={"gray.300"} fontSize={{base:"3xl", md:"3xl", lg:"4xl"}}  >03</Text>
           <Box bg="white" 
           p={{base:3,md:4, lg:5}} borderRadius={50} 
           border="2.5px solid #0078ff"> 
          <Text _hover={{color:"#0078ff"}} fontWeight="semibold" fontSize={{base:"3xl",md:"2xl", lg:"3xl"}}>  <MdOutlineColorLens/> </Text></Box> 
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}}  >Design</Text>
 
        </Stack>
<Divider my={2}  display={{base:"block", md:"none"}} />


  {/* Development */ }
  <Stack 

  spacing={{base:50, md:5}}
  alignItems={"center"}
  
  direction={{base:"row", md:"column"}}
  position={{base:"relative", md:"absolute"}}
  data-aos={{base:"zoom-in", md:"fade-down"}}
         _hover={{transform:"scale(1.1)"}} 
        zIndex={"2"}  
        right={{md:"190px",lg:"250px",xl:"350px" }}
        top={{md:"150px", lg:"160px"}} >
           <Text color={"gray.300"} fontSize={{base:"3xl", md:"3xl", lg:"4xl"}}   >04</Text>
           <Box bg="white" 
           p={{base:3,md:4, lg:5}} borderRadius={50} 
           border="2.5px solid #0078ff"> 
          <Text _hover={{color:"#0078ff"}} fontWeight="semibold" fontSize={{base:"3xl",md:"2xl", lg:"3xl"}}>  <RxCodesandboxLogo/> </Text></Box> 
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}}  >Redesign</Text>
 
        </Stack>

<Divider  my={2} display={{base:"block", md:"none"}} />

   {/* Testing & Launch */ }
 <Stack 

 spacing={{base:50, md:5}}
 alignItems={"center"}
 
 direction={{base:"row", md:"column"}}
 position={{base:"relative", md:"absolute"}}
 data-aos={{base:"zoom-in", md:"fade-down"}}
 _hover={{transform:"scale(1.1)"}} 
        zIndex={"2"}  
        top={{md:"50px",lg:"50px",xl:"50px" }}
        right={{md:"30px",lg:"50px",xl:"100px" }}
          >
           <Text color={"gray.300"} fontSize={{base:"3xl", md:"3xl", lg:"4xl"}}   >05</Text>
           <Box bg="white" 
           p={{base:3,md:4, lg:5}} borderRadius={50} 
           border="2.5px solid #0078ff"> 
          <Text _hover={{color:"#0078ff"}} fontWeight="semibold" fontSize={{base:"3xl",md:"2xl", lg:"3xl"}}>  <SlRocket/> </Text></Box> 
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}}  >Testing & Launch</Text>
 
        </Stack>
   
       <Image display={{base:"none",md:"block"}} opacity={"80%"} w="100%" zIndex={"1"}  position={"absolute"} minH={{base:"none", md:"350px", lg:"400px"}}  src={steps} />
      </Box>

 </Stack>
    


 {/*  get free prototype */}
       <Stack  
    position={"relative"}
    overflow={"hidden"}
    justify={"center"} align={"center"}
   w="100%" 
   spacing={5}
   p={{base:5,md:10}}
   bgGradient={"linear-gradient(0deg, rgba(0,120,255,1) 0%, rgba(5,80,201,1) 57%)"}  >

<Text maxW={"800px"} textAlign="center"
lineHeight={{base:"40px",md:"20px", xl:"60px"}}
color="white" fontSize={{base:"3xl", md:"3xl" ,lg:"4xl", xl:"5xl"}}>
      <Highlight
       styles={{ fontsize:"", px: '1', py: '1', color: 'yellow' }}
          query='Free' >
          Get a Free Prototype   of Your Future Website!
    </Highlight>
      </Text >

      <Text maxW={"700px"} textAlign="center" color="whiteAlpha.900"  
      fontsize={{base:"15px",md:"xl"}} lineHeight={{base:"20px", md:"30px"}} >
      We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site!
        </Text>

        <FormFreePrototype/>
      

    </Stack>


      
    </Stack>



    </VStack>
  )
}

export default BrandingPage
