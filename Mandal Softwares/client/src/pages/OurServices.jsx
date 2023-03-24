import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Flex, Heading, Highlight, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { AiOutlineMail } from "react-icons/ai"
import { HiOutlineArrowRight } from "react-icons/hi"
import { BsBarChartLine } from "react-icons/bs"
import { MdMobileFriendly, MdOutlineColorLens } from "react-icons/md"
import { RiSearchEyeLine } from "react-icons/ri"
import { GrMonitor } from "react-icons/gr"


import websitedev from "../public/website-dev.png" 

import cloud from "../public/material/cloud.png" 
import cloud2 from "../public/material/cloud2.png" 

import announce from "../public/material/announce.png" 
import chart from "../public/material/chart.png" 

import mobiledev from "../public/mobiledev.png"
import seoImage from "../public/seo-web.jpg"

import socialmedia from "../public/social-media.png"
import youtube from "../public/youtube.png"
import email from "../public/email.png"
import contentmarketing from "../public/content-marketing.png"
import branding from "../public/branding.png"



import { Link } from 'react-router-dom'
import Pricing from '../components/smallcomponents/Pricing'


const OurServices = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }, [])

  return (
    <VStack
      bg="white"
      // bore  padding={{base:"20px",md:"50px 100px"}}
      borderColor={"none"}
      alignSelf="center"
      spacing={10}
    >
      {/*  Main Header  */}
      <Stack
        position={"relative"}
        overflow={"hidden"}
        justify={"center"}
        align={"center"}
        spacing={5}
        w="100%"
        bg="#826ab6"
        minH={"45vh"}
      >
        <Heading
          color={"white"}
          mt={50}
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          lineHeight={"110%"}
        >
          Our Services
        </Heading>

        <Breadcrumb color={"white"}>
          <BreadcrumbItem
            transition={"all .3s ease"}
            _hover={{ transform: "scale(1.08)" }}
          >
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              transition={"all .3s ease"}
              _hover={{ transform: "scale(1.08)" }}
              href="/our-services"
            >
              Services
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Image
          overflow={"hidden"}
          position={"absolute"}
          src={cloud}
          w={{ base: "200px", md: "300px" }}
          left={{ base: "-150px", md: "-15", lg: "-10" }}
          top="20px"
        />
        <Image
          overflow={"hidden"}
          position={"absolute"}
          src={cloud2}
          w="200px"
          right={{ base: "-20", md: "-20", lg: "10" }}
          top="40px"
        />
        <Image
          overflow={"hidden"}
          position={"absolute"}
          src={announce}
          w={{ base: "150px", md: "200px", lg: "250px" }}
          left="0"
          bottom="-25px"
        />

        <Image
          overflow={"hidden"}
          position={"absolute"}
          src={chart}
          w={{ base: "80px", md: "100px" }}
          right={{ base: "40px", md: "100px", lg: "250px" }}
          bottom={{ base: "-10px", md: "-40px", lg: "-25px" }}
        />
      </Stack>

      <Stack
        justify={"center"}
        align={"center"}
        spacing={5}
        p={{ base: 5, md: "none" }}
        w="100%"
      >
        {/*  HEader */}
        <VStack spacing={5} maxW="1000px" textAlign={"center"}>
          <VStack w={{ base: "", md: "80%", lg: "70%" }} spacing={"none"}>
            <Text fontSize={{ base: "2xl", sm: "3xl", lg: "4xl", xl: "4xl" }}>
              <Highlight
                styles={{ px: "1", py: "1", color: "#826ab6" }}
                query="Professional"
              >
                We offer professional web design and digital services
              </Highlight>
            </Text>
          </VStack>

          <Text
            color="gray.500"
            fontsize="xl"
            lineHeight={{ base: "20px", md: "25px" }}
          >
            We handle all of your digital marketing needs, and because we have a
            lot of experience, we have been able to build a solid reputation for
            our company. We assist you in expanding your company's digital
            footprint with the aid of our adept marketing wizards and our
            individually tailored, result-driven approach.
          </Text>
        </VStack>

        {/*  content main stack */}
        <Stack
          justify={"center"}
          align={"center"}
          spacing={10}
          p={{ base: "none", md: 5 }}
          w={{ base: "95%", md: "90%" }}
          maxW="1200px"
        >
          {/*  content 1 */}
          <Stack
            overflow={"hidden"}
            justify={"space-between"}
            align={{ md: "center", lg: "center" }}
            w="100%"
            h="100%"
            direction={{ base: "row", md: "row" }}
          >
            <VStack
              transition={"all .3s ease"}
              _hover={{ transform: "scale(1.02)", color: "#0078ff" }}
              border="1px solid"
              borderRadius={20}
              borderColor={"gray.300"}
              w={{ base: "100%", md: "50%" }}
              h="full"
              align={"left"}
              maxW={{ base: "100%", md: "50%" }}
              p={{ base: 5, lg: 10 }}
            >
              <Link to="/our-services/web-development">
                <Flex cursor={"pointer"}>
                  <Box p={5} borderRadius={50} border="1.5px solid #0078ff">
                    <Text
                      _hover={{ color: "#0078ff" }}
                      fontWeight="semibold"
                      fontSize={"2xl"}
                    >
                      <GrMonitor />
                    </Text>
                  </Box>
                  <Spacer />
                  <Text mt={5} fontSize={"xl"} _hover={{ color: "#0078ff" }}>
                    <HiOutlineArrowRight />
                  </Text>
                </Flex>
              </Link>
              <Spacer />

              <Link to="/our-services/web-development">
                <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="medium">
                  Web Development
                </Text>
              </Link>

              <Text
                fontSize={{ base: "14px", lg: "16px" }}
                lineHeight={{ base: "", md: "30px" }}
                color="gray.600"
              >
                Building websites that complement your business plan, drive
                traffic, and deliver the results you require. We can assist you
                with building a new website from the ground up, transferring an
                existing one, increasing traffic to your present website, or
                simply increasing the conversion rate of your current website's
                traffic.
              </Text>
            </VStack>

            <Box
              data-aos="fade-left"
              display={{ base: "none", sm: "flex" }}
              maxH={"350px"}
              maxW="50%"
            >
              <Image w="100%" src={websitedev} />
            </Box>
          </Stack>

          {/*  content 2 */}
          <Stack
            overflow={"hidden"}
            justify={"space-between"}
            align={{ md: "center", lg: "center" }}
            w="100%"
            h="100%"
            direction={{ base: "row", md: "row" }}
          >
            <Box
              data-aos="fade-right"
              display={{ base: "none", sm: "flex" }}
              maxH={"350px"}
              maxW="50%"
            >
              <Image marginTop={-50} h="100%" w="80%" src={seoImage} />
            </Box>
            <VStack
              transition={"all .3s ease"}
              _hover={{ transform: "scale(1.02)", color: "#0078ff" }}
              border="1px solid"
              borderRadius={20}
              borderColor={"gray.300"}
              w={{ base: "100%", md: "50%" }}
              h="full"
              align={"left"}
              maxW={{ base: "100%", md: "50%" }}
              p={{ base: 5, lg: 10 }}
            >
              <Link to="/our-services/seo">
                <Flex cursor={"pointer"}>
                  <Box p={5} borderRadius={50} border="1.5px solid #0078ff">
                    <Text
                      _hover={{ color: "#0078ff" }}
                      fontWeight="semibold"
                      fontSize={"3xl"}
                    >
                      <RiSearchEyeLine />
                    </Text>
                  </Box>
                  <Spacer />
                  <Text mt={5} fontSize={"xl"} _hover={{ color: "#0078ff" }}>
                    <HiOutlineArrowRight />
                  </Text>
                </Flex>
              </Link>
              <Spacer />

              <Link to="/our-services/seo">
                <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="medium">
                  Search Engine Marketing
                </Text>
              </Link>

              <Text
                fontSize={{ base: "14px", lg: "16px" }}
                lineHeight={{ base: "", md: "30px" }}
                color="gray.600"
              >
                Increase your website's revenue with increased visitors and
                conversions. With our help, businesses can work with specialized
                SEO specialists to deliver results over time that are
                consistent, assuring the longevity of their positions and the
                highest potential return on their marketing expenditures.
              </Text>
            </VStack>
          </Stack>

          {/*  content 3*/}
          <Stack
            overflow={"hidden"}
            justify={"space-between"}
            align={{ md: "center", lg: "center" }}
            w="100%"
            h="100%"
            direction={{ base: "row", md: "row" }}
          >
            <VStack
              transition={"all .3s ease"}
              _hover={{ transform: "scale(1.02)", color: "#0078ff" }}
              border="1px solid"
              borderRadius={20}
              borderColor={"gray.300"}
              w={{ base: "100%", md: "50%" }}
              h="full"
              align={"left"}
              maxW={{ base: "100%", md: "50%" }}
              p={{ base: 5, lg: 10 }}
            >
              <Link to="/our-services/social-media">
                <Flex cursor={"pointer"}>
                  <Box p={5} borderRadius={50} border="1.5px solid #0078ff">
                    <Text
                      _hover={{ color: "#0078ff" }}
                      fontWeight="semibold"
                      fontSize={"2xl"}
                    >
                      <MdMobileFriendly />
                    </Text>
                  </Box>
                  <Spacer />
                  <Text mt={5} fontSize={"xl"} _hover={{ color: "#0078ff" }}>
                    <HiOutlineArrowRight />
                  </Text>
                </Flex>
              </Link>
              <Spacer />

              <Link to="/our-services/social-media">
                <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="medium">
                  Social Media Marketing
                </Text>
              </Link>

              <Text
                fontSize={{ base: "14px", lg: "16px" }}
                lineHeight={{ base: "", md: "30px" }}
                color="gray.600"
              >
                To raise your search engine results, get to know your audience
                and how social media users engage with your products and
                services. We can help you with this by optimizing your social
                media presence. The full range of social media marketing
                services that businesses need to manage and monitor every aspect
                of their online presence.
              </Text>
            </VStack>

            <Spacer />
            <Box
              justifyContent={"flex-end"}
              data-aos="fade-left"
              display={{ base: "none", sm: "flex" }}
              maxH={"350px"}
              maxW="50%"
            >
              <Image src={socialmedia} />
            </Box>
          </Stack>

          {/*  content 4 */}
          <Stack
            overflow={"hidden"}
            justify={"space-between"}
            align={{ md: "center", lg: "center" }}
            w="100%"
            h="100%"
            direction={{ base: "row", md: "row" }}
          >
            <Box
              w={{ base: "90%", md: "50%", lg: "50%" }}
              data-aos="fade-right"
              display={{ base: "none", sm: "flex" }}
            >
              <Image h="fit-content" w="90%" src={email} />
            </Box>
            <VStack
              transition={"all .3s ease"}
              _hover={{ transform: "scale(1.02)", color: "#0078ff" }}
              border="1px solid"
              borderRadius={20}
              borderColor={"gray.300"}
              w={{ base: "100%", md: "50%" }}
              h="full"
              align={"left"}
              maxW={{ base: "100%", md: "50%" }}
              p={{ base: 5, lg: 10 }}
            >
              <Link to="/our-services/email-marketing">
                <Flex cursor={"pointer"}>
                  <Box p={5} borderRadius={50} border="1.5px solid #0078ff">
                    <Text
                      _hover={{ color: "#0078ff" }}
                      fontWeight="semibold"
                      fontSize={"3xl"}
                    >
                      <AiOutlineMail />
                    </Text>
                  </Box>
                  <Spacer />
                  <Text mt={5} fontSize={"xl"} _hover={{ color: "#0078ff" }}>
                    <HiOutlineArrowRight />
                  </Text>
                </Flex>
              </Link>
              <Spacer />

              <Link to="/our-services/email-marketing">
                <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="medium">
                  Email Marketing
                </Text>
              </Link>

              <Text
                fontSize={{ base: "14px", lg: "16px" }}
                lineHeight={{ base: "", md: "30px" }}
                color="gray.600"
              >
                Create your emailer using a smart tool, a new concept, and
                original content. Track and monitor the email marketing campaign
                and give clients with precise statistics that include
                information on open rates, click-through rates, conversions, and
                other metrics.
              </Text>
            </VStack>
          </Stack>

          {/*  content 5*/}
          <Stack
            overflow={"hidden"}
            justify={"space-between"}
            align={{ md: "center", lg: "center" }}
            w="100%"
            h="100%"
            direction={{ base: "row", md: "row" }}
          >
            <VStack
              transition={"all .3s ease"}
              _hover={{ transform: "scale(1.02)", color: "#0078ff" }}
              border="1px solid"
              borderRadius={20}
              borderColor={"gray.300"}
              w={{ base: "100%", md: "50%" }}
              h="full"
              align={"left"}
              maxW={{ base: "100%", md: "50%" }}
              p={{ base: 5, lg: 10 }}
            >
              <Link to="/our-services/content-marketing">
                <Flex cursor={"pointer"}>
                  <Box p={5} borderRadius={50} border="1.5px solid #0078ff">
                    <Text
                      _hover={{ color: "#0078ff" }}
                      fontWeight="semibold"
                      fontSize={"2xl"}
                    >
                      <BsBarChartLine />
                    </Text>
                  </Box>
                  <Spacer />
                  <Text mt={5} fontSize={"xl"} _hover={{ color: "#0078ff" }}>
                    <HiOutlineArrowRight />
                  </Text>
                </Flex>
              </Link>
              <Spacer />

              <Link to="/our-services/content-marketing">
                <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="medium">
                  Content Marketing
                </Text>
              </Link>

              <Text
                fontSize={{ base: "14px", lg: "16px" }}
                lineHeight={{ base: "", md: "30px" }}
                color="gray.600"
              >
                To help our clients succeed, we stay up with the most recent
                developments in content marketing. In the modern world, it is
                essential to follow trends if you want to succeed in business.
                We strategically plan and sync content with your target market
                to assist you attract as many online visitors as possible.
              </Text>
            </VStack>

            <Spacer />
            <Box
              justifyContent={"flex-end"}
              data-aos="fade-left"
              display={{ base: "none", sm: "flex" }}
              maxH={"350px"}
              maxW="50%"
            >
              <Image src={contentmarketing} />
            </Box>
          </Stack>

          {/*  content 6 */}
          <Stack
            overflow={"hidden"}
            justify={"space-between"}
            align={{ md: "center", lg: "center" }}
            w="100%"
            h="100%"
            direction={{ base: "row", md: "row" }}
          >
            <Box
              data-aos="fade-right"
              display={{ base: "none", sm: "flex" }}
              maxH={"350px"}
              maxW="50%"
            >
              <Image width={"80%"} src={branding} />
            </Box>
            <VStack
              transition={"all .3s ease"}
              _hover={{ transform: "scale(1.02)", color: "#0078ff" }}
              border="1px solid"
              borderRadius={20}
              borderColor={"gray.300"}
              w={{ base: "100%", md: "50%" }}
              h="full"
              align={"left"}
              maxW={{ base: "100%", md: "50%" }}
              p={{ base: 5, lg: 10 }}
            >
              <Link to="/our-services/digital-marketing">
                <Flex cursor={"pointer"}>
                  <Box p={5} borderRadius={50} border="1.5px solid #0078ff">
                    <Text
                      _hover={{ color: "#0078ff" }}
                      fontWeight="semibold"
                      fontSize={"3xl"}
                    >
                      <MdOutlineColorLens />
                    </Text>
                  </Box>
                  <Spacer />
                  <Text mt={5} fontSize={"xl"} _hover={{ color: "#0078ff" }}>
                    <HiOutlineArrowRight />
                  </Text>
                </Flex>
              </Link>
              <Spacer />

              <Link to="/our-services/digital-marketing">
                <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="medium">
                  Digital Marketing Strategic Consultation
                </Text>
              </Link>

              <Text
                fontSize={{ base: "14px", lg: "16px" }}
                lineHeight={{ base: "", md: "30px" }}
                color="gray.600"
              >
                A personalized digital marketing consultant develops plans for
                digital marketing, identifies the tactics businesses need to
                place themselves on the market to expand, implements them, and
                takes into account the channels they must use to effectively
                interact with their target audiences.
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </Stack>

      {/*  PRICING */}

      {/* <Stack  justify={"center"} align={"center"}
    spacing={5} p={{base:5,md:"none"}}  w="100%"   >

    
      <VStack spacing={5}  maxW="800px" textAlign={"center"}>
       <VStack w={{base:"",md:"60%",lg:"70%"}}  spacing={"none"}     >
        <Text fontSize={{base:"2xl", sm:"3xl" ,lg:"4xl", xl:"4xl"}}>
        <Highlight

       styles={{ fontsize:"", px: '1', py: '1', color: '#0078ff' }}
          query='Packages' >
          Website Design Packages

    </Highlight>
      </Text >
     
      </VStack>

      <Text color="gray.500" fontsize="xl" lineHeight={{base:"20px",md:"30px"}} >
      We offer a few standard packages as well as custom projects. Our web design company specializes in the professional creation of unique sites.
        </Text>
      </VStack>
   
  
 
  
    <Stack  justify={"center"} align={"center"}
    spacing={10} p={{base:"none", md:5}}  w={{base:"95%", md:"90%"}} maxW="1200px" >
    
    <Pricing/>
 


      </Stack>
      </Stack>
   */}
    </VStack>
  );
}

export default OurServices


 // Our services- 
 // 
 // a- web development 
 // 
 // b- search engine marketing/SEO 


 // 
 // c- social media marketing 
 // 
 // d- YouTube marketing 
 // 
 // 
 // e- content marketing/organic growth 

 // branding 
 // f- creatives/logo/VA 
 // 
 // h- get your quote

// Logo & Brand Identity
//Graphic Design
//Package Design
//Infographics Design
//Print Design
//Creative Copy Writing
//