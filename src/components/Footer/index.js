import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook, FaLinkedin, FaYoutube, FaTwitter,FaInstagram} from 'react-icons/fa'
import { FooterContainer, 
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper, 
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    WebSiteTights,
    SocialIconLink} from './FooterElements';         

const Footer = () => {

    const toggleHome=()=>{
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle> About Us </FooterLinksTitle>
                            <FooterLink to='/signin'> How it Works </FooterLink>
                            <FooterLink to='/signin'> Testimonials </FooterLink>
                            <FooterLink to='/signin'> Careers </FooterLink>
                            <FooterLink to='/signin'> Investors</FooterLink>
                            <FooterLink to='/signin'> Terms of Service </FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle> Videos</FooterLinksTitle>
                            <FooterLink to='/signin'> Submit Video</FooterLink>
                            <FooterLink to='/signin'> Ambassadors </FooterLink>
                            <FooterLink to='/signin'> Agency </FooterLink> 
                            <FooterLink to='/signin'> Influencer </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle> Contact Us </FooterLinksTitle>
                            <FooterLink to='/signin'> Contact </FooterLink>
                            <FooterLink to='/signin'> Suport </FooterLink>
                            <FooterLink to='/signin'> Destinations</FooterLink>
                            <FooterLink to='/signin'> Sponsorships </FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle> Social Media </FooterLinksTitle>
                            <FooterLink href='//www.linkedin.com/'> LikedIn </FooterLink>
                            <FooterLink href='//www.facebook.com/'> Facebook </FooterLink>
                            <FooterLink href='//www.youtube.com/channel/UC98EBSgkE6dJZZky-MCbgvQ'> YouTube </FooterLink>
                            <FooterLink href='//www.twitter.com'> Twitter </FooterLink> 
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}> Leo CT </SocialLogo>
                        <WebSiteTights> Cristhian T. Leon © {new Date().getFullYear()} All Rights Reserved. </WebSiteTights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/" target="-_blank" aria-label="Facebook" > <FaFacebook/> </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/" target="-_blank" aria-label="LinkedIn" > <FaLinkedin/> </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/channel/UC98EBSgkE6dJZZky-MCbgvQ" target="-_blank" aria-label="Youtube" > <FaYoutube/> </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="-_blank" aria-label="Twitter" >  <FaTwitter/> </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target="-_blank" aria-label="Instagram" > <FaInstagram/> </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
