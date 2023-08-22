import React from "react";
import { SidebarContainer, 
    Icon, CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute} from "./SidebarElements";

const Sidebar =({isOpen, toggle})=>{
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>INICIO</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>NOSOTROS</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>SERVICIOS</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>PROYECTOS</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>CONTACTAR</SidebarLink>
                    {/** 
                    <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                    */}
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/signin' >Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;