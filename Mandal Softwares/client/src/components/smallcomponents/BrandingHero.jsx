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
    
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    
  } from 'react-icons/io5';


  import { BsChatLeftTextFill } from "react-icons/bs"
  import { MdOutlineDesignServices } from "react-icons/md"
  

  import logowork from "../../public/material/logowork.jpg"


  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function BrandingHero() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
          
            <Heading>Professional, Experienced and Affordable</Heading>
          
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={'gray.100'} />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} /> 
                }
                iconBg={'yellow.100'}
                text={'Creative'}
              />
              <Feature
                icon={<Icon as={MdOutlineDesignServices} color={'green.500'} w={5} h={5} />}
                iconBg={'green.100'}
                text={'Prestigious'}
              />
              <Feature
                icon={
                  <Icon as={BsChatLeftTextFill} color={'purple.500'} w={5} h={5} />
                }
                iconBg={'purple.100'}
                text={'Communicative'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                logowork
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }