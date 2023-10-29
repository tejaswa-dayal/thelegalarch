import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
const WhyUs = () => {
    const contents = [
        "We believe in understanding the business sensitivities of our clients in each transaction and then work as an integrated part of the clients team in every assignment for its thorough success.",
        "The firm always feels that the success of any transaction / assignment depends on the quality of advice that is provided and the experience of the team providing such advice. Giving due importance to each such transaction, a dedicated team of professionals having sector specific specialization, are engaged to handle the transaction, with a pragmatic and solution-oriented approach.",
    ]
  return (
    <div className='h-screen w-full bg-[url("/WhyUs.jpg")] bg-cover bg-no-repeat bg-center relative'>
        <div className="w-full h-full  bg-black/75 absolute top-0 text-white">
        <div className='h-full w-full flex flex-col justify-center items-center px-10 text-justify gap-10 md:px-16 md:gap-16 lg:flex-row lg:gap-20 lg:px-20'>
            <div className='lg:min-w-fit lg:-mt-6'>
                <div className='w-20 border-2 border-primary-neutral mb-5'></div>
                <h1 className='text-6xl md:text-8xl font-bold'><span className='text-secondary-lighter'>Why</span> Us?</h1>
            </div>
            <div className='md:px-11 lg:grow lg:px-24'>
                {
                    contents.map((content,index)=>{
                        return (
                            <p key={index} className='text-lg mt-4 md:text-2xl md:mt-8 lg:mt-16'><FontAwesomeIcon icon={faCircleCheck} className='text-secondary-neutral mr-4 text-sm lg:text-[1.1rem]'/>{content}</p>
                        )
                    })
                }
            </div>
        </div>
        </div>
    </div>
  )
}

export default WhyUs;