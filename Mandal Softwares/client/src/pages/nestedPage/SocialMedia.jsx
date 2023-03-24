import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Divider, Flex, Heading, Highlight, HStack, Image, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'


import bgMaterial from "../../public/material/ngMaterial.svg" 
import steps from "../../public/material/steps.png" 
import socialmedia from "../../public/social-media-m.png" 


import { MdOutlineMonitor } from "react-icons/md"

import { IoMdPhotos, IoMagnetSharp } from 'react-icons/io'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { AiOutlineFieldTime } from 'react-icons/ai'

import { BiCollection } from 'react-icons/bi'
import { GiHumanTarget } from 'react-icons/gi'


import { GrBarChart } from 'react-icons/gr'
import { MdOutlineColorLens } from 'react-icons/md'
import { FaAdversal } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

import { IoMagnet } from 'react-icons/io5'


import FormFreePrototype from '../../components/smallcomponents/FormFreePrototype'
import GetQuotePrototype from '../../components/smallcomponents/GetQuotePrototype'



 

 

 

 

 

 

const data= [
  { name : "Creative ideas" , 
    desc:"Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.",
    logo : <MdOutlineMonitor/>   
  },
  { name : "Organic results" , 
    desc:"Accurate , complete, active, links to website and has CTA.",
    logo : <ImProfile/>   
  },
  { name : "Following trends" , 
    desc:"Userfull Entertaining, relevant posts, photos, video, lives, stories.",
    logo : <IoMdPhotos/>   
  },
  { name : "Customized pricing" , 
    desc:"Like, Share, comment and follow customers, followers, influencers.",
    logo : <IoMagnet/>   
  },
  { name : "Timely delivery" , 
    desc:"Reach to the target Audience.",
    logo : <RiSecurePaymentFill/>   
  },
  { name : "Customer support" , 
    desc:"Use platform and website analytics to see whats working.",
    logo : <AiOutlineFieldTime/>   
  }
]



const SocialMedia = () => {

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
         Social Media Marketing
        
    </Heading>

    <Breadcrumb fontSize={{base:"15px", md:"md"}} color={"white"}>
  <BreadcrumbItem>
    <BreadcrumbLink    transition={'all .3s ease'} _hover={{transform:"scale(1.08)"}}  
    href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink   transition={'all .3s ease'} _hover={{transform:"scale(1.08)"}}  
     href='/our-services'>Services</BreadcrumbLink>
  </BreadcrumbItem>


  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink   transition={'all .3s ease'} _hover={{transform:"scale(1.08)"}}   href='/our-services/social-media'>Social Media</BreadcrumbLink>
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
direction={{base:"column", md:"row"}} >

<VStack 
transition={'all .3s ease'} _hover={{transform:"scale(1.02)", color:"#0078ff"}} 

borderColor={"gray.300"} 
spacing={5}
w={{base:"100%", md:"60%",lg:"50%"}}
h="full"  align={"left"}
maxW={{base:"100%", md:"60%"}}  p={{ base:2, md:0, xl:5}}>


<Text color="black" fontSize={{base:"3xl", md:"3xl" ,lg:"3xl", xl:"3xl"}}>
<Highlight

 styles={{ fontsize:"", px: '1', py: '1', color: '#0078ff' }}
    query='Media' >
     Social Media Marketing 
</Highlight>
</Text >

  
  

  <Text  fontSize={{base:"12px",md:"sm"}}  color="gray.600"  >
  Complete social media marketing services to help businesses manage and monitor every aspect of their online presence. Learn about your audience and how they connect with your products and services on social media to raise your search engine results. Social media optimization is something we can help you with. A lot more goes into social media marketing than merely posting contests, discounts, and other incentives, even though it is not a company's primary method of advertising. 
    </Text>
<HStack>
{/* 
<Button colorScheme={"messenger"} variant="outline" fontWeight={"medium"} > Read More </Button>
    <Button colorScheme={"messenger"} variant="solid" fontWeight={"medium"} > Get Free Analysis </Button> */}
</HStack>

<Flex>   



</Flex>
 
  
</VStack>

<Box   h="100%"  justifyContent={"flex-end"} position={"relative"} overflow="hidden" data-aos="fade-left" 
maxW={{md:"40%",lg:"50%"}}  >
<Image   w={{md:"100%", lg:"80%"}}  maxH={"550px"} position={"relative"} right="0" src={socialmedia} />
</Box>
 
</Stack>

{/* <Stack><Image maxW={"500px"} src={marketing1}/></Stack> */}


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
           fontSize={{base:"3xl",md:"2xl", lg:"3xl"}}>  <BiCollection/> </Text></Box> 
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}} >Get requirements</Text>
 
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
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}} >Build strategy </Text>
 
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
        left={{md:"250px",lg:"300px",xl:"430px" }}  >
           <Text color={"gray.300"} fontSize={{base:"3xl", md:"3xl", lg:"4xl"}}  >03</Text>
           <Box bg="white" 
           p={{base:3,md:4, lg:5}} borderRadius={50} 
           border="2.5px solid #0078ff"> 
          <Text _hover={{color:"#0078ff"}} fontWeight="semibold" fontSize={{base:"3xl",md:"2xl", lg:"3xl"}}>  <MdOutlineColorLens/> </Text></Box> 
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}}  >Experiment with audience </Text>
 
        </Stack>
<Divider my={2}  display={{base:"block", md:"none"}} />


  {/* Post & Ads */ }
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
          <Text _hover={{color:"#0078ff"}} fontWeight="semibold" fontSize={{base:"3xl",md:"2xl", lg:"3xl"}}>  <FaAdversal/> </Text></Box> 
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}}  >Follow effective ideas </Text>
 
        </Stack>

<Divider  my={2} display={{base:"block", md:"none"}} />

   {/* Target Audience */ }
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
          <Text _hover={{color:"#0078ff"}} fontWeight="semibold" fontSize={{base:"3xl",md:"2xl", lg:"3xl"}}>  <GiHumanTarget/> </Text></Box> 
          <Text  fontSize={{base:"xl", md:"md", lg:"xl"}}  >Bringing engagement </Text>
 
        </Stack>
   
       <Image display={{base:"none",md:"block"}} opacity={"80%"} w="100%" zIndex={"1"}  position={"absolute"} minH={{base:"none", md:"350px", lg:"400px"}}  src={steps} />
      </Box>

 </Stack>
    


 {/*  get free prototype */}
 <GetQuotePrototype 
YelloWord="social media" 
main="Utilize social media channels to promote your business." 
sublable="To manage your social media accounts who can handle all of your needs, including paid campaigns, content creation, and increasing engagements organically."
  />


      
    </Stack>



    </VStack>
  )
}

export default SocialMedia
