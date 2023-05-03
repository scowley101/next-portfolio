import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='flex items-center justify-center w-16 h-16 text-2xl font-bold border border-transparent border-solid rounded-full bg-dark text-light dark:border-light '
        whileHover={{ 
            backgroundColor:["#1e1c1d", "#F0BC51", "#FC4F52","#0CE8CE","#FA2A7E","#F0BC51", "#FC4F52", "#1e1c1d"],
            transition:{duration:2, repeat: Infinity}
        }}
        >SF</MotionLink>
    </div>
  )
}

export default Logo