import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #FF8C00;
    display: grid;
    align-items: center; 
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen})=> (isOpen ? '0': '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #008B8B;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none; 
`;

export const SidebarWrapper = styled.div`
    color: #008B8B;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #008B8B;
    cursor: pointer;

    &:hover {
        color: #8B008B;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarBtnWrap =styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #8B008B;
    white-space: nowrap;
    padding: 16px 64px;
    color: #FF8C00;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #483D8B;
        color: #FF8C00;
    }
`;
