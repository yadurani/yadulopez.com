import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
`

export const ContainerFluid = styled.div`
  width: 100%;
`

export const TitleSection = styled.h2`
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  line-height: 6.313rem;
  margin-bottom: 4rem;
  ${({ primary, theme }) => primary && css`
    & {
      color: ${theme.palette.primary}
    }
  `}
  ${({ secondary, theme }) => secondary && css`
    & {
      color: ${theme.palette.secondary}
    }
  `}
  @media(max-width: 960px) {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  @media(max-width: 767px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`

export const ContainerGradient = styled.div`
  background: linear-gradient(0deg, ${({ theme }) => theme.palette.bgGradientMain} 0%, rgba(119, 0, 179, 0) 100%);
`

export const ImageLogo = styled.img``

export const ImagePatterns = styled.img`
`

export const Image = styled.img`
`
export const PrimaryButton = css`
  & {
    background-color: ${({ theme }) => theme.palette.secondary};
    border-color: ${({ theme }) => theme.palette.secondary};
    border-radius: 3rem;
    border-style: solid;
    border-width: 3px;
    color: ${({ theme }) => theme.palette.textDark};
    display: inline-flex;
    font-family: ${({ theme }) => theme.fonts[0]};
    font-weight: 700;
    letter-spacing: 0.05rem;
    overflow: hidden;
    position: relative;
    transition: border-color 0.3s ease;
    z-index: 1;
    white-space: nowrap;
  }
  &::before {
    background: ${({ theme }) => theme.palette.bgGradientMain};
    border-radius: 50%;
    content: '';
    height: 30px;
    left: 100%;
    margin: -15px 0 0 1px;
    position: absolute;
    top: 50%;
    transform-origin: 100% 50%;
    transform: scale3d(1, 2, 1);
    transition-timing-function: cubic-bezier(0.7,0,0.9,1);
    transition: transform 0.3s, opacity 0.3s;
    width: 30px;
    z-index: -1;
  }
  @media(hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.palette.textLight};
      border-color: ${({ theme }) => theme.palette.textLight};
      text-decoration: none;
      transition: border-color 0.3s ease;
      &::before {
        transform: scale3d(9, 9, 1);
        @media(max-width: 960px) {
          transform: scale3d(25, 9, 1);
        }
      }
    }
  }
  @media(max-width: 767px) {
    & {
      width: ${({ fullWidthSm }) => fullWidthSm && '100%'};
      justify-content: center;
      box-sizing: border-box;
    }
  }
`

export const SecondaryButton = css`
  & {
    background-color: transparent;
    border-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.primary};
    cursor: pointer;
    border-radius: 3rem;
    border-style: solid;
    border-width: 3px;
    display: inline-flex;
    font-family: ${({ theme }) => theme.fonts[0]};
    font-weight: 700;
    letter-spacing: 0.05rem;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
    white-space: nowrap;
  }
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 100%;
    margin: -15px 0 0 1px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.primary};
    transform-origin: 100% 50%;
    transform: scale3d(1, 2, 1);
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.7,0,0.9,1);
  }
  @media(hover: hover) {
    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.palette.background};
      transition: color 0.3s ease;
      &::before {
        transform: scale3d(9, 9, 1);
        @media(max-width: 960px) {
          transform: scale3d(25, 9, 1);
        }
      }
    }
  }
  @media(max-width: 767px) {
    & {
      width: ${({ fullWidthSm }) => fullWidthSm && '100%'};
      justify-content: center;
      box-sizing: border-box;
    }
  }
`

export const SmallButton = css`
  & {
    padding: 0.5rem 2rem;
    font-size: ${({ theme }) => theme.size.sm};
  }
`
export const MediumButton = css`
  & {
    padding: 0.5rem 2rem;
    font-size: ${({ theme }) => theme.size.md};
  }
`

export const BtnPrimaryLinkSm = styled.a`
  ${PrimaryButton};
  ${SmallButton};
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.5rem;
  }
`

export const BtnPrimaryLinkMd = styled.a`
  ${PrimaryButton};
  ${MediumButton};
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.5rem;
  }
  
`

export const BtnSecondarySm = styled.a`
  ${SecondaryButton};
  ${SmallButton};
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.5rem;
  }
  
`

export const BtnSecondaryMd = styled.a`
  ${SecondaryButton};
  ${MediumButton};
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.5rem;
  }
  
`