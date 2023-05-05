import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../../components/AnimatedText';
import { GithubIcon } from '../../components/Icons';
import Layout from '../../components/Layout';
import cowField from '../../../public/images/projects/cow-and-field.png';
import TransitionEffect from '../../components/TransitionEffect';
import mamaBuciHomepage from '../../../public/images/projects/mama-buci/mama-buci1.png';
import mamaBuciProduct from '../../../public/images/projects/mama-buci/mama-buci-prod.png';



const FramerImage = motion(Image);

const ProjectImage = ({ title, img }) => (
  <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4 ">
      <FramerImage
        src={img}
        alt={title}
        className="w-full h-auto"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      />
   
  </article>
);

const mamabuci = () => (
  <>
    <Head>
      <title>Sam Fearon | Cow + Field</title>
      <meta
        name="description"
        content="Images of the new C+F designs"
      />
    </Head>
    <TransitionEffect />
    <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
      <Layout className="pt-16">
        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-6 sm:col-span-12">
            <ProjectImage
            title="Mama Buci Homepage"
              img={mamaBuciHomepage}
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <ProjectImage
            title="Mama Buci Product Page"
              img={mamaBuciProduct}
            />
          </div>
         
          </div>
        
      </Layout>
    </main>
  </>
);


export default mamabuci;
