import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
   
    Image,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  

  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    
    MdOutlineEmail,
  } from 'react-icons/md';
  import {  BsLinkedin, BsPerson } from 'react-icons/bs';
  import {  AiFillInstagram } from 'react-icons/ai';
import logo from "../public/material/logo.png";
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={'blackAlpha.100'}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: 'blackAlpha.200',
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };


  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
   
      borderTop={"2px solid #007aff"}
        bg={'gray.50'}
        color={'gray.700'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
              <Image h={10} w="" src={logo} />
              </Box>
              <Text fontSize={'sm'}>
                © 2023 Mandal Softwares Pvt Ltd. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
             
     <SocialButton label={'Facebook'} >
                  <MdFacebook />
                </SocialButton>
                <a href="#" target="_blank" rel="noopener noreferrer"> <SocialButton label={'Instagram'} >
                  <AiFillInstagram />
                </SocialButton>  </a>

                <a href="#" target="_blank" rel="noopener noreferrer">    <SocialButton label={'Linkedin'}  >
                  <BsLinkedin />
                </SocialButton></a>

              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Contact us</Link>
         
              <Link href={'#'}>Testimonials</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Terms of Service</Link>
             
              <Link href={'#'}>Privacy Policy</Link>
              
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={'blackAlpha.100'}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={'facebook.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }