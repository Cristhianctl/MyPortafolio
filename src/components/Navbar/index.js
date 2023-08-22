import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo,
    Navspan, 
    MobileIcon,
    NavMenu,
    NavItems, 
    NavLinks,
    NavBtn,
    NavBtnLink 
    } from './NavbarElements';

const Navbar = ({toggle}) => { 
    const [scrollNav,setScrollNav] = useState(false);

    const changeNav =()=>{
        if (window.scrollY >=80) {
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[]);

    const toggleHome=()=>{
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}> <Navspan>F</Navspan>OA</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />   
                        </MobileIcon>
                        <NavMenu>
                            <NavItems>
                                <NavLinks to='home' smooth='true' duration={500} spy='true' exact='true' offset={-80}>INICIO</NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks to='nosotros' smooth='true' duration={500} spy='true' exact='true' offset={-80}>NOSOTROS</NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks to='services' smooth='true' duration={500} spy='true' exact='true' offset={-80}>SERVICIOS</NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks to='projects' smooth='true' duration={500} spy='true' exact='true' offset={-80}>PROYECTOS</NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks to='contact' smooth='true' duration={500} spy='true' exact='true' offset={-80}>CONTACTANOS</NavLinks>
                            </NavItems>
                           
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/signin' smooth='true' duration={500} spy='true' exact='true' offset={-80}>Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer> 
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
