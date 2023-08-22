import React from 'react';
import Icon1 from '../../images/svg-5.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-5.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper,
        ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>NUESTRO SERVICIOS</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>INTERNET</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>CONEXIÓN SEGURA</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>INTERCONEXION</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
