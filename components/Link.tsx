import { SelectedPage } from '../constants';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ( { page, selectedPage, setSelectedPage }: Props ) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <div>
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-gray-900" : ""}
                regular-16 bold text-gray-400 flexCenter cursor-pointer pb-1.5 transition duration-500 hover:text-gray-50 
            `}
            onClick={() => setSelectedPage(lowerCasePage)}
            href={`#${lowerCasePage}`}
        >
            {page}
        </AnchorLink>
    </div>
  )
}

export default Link;