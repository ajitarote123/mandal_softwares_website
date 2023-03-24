import { Box, Button, Divider, Flex, Heading, Highlight, HStack, IconButton, Image, SimpleGrid, Spacer, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import GetinTouch from '../components/smallcomponents/GetinTouch'
import HeroPage from '../components/smallcomponents/Hero'
import AutoPlay from '../components/smallcomponents/SlideShow'
import Testimonials from '../components/smallcomponents/Testimonials'
import WorkSaples from '../components/smallcomponents/WorkSamples'
import GetinTouchModal from '../components/smallcomponents/ModalComp';

import Aos from 'aos'
import "aos/dist/aos.css"

import { useInView, InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'



const logoSlider = [
    "https://images.ctfassets.net/lh3zuq09vnm2/3wtrDaAESflMICYhvZtOdE/3d4248c94b553f012fa63a6f0eb52826/Slack.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/4A944uO2u8ijz0ueTW6Gix/64bb6b8d02d0080f3dc5c5043f5d475e/Property_1_Segment.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/Oma32qGH0Mrvd0GDwye01/dbf9446b8e9d356738bb804e020dcba9/Hubspot.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/4VCGBnxidEWtUhJuqX5fcU/883c3b48b035e1ee690d77e704202d4d/Property_1_Zapier.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/1FcKgE6Wc4Q0oKlCrZe9db/a766ff23aadece8e7f64ad14716dc67c/Property_1_Optimizely.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/2sFKKdOpxmVgpWs65YpSU3/df1c3d18dfbd1d540752cce56bce3535/Omniconvert.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/2rmAIb5zgDRa8qqxILCAhC/fd845e66d774072ccf081aa975c60453/Microsoft-teams.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/6GxHuHnVO3oaiQkLRznyrv/ed2fb4fd18f9d26aba90aed0fd86b6dc/Property_1_Zendesk.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/51S20iDqjIQ93v3WkVsMkF/a316074ea318475105786e8d808c588e/gmail.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/2sfh7DIpMg2kHXiz0icHNi/550125a6e0da967c7b608f623313e424/Property_1_asana.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/5XsPx6nAN2Sj6eu8BlnD1u/8bc2687273b40f88402a0f932513b133/Property_1_facebook-conversions.svg",
    "https://images.ctfassets.net/lh3zuq09vnm2/5zpKws6k8CzDHl4kmzpFHr/a3b2d7332d2115222f33948b098ee0bc/Property_1_google-analytics.svg"
    

]

const data = [
  { 
    img: "https://demo.themewinter.com/html/seobin/images/icon/service5.png",
    feature : "Website Development",
    desc : "Building websites that complement your business plan, drive traffic, and deliver the results your business require." 
   },
  { 
    img: "https://demo.themewinter.com/html/seobin/images/icon/service1.png",
    feature : "Search Engine Marketing ",
    desc : "Work with specialized SEO/SEM specialists to deliver results over time that are consistent, assuring the highest potential return on marketing expenditures. " 
   },
   { 
    img: "https://demo.themewinter.com/html/seobin/images/icon/service3.png",
    feature : "Email Marketing ",
    desc : "Create your emailer using a smart tool, track and monitor the email marketing campaign and give clients with precise statistics including optimizing metrics." 
   },
    
   { 
    img: "https://demo.themewinter.com/html/seobin/images/icon/service6.png",
    feature : "Social media marketing ",
    desc : "The full range of social media marketing services that businesses need to manage and monitor every aspect of their online presence." 
   },
   { 
    img: "https://demo.themewinter.com/html/seobin/images/icon/service2.png",
    feature : "Content Marketing ",
    desc : "We strategically plan and sync content with your target market to assist you attract as many online visitors as possible." 
   },
   { 
    img: "https://demo.themewinter.com/html/seobin/images/icon/service4.png",
    feature : "Digital Marketing Strategic Consultation",
    desc : "With consultancy, identify the tactics businesses need to place themselves on the market to expand and implement them. " 
   },
   
  
 
]


const LandingPage = () => {

  
  const [modalVisible, setmodalVisible] = useState(false);

  const {ref, inView} = useInView({triggerOnce:true, delay:2000})
 
 useEffect(()=>{
   
     if(inView){
       setmodalVisible(true)
        console.log("YES")
     }else{
        console.log("NO")
     }  

 },[inView])


 useEffect(()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
});
}, [])



  useEffect(()=>{
    Aos.init({ 
      duration: 600,
      once: true
    })
 },[])

  return (
    <VStack // bore  padding={{base:"20px",md:"50px 100px"}}
    borderColor={"none"}  alignSelf="center" spacing={5} 
   >
       <HeroPage data-aos="fade-up"  />

   {/* <Stack  
  
   data-aos="zoom-in"  
    margin="auto" align="center" spacing={5} >

<Heading 
marginTop={-50}

alignSelf={"center"} 
fontSize="3xl">

    Our Client.

</Heading>

        
        <VStack spacing={5} >
        <Text align={"center"} w="80%" fontSize={{base:"18px", md:"2xl"}}>Our mission is to deliver the best result with trust</Text>

<Box margin="auto"  > 
  <AutoPlay images={logoSlider} />
</Box>
        </VStack>
     
   </Stack>
 */}


   <VStack  spacing={5} 

   p={30} 
   justify={"center"} 
   align="center" w="full"
   bg="linear-gradient(180deg, rgba(255,255,255,1) 41%, rgba(237,242,247,1) 100%)" 
   >
   
  <Heading  
     textAlign={"center"}
      p={2} 
      fontSize={{base:"2xl", md:"3xl"}}
      rounded={'md'}> We take care of your Business </Heading> 



     <WorkSaples data-aos="slide-right" />

   </VStack>

   
   

<VStack  spacing={5} 
h={{base:"100%" , xk:"100vh"}}
p={30} 
justify={"center"} 
align="center" w="full"
bg="white" 
>

  <VStack  justify={"center"}   align="center"
  textAlign={"left"}  w="100%" >

    <VStack  w="90%" align={"center"}> 
      <Text color={"blackAlpha.500"} 
        fontWeight={"semibold"} >Key Features</Text>
      <Heading 
      ref={ref}
     
      fontSize={{base:"2xl"}}
     >
       
       Our Best Services
        </Heading> 
        
        
<GetinTouchModal
isOpen={modalVisible}
setmodalVisible={setmodalVisible}
/>
        
         </VStack>

 

      <Spacer/>
      
      <SimpleGrid 
   
       w={{ base: "100%", md:"100%", xl:"90%" }} 
 columns={{ base: 1, md:3, lg:3  }}
 spacing={{base:2,md:6}}>

{
data.map((el)=>(
  <VStack 
  transition={'all .3s ease'}

  _hover={{transform:"scale(1.02)"}} 
  h="100%" w="100%" > 
 <Stack   h="100%" // shadow={"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}
 borderRadius={5}
  direction={{base:"row-reverse", md:"column"}} spacing={1} 
   align={"center"}   data-aos="zoom-out" 
 p={{base:0, lg:0, xl:5}}  >

<Image  src={el.img} />
  <br />

   <VStack  
   textAlign={{base:"start", md:"center"}}
   align={{base:"flex-start", md:"center"}}>
   <Text fontWeight={"semibold"} _hover={{color:"#fa8567"}} >{el.feature}</Text>
   <Text 
    fontSize={"sm"} fontWeight={"normal"}  >{el.desc}</Text>
   </VStack>
   {/* <Link to="/our-services/web-development" >
   <Text cursor={"pointer"} display={{base:"none", md:"flex"}} color="orange.500" fontSize={"14px"} >View More...</Text>
   </Link> */}
  </Stack>
  <Divider display={{base:"flex", md:"none"}} />
 </VStack>
))
}

</SimpleGrid>


  </VStack>

  </VStack>
   


   <Stack 
      spacing={5} maxW="1200px"  w={{base:"90%", md:"100%"}} h="100%">
     <Testimonials />
   </Stack>


<Stack  

 spacing={5} w="100%" h="100%">
 <GetinTouch/>

</Stack>


    </VStack>
  )
}

export default LandingPage
