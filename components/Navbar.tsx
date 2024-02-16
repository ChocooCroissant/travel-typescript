import { XMarkIcon } from '@heroicons/react/16/solid'
import { NAV_LINKS, SelectedPage } from '../constants'
import Button from './Button'
import Link from "./Link"
import { useState } from 'react'

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}


const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-white drop-shadow";
  /*drop-shadow fixed top-0 z-30 w-full py-6 */
  return (
    <nav>
      <div className={`${navbarBackground} flexBetween fixed padding-container w-full z-30 py-5`}>
        <a href="/">
          <img src="../public/hilink-logo.svg" alt='logo' width={74} height={29}/>
        </a>

        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link
              page={link.label}
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
          ))}
        </ul>
        
        <div className='lg:flexCenter hidden'>
          <Button
            type='button'
            title='Login'
            icon='../public/user.svg'
            variant="btn_dark_green"
          />
        </div>
        
        <button 
          className='lg:hidden'
          onClick={ () => setIsMenuToggled(!isMenuToggled)}
        >
          <img
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className='inline-block'
          />
        </button>
      </div>
      {isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white drop-shadow-xl'>
          {/* Close Icon */}
          <div className=' flex justify-end p-12'>
            <button onClick={ () => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-6 w-6 text-gray-30'/>
            </button>
          </div>

          <div className='flex flex-col gap-10 text-2xl'>
            <div className='m-auto'>
              <Button
                type='button'
                title='Login'
                icon='../public/user.svg'
                variant="btn_dark_green"
              />
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                page={link.label}
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar