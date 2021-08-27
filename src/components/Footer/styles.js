import styled from 'styled-components'
import { Container, ImagePatterns } from 'styles/CommonComponents'

export const ContainerFooter = styled.footer`
  padding: 100px 0 0;
  position: relative;
  z-index: 1;
  ${Container} {
    display: grid;
    grid-gap: 0 ${({ theme }) => theme.size.md};
  }
  ${ImagePatterns} {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotate(180deg);
    z-index: -1;
    opacity: 0.5;
  }
  @media(max-width: 767px) {
    padding: 50px 0 0;
  }
`

export const ContainerInfo = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.textLight};
  display: grid;
  grid-gap: ${({ theme }) => theme.size.md};
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  padding: ${({ theme }) => theme.size.md} 0;
  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: initial;
  }
`
export const ContainerCopy = styled(ContainerInfo)`
  border: none;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  @media(max-width: 767px) {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    gap: ${({ theme }) => theme.size.md};
  }
`

export const SocialList = styled.ul`
  align-items: center;
  display: flex;
  gap: 0 ${({ theme }) => theme.size.md};
  justify-content: flex-end;
  list-style: none;
  li {
    transition: transform 0.3s ease;
    @media(hover: hover) {
      &:hover {
        transform: scale(1.2);
        transition: transform 0.3s ease;
      }
    }
  }
`

export const LinkExternal = styled.a``

export const TextInfo = styled.div`
  font-size: ${({ theme }) => theme.size.sm};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a,  span, u, b  {
    font-size: inherit;
  }
  span {
    margin-bottom: 0.5rem;
    &:last-child {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`