import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed ${
        isSticky ? 'top-0 left-0 w-full' : 'right-0 top-0 h-screen w-16'
      } bg-gray-800 text-white flex items-center justify-center`}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <ul className="space-y-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
