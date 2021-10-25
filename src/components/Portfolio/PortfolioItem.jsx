import React from 'react'
import PropTypes from 'prop-types'
import { MdOpenInNew } from 'react-icons/md'

import { BtnSecondarySm, Image } from 'styles/CommonComponents'

import { ProjectItem, ProjectItemText, ProjectTitle, ButtonContainer, StackList, StackItem, ImageIcon } from './styles'

const PortfolioItem = ({ name, codeUrl, previewUrl, images, stack }) => {
  const { url: urlImage, alt } = images[0]
  
  return (
    <ProjectItem>
      <Image src={urlImage} alt={alt} width="560" height="319"/>
      <ProjectItemText>
        <ProjectTitle>
          {name}
        </ProjectTitle>
        <StackList>
          {stack?.map(({ _key, name, icon }) => (
            <StackItem key={_key}>
               <ImageIcon src={icon} width="20" height="20" alt={name}/>
              {name}
            </StackItem>
          ))}
        </StackList>
        <ButtonContainer>
          {previewUrl && 
            <BtnSecondarySm href={previewUrl} target="_blank" rel="noopener">
              Demo <MdOpenInNew/>
            </BtnSecondarySm>
          }
          {codeUrl && 
            <BtnSecondarySm href={codeUrl} target="_blank" rel="noopener">
              Código <MdOpenInNew/>
            </BtnSecondarySm>
          }
        </ButtonContainer>
      </ProjectItemText>
    </ProjectItem>
  )
}

PortfolioItem.propTypes = {
  name: PropTypes.string.isRequired, 
  codeUrl: PropTypes.string, 
  previewUrl: PropTypes.string, 
  images: PropTypes.arrayOf(
    PropTypes.shape({
      _key: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      alt: PropTypes.string
    })
  ).isRequired,
  stack: PropTypes.arrayOf(
    PropTypes.shape({
      _key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  ).isRequired
}

PortfolioItem.defaultProps = {
  codeUrl: null, 
  previewUrl: null, 
}

export default PortfolioItem
