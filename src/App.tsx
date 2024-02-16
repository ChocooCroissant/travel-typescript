import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Camp from "../components/Camp";
import Guide from "../components/Guide";
import Features from "../components/Features";
import GetApp from "../components/GetApp";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { SelectedPage } from "../constants";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [ selectedPage, setSelectedPage ] = useState<SelectedPage>(SelectedPage.Home);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsTopOfPage(true);
            setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0) {
            setIsTopOfPage(false);
        } 
    }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero setSelectedPage={setSelectedPage}/>
      <Camp/>
      <Guide/>
      <Features setSelectedPage={setSelectedPage}/>
      <GetApp setSelectedPage={setSelectedPage}/> 
      <Footer setSelectedPage={setSelectedPage}/>
    </>
  )
}

export default App
