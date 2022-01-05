import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-7.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper,
        ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1> Our Services </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Reduce expence</ServicesH2>
                    <ServicesP> We help reduce your fess and increase your averall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2> Virtual Offices</ServicesH2>
                    <ServicesP> Tou can access our platform online anywhere in the world .</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2> Premiun Benefits</ServicesH2>
                    <ServicesP> Unlock our special membership card that reurns 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
