import { Link as ScrollLink } from 'react-scroll';
import { cn } from '../../utils/cn';
import DrawerMenu from '../Drawer';
import useApplyLinkStyle from './hooks/useApplyLinkStyle';
import useApplyNavBarStyle from './hooks/useApplyNavBarStyle';

const sectionsOffset = 64;

const sections = [
  { nameToDisplay: 'בית', sectionName: 'home' },
  { nameToDisplay: 'מי אנחנו', sectionName: 'about' },
  { nameToDisplay: 'תפריט', sectionName: 'menu' },
  { nameToDisplay: 'צור קשר', sectionName: 'contact' },
];

function NavBar() {
  const [navBarStyle] = useApplyNavBarStyle();
  const [activeSection] = useApplyLinkStyle({ offset: sectionsOffset });

  return (
    <nav
      className={cn(
        'fixed top-0 z-20 mx-auto flex w-screen items-center justify-between bg-transparent px-7 py-3 shadow-sm transition duration-700 xl:px-20',
        navBarStyle
      )}
    >
      <img src="/logo.svg" className=" aspect-auto w-20" />
      <ul className="text-md hidden h-full flex-row-reverse items-center justify-center gap-10 sm:flex">
        {sections.map(({ nameToDisplay, sectionName }) => {
          const isLinkSectionActive = activeSection === sectionName;

          return (
            <li key={sectionName}>
              <ScrollLink
                to={sectionName}
                smooth={true}
                duration={100}
                offset={-sectionsOffset}
                className={cn(
                  'cursor-pointer font-semibold text-white hover:text-third',
                  isLinkSectionActive ? 'text-third' : ''
                )}
              >
                {nameToDisplay}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden">
        <DrawerMenu />
      </div>
    </nav>
  );
}

export default NavBar;
