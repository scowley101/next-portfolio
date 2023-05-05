import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Montserrat, Ubuntu, Merriweather, Lato } from 'next/font/google';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

const montserratBold = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont-bold',
  weight: '500',
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: '300',
});

const ubuntuBold = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu-bold',
  weight: '500',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: '300',
});
const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: '300',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fearon-favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main
        className={`${montserrat.variable} ${montserratBold.variable} ${lato.variable}  ${merriweather.variable} ${ubuntu.variable} ${ubuntuBold.variable} bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
