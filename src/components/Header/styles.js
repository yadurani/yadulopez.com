import styled from 'styled-components'
import { Container } from 'styles/CommonComponents'

export const ContainerHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: rgba(255,255,255,0.01);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  ${Container} {
    align-items: center;
    display: grid;
    grid-template-columns: auto 1fr;
    height: 60px;
    @media(max-width: 767px) {
      grid-template-columns: 1fr 40px;
      height: 55px;
    }
  }
`

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  justify-content: flex-end;
  @media(max-width: 767px) {
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.size.md};
    width: 100%;
  }
`
  
export const NavItem = styled.li`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.size.sm};
  letter-spacing: 0.05rem;
  position: relative;
  &:not(:last-child) a:before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.primary};
    position: absolute;
    bottom: -2px;
    transition: transform 0.3s ease;
    transform: scale(0);
  }
  @media (hover: hover) {
    &:not(:last-child) a:hover {
      color: ${({ theme }) => theme.palette.primary};
      text-decoration: none;
      &::before {
        transition: transform 0.3s ease;
        transform: scale(1);
      }
    }
  }
  &.active a {
    color: ${({ theme }) => theme.palette.primary};
    &::before {
      transform: scale(1);
    }
  }
  a {
    position: relative;
    font-weight: 600;
    font-size: inherit;
  }
  &:first-child,
  &:nth-of-type(2) {
    display: none;
  }
  @media(max-width: 767px) {  
    width: 100%;
    justify-content: center;
    &:nth-of-type(2) {
      display: inline-flex;
      b {
        font-size: 1.5rem;
      }
    }
    &:first-child {
      display: inline-flex;
      justify-content: flex-end;
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
    a {
      padding: 0.5rem 1.5rem;
      font-size: 1.2rem;
    }
  }
`

export const MenuButton = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.palette.textLight};
  position: relative;
  @media(min-width: 768px) {
    display: none;
  }
  path {
    fill: inherit;
  }
`

export const Overlay = styled.div`
  background:${({ theme }) => theme.palette.background};
  border-radius: 50%;
  display: flex;
  height: 24px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform-origin: center;
  transform: ${({ isOpen }) => isOpen ? 'scale(80)' : 'scale(0)'};
  transition: transform 0.5s ease;
  width: 24px;
  @media(min-width: 768px) {
    display: none;
  }
`

export const Nav = styled.nav`
  @media(max-width: 767px) {
    align-items: center;
    bottom: 0;
    display: flex;
    height: 100vh;
    left: 0;
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    position: absolute;
    right: 0;
    top: 0;
    transform: ${({ isOpen }) => isOpen ? 'scale(1)' : 'scale(0)'};
    transition:${({ isOpen }) => isOpen ? 'opacity 0.3s ease 0.4s' : 'opacity 0.3s ease'};
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
    width: 100%;
  }
`