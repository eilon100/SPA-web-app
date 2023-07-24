import React, { useEffect, useState } from 'react';

const scrolledNavBarStyle = 'bg-main';

function useApplyNavBarStyle() {
  const [navbarStyle, setNavbarStyle] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarStyle(scrolledNavBarStyle);
      } else {
        setNavbarStyle('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [navbarStyle];
}

export default useApplyNavBarStyle;
