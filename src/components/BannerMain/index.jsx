import React from 'react'
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa'
import { IoArrowDownCircleSharp } from 'react-icons/io5'
import Typed from 'react-typed'

import { Container, ImagePatterns } from 'styles/CommonComponents'

import { CaptionBanner, ContainerBanner, SubtitleBanner, TitleBanner,  SocialBanner, LinkExternalBanner, ArrowButton } from './styles'
import Msg from 'constants/messages'

import useScrollInto from 'hooks/useScrollInto';
import useWindowSize from 'hooks/useWindowSize'

const BannerMain = () => {
  const handleScrollDown = useScrollInto(Msg.About)
  const [_ , height] = useWindowSize()

  return (
    <ContainerBanner height={height}>
      <Container>
        <SubtitleBanner>¡Hola! Me llamo,</SubtitleBanner>
        <TitleBanner>Yadurani López</TitleBanner>
        <CaptionBanner>
          <Typed
            strings={['Frontend Developer', 'Web Designer']}
            typeSpeed={80}
            backSpeed={80}
            loop/>
        </CaptionBanner>
        <SocialBanner>
          <LinkExternalBanner rel="noopener" href={Msg.Linkedin} target="_blank">
            <FaLinkedinIn size="1.5rem"/>
          </LinkExternalBanner>
          <LinkExternalBanner rel="noopener" href={Msg.Twitter} target="_blank">
            <FaTwitter size="1.5rem"/>
          </LinkExternalBanner>
          <LinkExternalBanner rel="noopener" href={Msg.Github} target="_blank">
            <FaGithub size="1.5rem"/>
          </LinkExternalBanner>
        </SocialBanner>
        <ImagePatterns 
          alt="Patrón de puntos"
          src="/pattern-dots.svg" 
          width="151" 
          height="320" 
          className="PatternDots"/>
        <ImagePatterns
          alt="Patrón de cuadrados"
          src="/patterns-square.svg" 
          width="737" 
          height="237" 
          className="PatternSquare"/>
      </Container>
      <ArrowButton onClick={handleScrollDown}>
        <IoArrowDownCircleSharp size="4rem"/>
      </ArrowButton>
    </ContainerBanner>
  )
}

export default BannerMain
