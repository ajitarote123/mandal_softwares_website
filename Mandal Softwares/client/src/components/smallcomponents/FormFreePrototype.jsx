import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Textarea,
    useColorModeValue,
  } from '@chakra-ui/react';

  import { BsFillTelephoneFill } from "react-icons/bs"
  
  export default function FormFreePrototype() {
    return (
    
        <Stack
          spacing={4}
          w={'full'}
          maxW={'650px'}
          bg={'whiteAlpha.200'}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
       
          <HStack >
          <FormControl id="name" isRequired>
          
            <Input color="white"  variant='flushed' 
            
              placeholder="first name"
              _placeholder={{ color: 'whiteAlpha.700' , fontWeight:"medium" }}
              type="name"
            />
          </FormControl>
          <FormControl id="number" isRequired>
          
          <InputGroup  variant='flushed'  >
    <InputLeftElement color='whiteAlpha.700'
      pointerEvents='none'
      children={<BsFillTelephoneFill   />}
    />
    <Input  type='tel'   _placeholder={{ color: 'whiteAlpha.700' , fontWeight:"medium" }} placeholder='phone number' />
  </InputGroup>
          </FormControl>
          </HStack>
          <Textarea variant='flushed' 
          _placeholder={{ color: 'whiteAlpha.700' , fontWeight:"medium" }}   placeholder='your message' />
          <Stack align={"center"} spacing={6}>
          
            <Button

            w={"250px"}
              bg={'white'}
              color={'#007aff'}
              _hover={{
                bg: 'blue.500',
                color:"white"
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
     
    );
  }