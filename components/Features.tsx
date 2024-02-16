import { FEATURES, SelectedPage } from "../constants";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}


const Features = ({ setSelectedPage }: Props) => {
  return (
    <section id="features" className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
        <motion.div 
          className="max-container padding-container relative w-full flex justify-end"
          onViewportEnter={() => setSelectedPage(SelectedPage.Features)}  
        >
          <div className="flex flex-1 lg:min-h-[900px]">
            <img
              src="/phone.png"
              alt="phone"
              width={440}
              height={1000}
              className="feature-phone"
            />
          </div>

          <div className="z-20 flex w-full flex-col lg:w-[60%]">
            <div className="relative">
              <img
                src="/camp.svg"
                alt="camp"
                width={50}
                height={50}
                className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              />
              <h2 className="bold-40 lg:bold-64">Our Features</h2>
            </div>
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
              {FEATURES.map((feature) => (
                <FeatureItem
                  title={feature.title}
                  key={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />
              ))}
            </ul>
          </div>
        </motion.div>
    </section>
  )
}

interface FeatureType {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({title, icon, description}: FeatureType) => {
  return(
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="bg-green-50 p-4 rounded-full lg:p-7">
        <img src={icon} alt="map" width={28} height={28}/>
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
}


export default Features;