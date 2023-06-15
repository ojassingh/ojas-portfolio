import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import navItems from './NavData';
import Link from 'next/link';

const NavBar = () => {

  return (
    <motion.nav className='fixed bottom-0 right-0 p-20'>
      <ul className="space-y-4">
        {navItems.map((item) => {
          return(<li key={item.id} className="text-[#84A60A] text-sm tracking-wide">
            <Link href={item.link}>{item.name}</Link>
          </li>)
        })}
      </ul>
    </motion.nav>
  );
};

export default NavBar;