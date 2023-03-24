import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  useToast,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  
  MdOutlineEmail,
} from 'react-icons/md';
import {  BsLinkedin, BsPerson } from 'react-icons/bs';
import {  AiFillInstagram } from 'react-icons/ai';
import emailjs from "emailjs-com"
import { useFormik } from 'formik';
import { useState } from 'react';


  export default function ModalGetinTouch() {

    
    const toast = useToast()
  
    const initialValue = {
      "Name" : "",
      "EmailS" : "",
      "Mobile" : "" ,

      
      "WebDevelopment" : false,
      "SearchEngineMarketing" : false,
      "SocialMediaMarketing" : false,
      "EmailMarketing" : false,
      "ContentMarketing" : false,
      "DigitalMarketing" : false,
      "other" : false
   }

   const [formData, setformData] = useState(initialValue);
   const [radioValue, setRadio] = useState('Self')

   const handleChange = (e) => {
    const { name: key, value, type, checked } = e.target;

    const val = type === "checkbox" ? checked : value;

    setformData({ ...formData, [key]: val });
  };

   const SendMail = ()=>{


   if(formData.Name == "") return  toast({
    title: 'Enter Valid Details.',
   
    status: 'warning',
    duration: 5000,
    isClosable: true,
  })
   if(formData.EmailS == "") return  toast({
    title: 'Enter Valid Details.',
   
    status: 'warning',
    duration: 5000,
    isClosable: true,
  })
   if(formData.Mobile == "") return    toast({
    title: 'Enter Valid Details.',
   
    status: 'warning',
    duration: 5000,
    isClosable: true,
  }) 

   // console.log(formData)
   // console.log(radioValue)
   let Regarding = [ ]
   

    if(formData.WebDevelopment) Regarding.push("Web Development  ")
    if(formData.SearchEngineMarketing) Regarding.push("Search Engine Marketing  ")
    if(formData.SocialMediaMarketing) Regarding.push("Social Media Marketing  ")
    if(formData.EmailMarketing) Regarding.push("Email Marketing  ")
    if(formData.ContentMarketing) Regarding.push("Content Marketing  ")
    if(formData.DigitalMarketing) Regarding.push("Digital Marketing  ")
    if(formData.other) Regarding.push("Other  ")   

    console.log(Regarding.join(","))

   const templateParams = {  
    "name":formData.Name, 
    "user-email":formData.EmailS, 
    "Mobile":formData.Mobile,
    "InquiryFor" : radioValue,
    "Regarding" : Regarding
  }
   

  // emailjs.send('service_ay1vmsb','template_epnino9', templateParams, 'tdxVqQRKxjyYN5Tjq')
  // .then((response) => {
  //    console.log('SUCCESS!', response.status, response.text);
  // }, (err) => {
  //    console.log('FAILED...', err);
  // });

  
    toast({
      title: "Message sent successfully.",
      description: "to the Mandal Softwares Team.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    setformData(initialValue)
setRadio("Self")
  


    }

 //  const { values , errors , touched, handleBlur, handleChange, handleSubmit,setValues  } = useFormik({ 
 //     initialValues,
 // //  validationSchema : ContactSchema,
 //     onSubmit : (values, action)=> {
 //       action.resetForm()
 //     setValues(initialValues)
 //      SendMail({  "name":values.Name, "user-email":values.EmailS, "message":values.Message,"Mobile":values.Mobile, })
 //     } 
 //   })


 
    return (
   
        <Box bg="white" borderRadius="lg">
        <Box color="#0B0E3F">
        <VStack  h="100%"  bg="white" borderRadius="lg">
                    <Box m={{base:"0", md:8}} color="#0B0E3F">
                      <VStack w={{base:"fit-content", md:"sm", lg:"lg"}} 
                      spacing={{base:3, md:5}}>

                        <FormControl id="name">
                          <FormLabel  >Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />

                            <Input type="text" size="md"
                              onChange={handleChange}
                              value={formData.Name}
                              name="Name"
                              placeholder="Enter Name"
                            
                            
                            />

                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Your Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />

                            <Input type="text" size="md"
                            onChange={handleChange}
                            value={formData.EmailS}
                            name="EmailS"
                            placeholder='Your Email'
                            />


                            
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Phone Number</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdPhone color="gray.800" />}
                            />
                            <Input type="text" size="md"
                               onChange={handleChange}
                               value={formData.Mobile}
                               name="Mobile"
                               placeholder='Phone Number'
                            />
                          </InputGroup>
                        </FormControl>

                         
                  
                        <FormControl id="name">
                          <FormLabel  >Inquiry for</FormLabel>
                          <RadioGroup 
                          onChange={setRadio} value={radioValue}
                          defaultValue='Self'>
                           <Stack spacing={5} direction='row'>
                             <Radio  
                             value='Self'
                             >
                               Self
                             </Radio>
                             <Radio  value='Company'>
                               Company
                             </Radio>
                           </Stack>
                         </RadioGroup>
                         </FormControl>


                         <FormControl id="name">
                          <FormLabel  >Regarding</FormLabel>

                          <Wrap w={'full'}  align={"flex-start"} justify={"flex-start"} spacing={{base:2, md:5}} direction='row'>
                           <Checkbox  
                            onChange={handleChange}
                            type="checkbox"
                            name="WebDevelopment"
                            checked={formData.WebDevelopment}
                           >Web Development</Checkbox>

                           <Checkbox 
                            onChange={handleChange}
                            type="checkbox"
                            name="SearchEngineMarketing"
                            checked={formData.SearchEngineMarketing}
                           >Search Engine Marketing</Checkbox>

                           <Checkbox 
                             onChange={handleChange}
                             type="checkbox"
                             name="SocialMediaMarketing"
                             checked={formData.SocialMediaMarketing}
                           >Social Media Marketing</Checkbox>

                           <Checkbox  
                              onChange={handleChange}
                              type="checkbox"
                              name="EmailMarketing"
                              checked={formData.EmailMarketing}
                           >Email Marketing</Checkbox>

                           <Checkbox 
                            onChange={handleChange}
                            type="checkbox"
                            name="ContentMarketing"
                            checked={formData.ContentMarketing}
                           >Content Marketing</Checkbox>

                           <Checkbox 
                           onChange={handleChange}
                           type="checkbox"
                           name="DigitalMarketing"
                           checked={formData.DigitalMarketing}
                           >Digital Marketing</Checkbox>
                           
                           <Checkbox
                            onChange={handleChange}
                            type="checkbox"
                            name="other"
                            checked={formData.other}
                           >Other</Checkbox>
                         </Wrap>
                         </FormControl>

                      { /* <FormControl id="name" float="right">
                        <FormLabel>Regarding</FormLabel>
                        <Select placeholder='Select'>
                        <option value='option1'>Website Development</option>
                          <option value='option2'>Social media Marketing</option>
                          <option value='option2'>Sales Promotion</option>
                          <option value='option2'>Creatives Design</option>
                          <option value='option2'>Logo Design</option>
                          <option value='option2'>Virtual assistance</option>
                          <option value='option2'>Advertising</option>

                        </Select>
    </FormControl> */}
               
                           
                      
                        <FormControl id="name" float="right">
                          <Button
                          onClick={SendMail}
                            variant="solid"
                            colorScheme={'purple'}
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>

                          
                        </FormControl>




                      </VStack>
                    </Box>
                  </VStack>
        </Box>
      </Box>

    );
  }