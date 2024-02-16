import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../constants";
import Button from "./Button";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}



const Hero = ({setSelectedPage}: Props) => {
  return (
    <section id="home" className="max-container padding-container flex flex-col
        gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <motion.div 
            className="hero-map"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0 },
            }}    
        />
    
        {/* LEFT */}
        
        <motion.div 
            className="relative z-20 flex flex-1 flex-col xl:w-1/2"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}  
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}      
        >
            <img
                src="../public/camp.svg"
                alt="camp"
                width={50}
                height={50}
                className="absolute lg:left-[-5px] lg:top-[-20px] left-[158px] top-[-25px] w-10 lg:[50px]"
            />
            <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
            <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. 
                We can help you on an adventure around the world in just one app
            </p>

            <motion.div 
                className="my-11 flex flex-wrap gap-5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}    
            >
                <div className="flex items-center gap-2">
                    {Array(5).fill(1).map((_, index) => (
                        <img
                            src="../public/star.svg"
                            key={index}
                            alt="star"
                            width={24}     
                            height={24}                   
                        />
                    ))}
                </div>
                <p className="bold-16 lg:bold-20 text-blue-70">
                    198k
                    <span className="regular-16 lg:regular-20 ml-1">
                        Excellent Reviews
                    </span>
                </p>
            </motion.div>

            <div className="flex flex-col w-full gap-3 sm:flex-row">
                <AnchorLink
                    href={`#${SelectedPage.App}`}
                    onClick={() => setSelectedPage(SelectedPage.App)}
                >
                    <Button
                        type="button"
                        title="Download App"
                        variant="btn_green"
                    />
                </AnchorLink>
                <Button
                    type="button"
                    title="How we work"
                    icon="/play.svg"
                    variant="btn_white_text"
                />
            </div>
        </motion.div>
        

            
            
        <motion.div 
            className="relative flex flex-1 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 1 },
            }}
        >
            <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                <div className="flex flex-col">
                    <div className="flexBetween">
                        <p className=" regural-16 text-gray-20">Location</p>
                        <img src="/close.svg" alt="close" width={24} height={24}/>
                    </div>
                    <p className="bold-20 text-white">Aguas Calientes</p>
                </div>

                <div className="flexBetween">
                    <div className="flex flex-col">
                        <p className="regular-16 block text-gray-20">Distance</p>
                        <p className="bold-20 text-white">173.28 ml</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="regular-16 block text-gray-20">Elevation</p>
                        <p className="bold-20 text-white">2.040 km</p>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )

}

export default Hero;