import styled, { keyframes } from 'styled-components'

export const ContainerBanner = styled.section`
  background: linear-gradient(180deg, ${({ theme }) => theme.palette.bgGradientMain} 0%, rgba(119, 0, 179, 0) 100%);
  height: ${({ height }) => height + 'px' || '100vh'};
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  &::before {
    background-color: ${({ theme }) => theme.palette.background};
    border-radius: 64px;
    bottom: -135px;
    content: '';
    height: 248px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    transform: rotate(45deg);
    width: 248px;
    @media(max-width: 560px) {
      height: 200px;
      width: 200px;
      bottom: -115px;
    }
  }
  .PatternDots,
  .PatternSquare {
    position: absolute;
  }
  .PatternSquare {
    left: 0;
    top: 0;
    @media(max-width: 960px) {
      width: clamp(300px, 100%, 737px);
    }
    @media(max-width: 767px) {
      width: 100%;
    }
  }
  .PatternDots {
    right: 0.8rem;
    top: 0.8rem;
    @media(max-width: 767px) {
      display: none;
    }
  }
`
export const TitleBanner = styled.h1`
  font-weight: 900;
  font-size: 7.56rem;
  line-height: 9.43rem;
  @media(max-width: 960px) {
    font-size: 5.5rem;
    line-height: 6rem;
  }
  @media(max-width: 767px) {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`

export const SubtitleBanner = styled.h2`
  font-size: 2.125rem;
  line-height: 2.563rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts[1]}, sans-serif;
  @media(max-width: 767px) {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`

const colorAnimation = keyframes`
  from {
    color: ${({ theme }) => theme.palette.secondary};
  } to {
    color: #F9C46B;
  }
`

export const CaptionBanner = styled.h3`
  animation: ${colorAnimation} 5s linear alternate;
  animation-iteration-count: infinite;
  color: ${({ theme }) => theme.palette.secondary};
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts[0]}, serif;
  font-size: 2.1rem;
  font-weight: 900;
  line-height: 2.5rem;
  margin-top: 1rem;
  span { 
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    animation: ${colorAnimation} 5s linear alternate;
  }
  @media(max-width: 767px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

export const SocialBanner = styled.div`
  color: ${({ theme }) => theme.palette.textLight};
  display: flex;
  gap: 0 1rem;
  justify-content: center;
  margin-top: 2rem;
`

export const LinkExternalBanner = styled.a`
  padding: 0 0.5rem;
  transition: transform 0.3s ease;
  @media(hover: hover) {
    &:hover {
      transform: scale(0.9);
      opacity: 0.9;
    }
  }
`

export const ArrowButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  bottom: 50px;
  color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
  display: flex;
  height: 65px;
  justify-content: center;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  transition: transform 0.3s ease;
  width: 65px;
  &:hover {
    transform: scale(0.9);
  }
  @media(max-width: 560px) {
    bottom: 15px;
  }
`