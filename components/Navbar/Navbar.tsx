import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import navItems from './NavData';
import Link from 'next/link';

const NavBar = () => {

  return (
    <motion.nav className='fixed md:bottom-0 lg:botom-0 md:right-0 lg:right-0 md:p-20 lg:p-20'>
      <ul className="grid gap-2">
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