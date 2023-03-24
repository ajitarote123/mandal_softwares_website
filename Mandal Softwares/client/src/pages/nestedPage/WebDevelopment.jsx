import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Divider, Flex, Heading, Highlight, HStack, Image, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import welcome from "../../public/welcome.png" 
import bgMaterial from "../../public/material/ngMaterial.svg" 
import steps from "../../public/material/steps.png" 



import { MdOutlineMonitor } from "react-icons/md"

import { IoMdPhotos } from 'react-icons/io'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'


import { GrBarChart } from 'react-icons/gr'
import { MdOutlineColorLens } from 'react-icons/md'
import { RxCodesandboxLogo } from 'react-icons/rx'
import { SlRocket } from 'react-icons/sl'
import FormFreePrototype from '../../components/smallcomponents/FormFreePrototype'
import GetQuotePrototype from '../../components/smallcomponents/GetQuotePrototype'




  
const data= [
  { name : "Timely delivery" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <MdOutlineMonitor/>   
  },
  { name : "Customer support" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <BiSupport/>   
  },
  { name : "Unique designs" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <IoMdPhotos/>   
  },
  { name : "Responsiveness" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <AiOutlineHtml5/>   
  },
  { name : "Bug free" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <RiSecurePaymentFill/>   
  },
  { name : "Technical stats" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <AiOutlineFieldTime/>   
  }
]

const WebDevelopment = () => {
      useEffect(()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
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
         Web Development
        
    </Heading>

    <Breadcrumb fontSize={{base:"15px", md:"md"}} color={"white"}>
  <BreadcrumbItem>
    <BreadcrumbLink    transition={'all .3s ease'} _hover={{transform:"scale(1.08)"}}  href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink   transition={'all .3s ease'} _hover={{transform:"scale(1.08)"}}   href='/our-services'>Services</BreadcrumbLink>
  </BreadcrumbItem>


  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink   transition={'all .3s ease'} _hover={{transform:"scale(1.08)"}}   href='/our-services/web-development'>Web Development</BreadcrumbLink>
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

<VStack 
  transition={'all .3s ease'} _hover={{transform:"scale(1.02)", color:"#0078ff"}} 
 
borderColor={"gray.300"} 
minH={"320px"} 
w={{base:"100%", md:"60%",lg:"50%"}}
h="full"  align={"left"}
 maxW={{base:"100%", md:"60%"}}  p={{ base:2, md:0, xl:5}}>


<Text color="black" fontSize={{base:"3xl", md:"3xl" ,lg:"3xl", xl:"3xl"}}>
      <Highlight

       styles={{ fontsize:"", px: '1', py: '1', color: '#0078ff' }}
          query='App' >
          More Than Just App
    </Highlight>
      </Text >

          <Text  fontSize={{base:"14px",lg:"16px"}}  color="gray.600" fontWeight="medium"  >
          We offer professional web design services at affordable rates to help your business attract more visitors!
          </Text>
        
        

        <Text  fontSize={{base:"12px",md:"sm"}}  color="gray.600"  >
        We build websites that support your business plan, drive traffic, and deliver the results you require. We can help you launch a new website from scratch, assist with a website transfer, increase traffic to your present website, or simply increase the traffic's conversion rate. 
          </Text>

          <Text  fontSize={{base:"12px",md:"sm"}}  color="gray.600"  >
          e begin by organizing the information architecture and outlining the functionality. Custom mobile apps are also created by our experienced app developers to help your business expand. 


          </Text>
        
</VStack>

 <Box  h="100%"  justifyContent={"flex-end"} position={"relative"} overflow="hidden" data-aos="fade-left" display={{base:"none", sm:"flex"}}
  maxW={{md:"40%",lg:"50%"}} maxH={"350px"} >
   <Image   w={{md:"100%", lg:"80%"}} h="100%" position={"relative"} right="0" src={welcome} />
  </Box>
       
</Stack>

 {/*  Fetures */}

        <VStack > 
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
  marginLeft={{base:"2rem", md:0}}
  transition={'all .3s ease'}

  _hover={{transform:"scale(1.02)"}} 
  h="100%" w="100%" > 

<Box  
 p={{base:5,md:5}} borderRadius={50} border="2.5px solid #0078ff"> 
   <Text _hover={{color:"#0078ff"}} fontWeight="semibold" fontSize={"3xl"}>{el.logo}</Text></Box> 

 {/* <VStack   h="100%" // shadow={"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}
 borderRadius={5}
 textAlign={{base:"start", md:"start"}}
maxW="300px"
   align={{base:"flex-start", md:"flex-start"}}
   spacing={1} 
   data-aos="zoom-out" 
  p={{base:3, md:4}} 
  > */}
   <Text fontWeight={"medium"} fontSize={{base:"xl", md:"2xl"}} color="#0078ff"  _hover={{color:"#0468aa"}} >{el.name}</Text>
   {/* <Text 
    fontSize={"15px"} fontWeight={"normal"}  >{el.desc}</Text> */}
 
  {/* </VStack> */}
 
 </HStack>
))
}



</SimpleGrid>
      </VStack> 

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
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}} >Documentation</Text>
 
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
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}} >UI Approval </Text>
 
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
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}}  >Development</Text>
 
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
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}}  >Validation </Text>
 
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
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}}  >Hosting</Text>
 
        </Stack>
   
       <Image display={{base:"none",md:"block"}} opacity={"80%"} w="100%" zIndex={"1"}  position={"absolute"} minH={{base:"none", md:"350px", lg:"400px"}}  src={steps} />
      </Box>

 </Stack>
    


 {/*  get free prototype */}
<GetQuotePrototype 
YelloWord= "free" 
main="Get a free prototype of your future website." 
sublable="To help your company get more customers and keep them on your website, we provide affordable,
professional web design services."
  />


      
    </Stack>



    </VStack>
  )
}

export default WebDevelopment
