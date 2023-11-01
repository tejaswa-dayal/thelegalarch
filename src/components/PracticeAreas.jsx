import React, { useState } from 'react';
import { Card, CardBody, Text, Box, Heading } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { areas } from '../assets/data';
const PracticeAreas = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (cardIndex) => {
      setHoveredCard(cardIndex);
    };
  
    const handleMouseLeave = () => {
      setHoveredCard(null);
    };
    
  return (
    <div className='h-screen w-full' id="practice">
      <div className='h-full w-full flex flex-col px-20 py-10'>
        <div className='-ml-2.5 md:ml-0 self-center'>
            <h1 className='text-2xl font-bold md:text-6xl md:font-extrabold'>Our <span className='relative after:content-empty after:absolute after:-z-10 after:w-full after:border-[2px] md:after:border-4 after:border-secondary-lighter after:bottom-[0.35rem]  md:after:bottom-[0.65rem] after:left-0'>Practice</span> Areas</h1>
        </div>
        <div className='flex w-full h-full flex-wrap justify-center gap-4 mt-4'>
            {areas.map((area,index)=>{
                return(
                    index % 2 ? ( <Card key={index}
                        color={hoveredCard === index ? 'white':'black'}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        transition="background-color,color 0.3s,0.1s ease"
                        backgroundColor={hoveredCard === index ? 'secondary.neutral':'white'}
                        className='w-52'
                      >
                    <CardBody className='flex flex-col justify-center text-center'>
                        <Box>
                            <Heading><FontAwesomeIcon icon={area.areaLogo} className={`${hoveredCard === index?'text-primary-lighter' : 'text-secondary-neutral'}`}/></Heading>
                        </Box>
                        <Text className='font-semibold'>{area.areaName}</Text>
                    </CardBody>
                </Card>) : 
                (<Card size={'sm'} key={index} 
                color={hoveredCard === index ? 'white':'black'}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        transition="background-color,color 0.3s,0.1s ease"
                        backgroundColor={hoveredCard === index ? 'primary.neutral':'white'}
                className='w-52'>
                <CardBody className='flex flex-col justify-center text-center'>
                <Box>
                            <Heading><FontAwesomeIcon icon={area.areaLogo} className={`${hoveredCard === index?'text-secondary-lighter' : 'text-secondary-neutral'}`}/></Heading>
                        </Box>
                    <Text className='font-semibold'>{area.areaName}</Text>
                </CardBody>
            </Card>)
                    
                )
            })}
        
        </div>
      </div>
    </div>
  )
}

export default PracticeAreas
