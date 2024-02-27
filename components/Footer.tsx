import { motion } from "framer-motion";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS, SelectedPage } from "../constants";
import React from "react";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer id="contactus" className='flexCenter mb-24'>
      <motion.div 
        className="padding-container max-container flex w-full flex-col gap-14"
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <a href="/" className="mb-10">
            <img src="hilink-logo.svg" alt="logo" width={74} height={29}/>
          </a>

          <div className="flex flex-wrap gap-10 sm:justify-between sm:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4">
                  {columns.links.map((link) => (
                    <a href="/" key={link}>
                      {link}
                    </a>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <a
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </a>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) =>(
                    <a href="/" key={link}>
                      <img src={link} alt="logo" width={24} height={24}/>
                    </a>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        
        <div className="border bg-gray-20"/>
        <p className="regular-14 w-full text-center text-gray-30">
          2024 Hilink | All rights reserved
        </p>
      </motion.div>
    </footer>
  )
}

interface FooterType {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({title, children}: FooterType) => {
  return(
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
}


export default Footer;