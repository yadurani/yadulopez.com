import React, { useContext } from 'react'

import { Container, ImagePatterns, TitleSection } from 'styles/CommonComponents'
import { ContextApp } from 'context/ContextApp'
import { ContainerPortfolio, ContainerProject } from './styles'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  const { portfolioHome } = useContext(ContextApp)
  return (
    <ContainerPortfolio id="Portafolio">
       <ImagePatterns 
        className="PatternDots" 
        src="/patterns-dots-photo.svg" 
        alt="Patrón de puntos" 
        width="151" 
        height="321"/>
      <Container>
        <TitleSection secondary>Portafolio.</TitleSection>
      </Container>
      <Container>
        <ContainerProject>
          {portfolioHome?.map(({ _id, ...rest}) => (
            <PortfolioItem key={_id} {...rest}/>
            ))}
        </ContainerProject>
      </Container>
    </ContainerPortfolio>
  )
}

export default Portfolio
