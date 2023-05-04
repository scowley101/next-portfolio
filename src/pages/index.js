import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import profilePic from "../../public/images/profile/computer-on-fire_transparent.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
      <title>Sam Fearon | Frontend Developer</title>
        <meta
          name="description"
          content="Sam Fearon is a frontend developer based in London, UK."
        />
      </Head>
      <TransitionEffect />
      <main className='flex items-center w-full min-h-screen text-dark dark:text-light sm:items-start'>
        <Layout className='pt-0 md:pt-16 sm:pt-16'>
           <div className="flex items-center justify-between w-full lg:flex-col">
               <div className='w-1/2 md:w-full'>
                <Image src={profilePic} alt="An image created with Midjourney AI. Prompt: a flat vector logo of a 90s computer with neon flames exploding from the screen in a vaporwave style" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                 />
               </div>
               <div className='flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center'>
                <AnimatedText text="Designing digital solutions for practical challenges" className='!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                '/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                A motivated and flexible front end developer with a drive to learn new skills and technologies. Driven by a desire to impact real world change through development. Explore my latest projects, showcasing my experience in a wide range of web technologies.
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/sam-fearon_cv.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-secondary dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                  >CV <LinkArrow className={"w-6 ml-1"}/>
                  </Link>
                  <Link href="mailto:sfcowley@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium underline capitalize text-dark dark:text-light md:text-base"
                  >Contact</Link>
                </div>
               </div>
           </div>
        </Layout>

        <HireMe />
        
      </main>
    </>
  )
}
