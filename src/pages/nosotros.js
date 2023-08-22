import React, { useState } from 'react';
import About from '../components/AboutUs/About';
import { aboutObjOne } from '../components/AboutUs/DataA';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Nosotros = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <About {...aboutObjOne}/>
    </>
  );
}

export default Nosotros;
