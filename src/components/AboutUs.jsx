import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
const AboutUs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const paragraph1 = `The Legal Arch is a law firm in India comprising over 20 lawyers
            having offices in New Delhi and Noida. We provide legal advice and
            services to international and domestic clients. Our aim is to
            provide outstanding legal solutions in our chosen practice areas
            with a strong emphasis on ethics. Our clients benefit from our
            expertise and experience with the privilege of personal attention.
            Differentia Legal’s practice extends across diverse sectors of
            industry and services such as Manufacturing, Real Estate and
            Financial Services & Banking etc.`
    const paragraph2 = `We provide a diverse set of legal services to our clients and assist
            them to meet these challenges successfully. Our practice areas are
            Criminal law, Civil law, Banking & Finance; Capital Market;
            Corporate/M&A; Dispute Resolution & Litigation; Employment; Energy;
            Infrastructure & Mining; Information Technology & Communications;
            Insurance; Intellectual Property Rights and Real Estate. Our team is
            highly efficient in recovery matters relating to 138 NI Act (Cheque
            Bounce), Civil Recovery, Arbitration etc.`
  return (
    <>
    
        <div className="h-screen w-full">
      <div className="flex flex-col md:flex-row md:justify-center md:gap-5 w-full h-full px-20 py-10">
        <div className="h-auto md:w-full my-auto">
          <div className="w-10 md:w-16 lg:w-24 border-t-4 border-secondary-neutral mb-2" />
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-primary-dark font-bold mt-8">
            About Us
          </h1>
          <p className="text-justify text-sm md:text-md lg:text-lg mt-5 leading-6 md:leading-7 my-auto font-medium">
                    {paragraph1}
                    <span className="hidden md:inline">
                        <br/>
                        {paragraph2}
                    </span>
                    <button className="md:hidden font-semibold text-white block mx-auto mt-6 bg-primary-neutral rounded-ss-lg rounded-ee-lg px-4 py-2 hover:scale-105 hover:bg-primary-lighter transition-[transform,colors]" onClick={onOpen} >Read More</button>
          </p>
          </div>
          <div className="container py-12 ml-4 relative">
            <span className="hidden md:inline-block w-full h-full bg-[url('/about.png')] bg-transparent bg-contain bg-no-repeat bg-center drop-shadow-[0_15px_15px_rgba(3,156,137,0.5)]"></span>
          </div>
        </div>
        </div>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="bg-gray-500 text-white"><span className="font-extrabold text-4xl">About <span className="text-secondary-lighter">Us</span></span></ModalHeader>
          <ModalCloseButton />
          <ModalBody className="bg-gray-500 text-slate-50">
            <p className="text-md font-semibold leading-6 text-justify flex gap-1 flex-col">
              <span>{paragraph1}</span><span>{paragraph2}</span>
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutUs;
