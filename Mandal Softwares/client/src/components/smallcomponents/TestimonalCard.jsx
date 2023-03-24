import { Avatar, Box, Stack ,Text } from '@chakra-ui/react'
import React from 'react'


const TestimonalCard = ({data}) => {
  return (
    <Stack
          
              direction={{ base: 'column', sm: 'row' }}
              spacing={2}
              mb={5}
              justify="center"
            >
              <Stack
                maxW="395px"
                boxShadow="lg"
                rounded="md"
                p={6}
                pos="relative"
                bg={'white'}
                _after={{
                  content: `""`,
                  w: '0',
                  h: '0',
                  borderColor: 'transparent white',
                  borderStyle: 'solid',
                  borderWidth: '10px 0 10px 10px',
                  position: 'absolute',
                  top: { base: 'unset', sm: '45%' },
                  right: { base: 'unset', sm: '-10px' },
                  left: { base: '48%', sm: 'unset' },
                  bottom: { base: '-15px', sm: 'unset' },
                  transform: { base: 'rotate(90deg)', sm: 'unset' },
                  display: 'block'
                }}
              >
              
                <Text fontWeight="medium" fontSize="md">
                  {data.content}
                </Text>
              </Stack>
              <Stack 
              
              direction="column" spacing={2} p={2} 
              justify="center" alignItems="center">
                <Avatar
                
                  size="lg"
                  showBorder={true}
                  borderColor="green.400"
                  name="avatar"
                  src={data.image}
                />
                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="md">
                    {data.name}
                  </Text>
                  {/* <Text fontWeight="medium" fontSize="xs" color="gray.400">
                    {data.company}, {data.position}
                  </Text> */}
                </Box>
              </Stack>
            </Stack>
  )
}

export default TestimonalCard
