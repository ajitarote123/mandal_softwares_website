import React from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';

import { BsCodeSlash} from "react-icons/bs"
import { FaRegLightbulb} from "react-icons/fa"
import { TfiBarChartAlt} from "react-icons/tfi"
import { MdOutlineColorLens , MdMonitor} from "react-icons/md"
import { BiRocket} from "react-icons/bi"



const milestones = [
  {
    id: 1,
    title: 'Info Gathering',
    logo: <FaRegLightbulb/>
  },
  {
    id: 2,
    title: 'Planning',
    logo: <TfiBarChartAlt/>
  },
  {
    id: 3,
    title: 'Design',
    logo: <MdOutlineColorLens/>
  },
  {
    id: 4,
    title: 'Development',
    logo: <MdMonitor/>
  },
  {
    id: 5,
    title: 'Testing & Launch',
    logo: <BiRocket/>
  }
 
]


const Steps = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="4xl" >
     
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />
     
              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};



const Card = ({ id, title , logo}) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 2}}
      bg={useColorModeValue('gray.100', 'gray.800')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
    >
        <Box ml={"20px"} p={{base:2,lg:4}} borderRadius={50} border="1.5px solid #0078ff"> 
   <Text _hover={{color:"#0078ff"}} fontWeight="semibold"
    fontSize={{md:"18px",lg:"2xl"}}> {logo} </Text></Box> 
       
          <Text fontSize={{md:"15px",lg:"xl"}} fontWeight="medium" w="100%">
            {title}
          </Text>
       
        
     
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p={{base:"5px",md:"5px",lg:"7px"}}>
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, sm: 2 }} bg="transparent"></Box>;
};

export default Steps;