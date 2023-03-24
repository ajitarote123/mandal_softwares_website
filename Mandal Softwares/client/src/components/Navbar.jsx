import {  Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Icon, IconButton, Image, Popover, PopoverContent, PopoverTrigger, Spacer, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, {  useState } from 'react'


import { AiOutlineMenu } from 'react-icons/ai';
//AiOutlineMenu

import { Link, NavLink } from 'react-router-dom';
import logo from '../public/material/logo.png'

import { RiLogoutBoxRLine } from 'react-icons/ri';
import GetinTouchModal from './smallcomponents/ModalComp';


const Links = [
    
    {
        name:"Services",
        path:"/our-services",
        children: [
          {
            name: 'Our Services',
            subLabel: 'A wide range of digital marketing services ',
            path: '/our-services',
          },
          {
            name: 'Web Development',
            subLabel: 'Trending design to inspire your business ',
            path: '/our-services/web-development',
          },
          {
            name: 'Search Engine Marketing',
            subLabel: 'Get more traffic for your business growth',
            path: '/our-services/seo',
          },
          {
            name: 'Social Media Marketing',
            subLabel: 'Explore other opportunities to attract customers ',
            path: '/our-services/social-media',
          },
          {
            name: 'Email Marketing',
            subLabel: 'Run campaigns for discount, new product, or corporate news ',
            path: '/our-services/email-marketing',
          },
          {
            name: 'Content Marketing',
            subLabel: 'Get creatives, logo or blogs for your business ',
            path: '/our-services/content-marketing',
          },
          
          {
            name: 'Digital Marketing',
            subLabel: 'Get to consult with industry experts for better growth ',
            path: '/our-services/digital-marketing',
          }
        ]
    },
  //  {
  //      name:"Find your influencer",
  //      path:"/influencer"
  //  },
    {
        name:"Client",
        path:"/our-client"
    },
   
    {
        name:"Contact us",
        path:"/contact"
    }
]

const Navbar = () => {

   const [Active, setActive] = useState(-1)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [modalVisible, setmodalVisible] = useState(false);
   


      
    
 const LogOutUser = ()=>{

 }
   
    
const DesktopSubNav = ({ name, path, subLabel,i }) => {
  return (
    <Link
    onClick={()=>setActive(i)}
    color='white'
    to={path}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: '#0078ff'}}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#0078ff' }}
            fontWeight={500}>
            {name}
          </Text>
         {subLabel && <Text fontSize={'sm'}>{subLabel}</Text>}
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'#0078ff'} w={5} h={5} as={RiLogoutBoxRLine} />
        </Flex>
      </Stack>
    </Link>
  );
};

  return (
    <HStack
      shadow={"dark-lg"}
      zIndex={999}
      bg={"white"}
      style={{ position: "sticky", top: 0 }}
      p={{ base: "0px 10px", md: "none", lg: "0px 50px" }}
      justify="center"
      w="100%"
      h="64px"
      borderBottom="1px solid #eeee"
    >
      <HStack
        w="full"
        maxW="1400px"
        p={{ base: "none", md: "none", lg: "0.6rem" }}
        spacing={8}
      >
        <HStack>
          <Link to="/">
            <Image h={12} w="100%" src={logo} />
          </Link>
        </HStack>

        <Box display={{ base: "none", sm: "none", md: "block" }}>
          <HStack spacing={{ base: "none", md: "10px", lg: "10px" }}>
            {Links.map((el, i) => (
              <Box>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                    <NavLink
                      key={el.name}
                      to={el.path}
                      onClick={() => setActive(i)}
                      //className={ Active ? "activeS" : "defaultS"}
                      end
                    >
                      <Text
                        borderBottom={
                          Active == i ? "3px solid #826ab6" : "none"
                        }
                        color="blackAlpha.900"
                        fontSize={{ base: "none", md: "15px", lg: "15px" }}
                        p={{ base: "5px 5px", md: "1px", lg: "10px 10px" }}
                      >
                        {el.name}
                      </Text>
                    </NavLink>
                  </PopoverTrigger>

                  {el.children && (
                    <PopoverContent
                      border={0}
                      boxShadow={"xl"}
                      bg={"white"}
                      p={4}
                      rounded={"xl"}
                      minW={"sm"}
                    >
                      <Stack>
                        {el.children.map((child) => (
                          <DesktopSubNav key={child.name} {...child} i={i} />
                        ))}
                      </Stack>
                    </PopoverContent>
                  )}
                </Popover>
              </Box>
            ))}
          </HStack>
        </Box>

        <GetinTouchModal
          isOpen={modalVisible}
          setmodalVisible={setmodalVisible}
        />

        <Spacer />

        <Box display={{ base: "none", md: "block", lg: "block" }}>
          <HStack spacing={5}>
            <Button
              onClick={() => setmodalVisible(true)}
              fontWeight="normal"
              colorScheme="purple"
              variant="solid"
            >
              Get your Quote
            </Button>

            {/* <IconButton
             fontSize='25px'
             borderRadius={50}
             
             onClick={toggleColorMode}
          icon={ colorMode === "light" ? <MdOutlineDarkMode /> : <BsLightbulb/>  } />  */}
          </HStack>
        </Box>

        <HStack display={{ base: "block", md: "none", lg: "none" }}>
          <IconButton
            onClick={() => onOpen()}
            icon={<AiOutlineMenu />}
          ></IconButton>
        </HStack>
      </HStack>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack alignItems="center" h="20px">
              <Image w="100px" position="absolute" bottom="100px" />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <Divider />
            <br />

            <VStack>
              {Links.map((el) => (
                <VStack w={"80%"}>
                  <NavLink
                    key={el.path}
                    to={el.path}
                    w={"100%"}
                    onClick={() => onClose()}
                    className={({ isActive }) =>
                      isActive ? "activeS" : "defaultS"
                    }
                    end
                  >
                    <Text
                      w={"100%"}
                      fontSize="20px"
                      fontWeight={"semibold"}
                      p="10px 5px"
                    >
                      {el.name}
                    </Text>
                  </NavLink>
                  <Divider />
                </VStack>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
}


export default Navbar
