import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import AnimatedText from '../components/AnimatedText';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Layout from '../components/Layout';
import Skills from '../components/Skills';
import TransitionEffect from '../components/TransitionEffect';
import profilePic from '../../public/images/profile/sam-headshot_transp.png';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} />;
};

const about = () => (
  <>
    <Head>
      <title>Sam Fearon | About Page</title>
      <meta
        name="description"
        content="Read about Sam Fearon's background as a Chef and his transition into the world of web development."
      />
    </Head>
    <TransitionEffect />
    <main className="flex flex-col items-center justify-center w-full dark:text-light">
      <Layout className="pt-16">
        <AnimatedText
          text="Sam Fearon"
          className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I&apos;m Sam. You may have come across me going by the name of
              Cowley. Fearon is my married name.
            </p>

            <p className="my-4 font-medium">
              I have been a Chef for 8 years and a Developer for 3. Before these
              recent career iterations I was a Product Owner. This might seem
              like an odd mix, but this range of experience has honed my
              problem-solving skills and developed a strong ability to
              communicate with people from all fields.
            </p>

            <p className="my-4 font-medium">
              Learning Javascript in 2020 felt like gaining a superpower. Having
              spent much of the last decade delivering events under extreme
              pressure (think 200 person wedding...in a field...only half the
              staff have turned up...the fire pit hasn't been dug...and now
              it&apos;s raining); I now had a set of tools which would multliply
              these hard won problems solving skills in prioritisation,
              creativity and iteration.
            </p>

            <p className="font-medium">
              I love learning new skills, so will always jump at the opportunity
              to exerience new technologies or frameworks. If you think I can
              help with your project, please feel free to reach out to me.
            </p>
          </div>

          <div className="relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 ">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              src={profilePic}
              alt="Sam Fearon"
              className="w-full h-auto rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>

          <div className="flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={20} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                weddings catered
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={2} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                years of programming
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
              {/* <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  years of experience
                </h2> */}
            </div>
          </div>
        </div>

        <Skills />
        <Experience />
        {/* <Education /> */}
      </Layout>
    </main>
  </>
);

export default about;
