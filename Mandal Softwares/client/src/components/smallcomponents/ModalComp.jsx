import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
  
} from "@chakra-ui/react";

import ModalGetinTouch from "./ModalGetintouch";

function GetinTouchModal({ isOpen, setmodalVisible }) {
  const onClose = () => {
    setmodalVisible(false);
  };

  return (
    <>
      <Modal  size={{md:"md", lg:"xl"}}  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          
          <ModalHeader fontSize={"2xl"} >Get in Touch</ModalHeader>
          <ModalCloseButton />
          <ModalBody w="100%">
            <ModalGetinTouch/>
            
          </ModalBody>

          <ModalFooter position="relative">
          <Button  position={"absolute"} top={{base:"-48px",md:"-78px"}} left={{base:"200px", md:"200px"}}  colorScheme="messenger" variant={"outline"} mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default GetinTouchModal;
