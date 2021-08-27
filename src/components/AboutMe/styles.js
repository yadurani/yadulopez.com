import styled, { css, keyframes } from 'styled-components'
import { Container } from 'styles/CommonComponents'

export const ContainerAbout = styled.section`
  margin: 130px 0;
  padding: 70px 0;
  ${Container} {
    display: grid;
    grid-gap: 3rem 0;
    grid-template-columns: repeat(1, 1fr);
    @media(min-width: 768px) {
      grid-gap: 0 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media(max-width: 960px) {
    margin: 50px 0 0;
    padding: 70px 0 0;
    z-index: 1;
    position: relative;
  }
`

export const PhotoMeContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const PhotoMeBg = styled.div`
  background-color: ${({ theme }) => theme.palette.primary};
  box-shadow: 7px 9px 24px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  position: relative;
  width: clamp(250px, 80%, 400px);
  height: fit-content;
  .PatternDots {
    position: absolute;
    top: -10%;
    left: -10%;
    @media(max-width: 960px) {
      width: auto;
      height: 50%;
    }
  }
  .PatternWave {
    position: absolute;
    z-index: -1;
    bottom: -10%;
    right: -25%;
    @media(max-width: 767px) {
      right: 0;
      left: 0;
      margin: auto;
      bottom: -15%;
    }
  }
`

export const PhotoImg = styled.img`
  width: 100%;
    height: auto;
  @media(max-width: 767px) {
    width: 100%;
    height: auto;
  }
`

export const TabList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0 1rem;
  margin-bottom: 2rem;
  @media(max-width: 767px) {
    display: grid;
    grid-gap: 0 0.5rem;  
    grid-template-columns: repeat(3, 1fr);
  }
`

export const TabItem = styled.li`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.05rem;
  text-align: center;
  color: ${({ isActive, theme }) => isActive ? theme.palette.primary : 'inherit'};
  pointer-events: ${({ isActive }) => isActive && 'none' };
  position: relative;
  ${({ isActive }) => isActive && css`
    &::before {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.primary};
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
     }
  `};
  @media(max-width: 767px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`

export const TabPanelItem = styled.div`
  animation: ${fadeIn} 0.5s ease-in;
`

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem 1rem;
  list-style: none;
  padding-left: 1rem;
  width: 70%;
  @media(max-width: 960px) {
    width: 100%;
    grid-gap: 1.5rem 0.5rem;
  }
`

export const SkillsItem = styled.li`
  display: flex;
  align-items: center;
  img {
    margin-right: 0.8rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.md};
  margin-top: 2rem;
  @media(max-width: 767px) {
    flex-direction: column;
  }
`

export const StudiesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  list-style: none;
  padding-left: 1rem;
`

export const StudiesItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p {
    margin: 0;
  }
  img {
    margin-right: 0.5rem;
    object-fit: contain;
  }
`

export const CompanyName = styled.small`
  font-size: 0.875rem;
  font-weight: 600;
`

export const Link = styled.a`
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.secondary};
    position: absolute;
    bottom: -2px;
    transition: transform 0.3s ease ;
    transform: scale(0);
  }
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.palette.secondary};
      text-decoration: none;
      &::before {
        transition: transform 0.3s ease 0.2s;
        transform: scale(1);
      }
    }
  }
`