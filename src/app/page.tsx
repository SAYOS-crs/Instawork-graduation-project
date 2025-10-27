
import HomeCart from '@/components/HomeCart';
import {Button } from '@heroui/button'; 
import { label } from 'framer-motion/client';
import { RiBrush4Line } from "react-icons/ri";
import { GiBlacksmith } from "react-icons/gi";
import { IoIosHammer } from "react-icons/io";
import { LuUserRoundSearch } from "react-icons/lu";
import { GiDrill } from "react-icons/gi";
import RogBorder from '@/components/RogBorder/RogBorder';
import { IoCheckmark } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { MdPostAdd } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";

export default function Home() {


  const services = [
    {label: 'حداد', icon : GiBlacksmith   } ,
    {label: 'نقاش', icon : RiBrush4Line   },
    {label: 'نجار', icon : IoIosHammer  },
    {label: 'كهربائي', icon : GiDrill  },
    ]

    const provide = [
      
    {for:'client' , header: 'Find the right worker', text : 'Choose the right person for the task and investigate him according to the ratings and his portfolio.' , icon : LuUserRoundSearch   } ,
    {for:'client' , header: 'Post your Job', text : 'Post your job with the ability to include details such as budget, location, and required skills.' , icon : IoCheckmark   } ,
    
    {for:'worker', header: 'Post your service', text : 'Publish your services to be easily found by Clients, with service details such as availability, location, and more.' , icon : MdPostAdd    } ,
    {for:'worker', header: 'Facilitate finding a job ', text : 'Search the jobs section for the job that suits your field and find out the details of the task, budget and specifications.' , icon : TbListDetails    } ,
    {for:'worker', header: 'Display your Work ', text : 'Display photos of your most prominent work in the Gallery to reflect the quality of your work and build trust between the worker and the client.' , icon : TfiGallery     } ,

    ]

  return <>
  <section className='  bg-linear-to-r from-[#000000] to-[#434343] text-primry-background text-center flex flex-col justify-center  ' >
      
      
      {/* header */}
    <div className='flex flex-col justify-center h-screen'>

      <header className='pb-7'>

        <h1 className="text-5xl text-white font-bold"> Match your skills to <br /> your career opportunities </h1>
        <p className="mt-5 text-white">Instajob is a platform that connects craftspeople with clients. <br /> Whether you're looking for a skilled craftsman or a new job opportunity, <br /> we're here to help.</p>
      </header>

    <div className='mt-5'>
      <Button color='default' variant='ghost' className='text-white m-2 outline-none hover:text-black'>Find a job</Button>
      <Button color='default' variant='ghost' className='text-white m-2 outline-none hover:text-black'>View services</Button>
    </div>
    </div>


    {/* Common professions */}
  <div className='bg-linear-to-r from-[#000000] to-[#434343] mb-10 grid md:grid-cols-2 lg:grid-cols-4   '>

  <div className=' md:col-span-2 mb-6 lg:col-span-4 '>
    <h2 className=' bg-primry-background text-main-background p-2 text-3xl font-bold my-1 shadow-2xl shadow-primry-background '>Common professions</h2>

    <p className='text-medium my-5'>Choose from a wide range of speciali  zations.</p>
  </div>


      {services.map(  (service) => 
      <RogBorder>
          <div className=' h-fit my-5 flex flex-col gap-5 mx-auto justify-center p-6 '>
        <div className='bg-primry-background  w-fit mx-auto cursor-pointer text-main-background hover:bg-main-background hover:text-primry-background transition-all my-3 p-4 rounded-full'>
          <service.icon className='text-5xl   mx-auto' />
        </div>
      <header className='my-1'> {service.label} </header>
      <span> {'عدد مقدمين الخدمه في هذه الحرفة (10)'} </span>
      <p className='mb-3'> {' خدمات تساعدك في انجاز عملك مع الشخص المناسب للمهمه'} </p>
          </div>
      </RogBorder>
      

    )}


  </div>

    {/* tastmonial */}
    <div className='my-5'>
      <header className='bg-primry-background shadow-2xl shadow-primry-background text-main-background py-2'><h2 className=''>What does the platform provide?</h2></header>

      <div className='container mx-auto grid lg:grid-cols-2 gap-10  my-15'>

      <div className='grid gap-y-10   my-3'>
        <header><h2 className='text-3xl font-bold'>For the Artisanes</h2></header>
        {provide.map( (prov)=>
        prov.for === 'worker' && <div className='group hover hover:bg-primry-background hover:text-main-background max-lg:hover:scale-105 lg:hover:translate-x-[2%] lg:hover:translate-y-[2%] transition-all max-h-65 p-7  border-1 flex flex-col justify-between border-primry-background text-center'>
            <div>
          <i className='group-hover:text-primry-background group-hover:bg-main-background inline-block bg-primry-background text-main-background text-4xl p-4 my-3  rounded-full  '>
          <prov.icon />
          </i>
            </div>
          <h3>{prov.header}</h3>
          <article className='p-4'>{prov.text}</article>

        </div>
        )}

        
      </div>

      <div className='  my-3'>
        <header className=''><h2 className='text-3xl font-bold'>For the Clients</h2></header>
        <div className='grid gap-10 my-10'>

         {provide.map( (prov)=>
        prov.for === 'client' && <div className='group hover: max-lg:hover:scale-105 lg:hover:translate-x-[-2%] lg:hover:translate-y-[2%] hover:bg-primry-background hover:text-main-background transition-all max-h-65 p-9  flex flex-col justify-between border-1 border-primry-background text-center'>
          
          <div>
          <i className=' inline-block bg-primry-background text-main-background text-4xl p-4 my-3 group-hover:text-primry-background group-hover:bg-main-background  rounded-full  '>
          <prov.icon />
          </i>
          </div>
          
          <h3>{prov.header}</h3>
          <article className='p-4'>{prov.text}</article>
        </div>
        )}
        </div>
      </div>


        {/*  */}

      </div>

    </div>



  </section>

      
  </>
}
