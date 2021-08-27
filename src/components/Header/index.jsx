import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

import { Container, ImageLogo, BtnPrimaryLinkSm } from 'styles/CommonComponents'

import scrollTop from 'helpers/scrollTop'

import { ContainerHeader, MenuButton, Nav, NavItem, NavList, Overlay } from './styles'
import useToggle from 'hooks/useToggle'
import useCurrentLink from 'hooks/useCurrentLink'

const Header = () => {
  const { open, handleOpen, handleClose } = useToggle()
  useCurrentLink()
  
  return (
    <ContainerHeader>
      <Container>
        <div>
          <Link href="/" >
            <a onClick={scrollTop}>
              <ImageLogo src="/logo.svg" width="100" height="40" alt="Logo"/>
            </a>
          </Link>
        </div>
        <MenuButton onClick={handleOpen}>
          <AiOutlineMenu size="2.3rem"/>
          <Overlay isOpen={open}/>
        </MenuButton>
        <Nav isOpen={open}>
          <NavList>
            <NavItem>
              <MenuButton onClick={handleClose} ariaLabel="Botón de cerrar">
                <AiOutlineClose size="2.3rem"/>
              </MenuButton>
            </NavItem>
            <NavItem>
              <u><b>MENÚ</b></u>
            </NavItem>
            <NavItem onClick={handleClose} className="SobreMi">
              <Link href="#SobreMi" >Sobre mi</Link>
            </NavItem>
            <NavItem onClick={handleClose} className="Portafolio">
              <Link href="#Portafolio">Portafolio</Link>
            </NavItem>
            <NavItem>
              <BtnPrimaryLinkSm href="mailto:yadulopez21@gmail.com">Escríbeme <MdEmail/></BtnPrimaryLinkSm>
            </NavItem>
          </NavList>
        </Nav>
      </Container>
    </ContainerHeader>
  )
}

export default Header
