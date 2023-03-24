import { Button, Highlight, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import GetinTouchModal from './ModalComp';


const GetQuotePrototype = ({main ,sublable, YelloWord}) => {


    const [modalVisible, setmodalVisible] = useState(false);
   

  return (
    <Stack  
    position={"relative"}
    overflow={"hidden"}
    justify={"center"} align={"center"} 
    w="100%" 
    spacing={5}
    p={{base:5,md:10}}
    bgGradient={"linear-gradient(0deg, rgba(0,120,255,1) 0%, rgba(5,80,201,1) 57%)"}  >

<Text maxW={"800px"} textAlign="center"
lineHeight={{base:"40px",md:"none", xl:"none"}}
color="white" fontSize={{base:"3xl", md:"3xl" ,lg:"4xl", xl:"4xl"}}>
      <Highlight
       styles={{ fontsize:"", px: '1', py: '1', color: 'yellow' }}
          query={`${YelloWord}`} >
          {main}
    </Highlight>
      </Text >

      <Text maxW={"700px"} textAlign="center" color="whiteAlpha.900"  
      fontsize={{base:"15px",md:"xl"}} lineHeight={{base:"20px", md:"30px"}} >
      {sublable}
      </Text>

        <GetinTouchModal
      isOpen={modalVisible}
      setmodalVisible={setmodalVisible}
      />
     <Button onClick={()=>setmodalVisible(true)} fontWeight="normal" colorScheme="yellow" variant='solid'>
               Get your Quote 
                </Button>

     
      

    </Stack>
  )
}

export default GetQuotePrototype
