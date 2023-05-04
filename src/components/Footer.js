import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base "
    >
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      
        <Link
          href="mailto:sfcowley@gmail.com"
          target={"_blank"}
          className="underline underline-offset-2 "
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
