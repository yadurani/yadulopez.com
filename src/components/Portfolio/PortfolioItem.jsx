import React from 'react'
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

export default PortfolioItem
