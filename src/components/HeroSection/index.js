import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import Video from '../../videos/video3.mp4';
import {HeroContainer, 
    HeroBg, VideoBg, 
    HeroContent, 
    HeroH1, HeroP,
    HeroBtnWrapper,
    ArrowFroward,
    ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover=() =>{
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Soy Cristhian T. Leon, Ingeniero de Sistemas e Informática:</HeroH1>
                <HeroP>
                    Web Developer: FrontEnd y BackEnd 
                    Lenguajes: JavaScript, NodeJs, PHP. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'  smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                        Contact me {hover ? <ArrowFroward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection