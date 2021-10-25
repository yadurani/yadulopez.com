import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import scrollTop from 'helpers/scrollTop'

import Msg from 'constants/messages'

import { Container, ImageLogo, ImagePatterns } from 'styles/CommonComponents'
import { ContainerCopy, ContainerFooter, ContainerInfo, LinkExternal, SocialList, TextInfo } from './styles'

const Footer = () => (
  <ContainerFooter>
    <Container>
      <ContainerInfo>
        <div>
          <Link href="/" >
            <a onClick={scrollTop}>
              <ImageLogo  src="/logo.svg" width="100" height="40" alt="Logo"/>
            </a>
          </Link>
        </div>
        <TextInfo>
          <span>Trabajemos juntos | <LinkExternal href="mailto:yadulopez21@gmail.com"><u><b>Contáctame aquí</b></u></LinkExternal>.</span>
          <span><b>Frontend Developer - Web Designer</b></span>
        </TextInfo>
      </ContainerInfo>
      <ContainerCopy>
        Creado con 💛 por Yadurani López.
        <SocialList>
          <li>
            <LinkExternal rel="noopener" href={Msg.Linkedin} target="_blank" title="Linkedin">
              <span>Red social de Linkedin</span>
              <FaLinkedinIn size="1.2rem"/>
            </LinkExternal>
          </li>
          <li>
            <LinkExternal rel="noopener" href={Msg.Twitter} target="_blank">
              <span>Red social de Twitter</span>
              <FaTwitter size="1.2rem"/>
            </LinkExternal>
          </li>
          <li>
            <LinkExternal rel="noopener" href={Msg.Github} target="_blank">
              <span>Red social de Github</span>
              <FaGithub size="1.2rem"/>
            </LinkExternal>
          </li>
        </SocialList>
      </ContainerCopy>
    </Container>
    <ImagePatterns 
      alt="Patrón de cuadrados"
      src="/patterns-square.svg" 
      width="737" 
      height="237" 
      className="PatternSquare"/>
  </ContainerFooter>
)

export default Footer
