import React, { useContext } from 'react'
import { MdEmail, MdCloudDownload } from 'react-icons/md'

import TabBar from './AboutContext'
import Tab from './Tab'
import TabPanel from './TabPanel'

import { ContextApp } from 'context/ContextApp'
import Msg from 'constants/messages'

import { BtnPrimaryLinkMd, BtnSecondaryMd, Container, Image, ImagePatterns, TitleSection } from 'styles/CommonComponents'
import { ButtonContainer, CompanyName, ContainerAbout, Link, PhotoImg, PhotoMeBg, PhotoMeContainer, SkillsItem, SkillsList, StudiesItem, StudiesList, TabList, TabPanelItem } from './styles'

const AboutMe = () => {
  const { aboutMe = {} } = useContext(ContextApp)
  const { stack = [], studies = [] } = aboutMe

  return (
    <ContainerAbout id="SobreMi">
      <Container>
        <PhotoMeContainer>
          <PhotoMeBg>
            <ImagePatterns 
              className="PatternDots" 
              src="/patterns-dots-photo.svg" 
              alt="Patrón de puntos" 
              width="151" 
              height="321"/>
            <PhotoImg 
              src="/photo-me.png" 
              alt="Yadurani López" 
              width="400" 
              height="536"/>
            <ImagePatterns 
              className="PatternWave" 
              src="/patterns-wave-photo.svg" 
              alt="Patrón de olas" 
              width="263" 
              height="85"/>
          </PhotoMeBg>
        </PhotoMeContainer>
        <div>
          <TitleSection primary>Sobre mi.</TitleSection>
          <TabBar tab="Perfil">
            <TabList>
              {Msg.AboutMe?.map(about => (
                <Tab tabTitle={about} key={about}>{about}</Tab>
              ))}
            </TabList>
            <div>
              <TabPanel whenActive="Perfil">
                <TabPanelItem>
                  <p>
                    💙 <b>Desarrolladora Front-End</b> especializada en <u>React JS. </u>  
                    Creación, prototipado y desarrollo de productos digitales innovadores 
                    centrados en el usuario. Apasionada por el diseño y el emprendimiento. 
                    Estoy en constante aprendizaje. Estudiante en <u>Platzi</u> 🚀
                  </p>
                  <p>
                    <b>Antes:</b> Fundadora de Homeworkers en 2017 y de Kitfood en 2019 😎
                  </p>
                  <ButtonContainer>
                    <BtnPrimaryLinkMd href="mailto:yadulopez21@gmail.com" fullWidthSm>
                      Escríbeme <MdEmail/>
                    </BtnPrimaryLinkMd>
                    <BtnSecondaryMd href="/portafolio-yadu.pdf" download>
                      Descargar CV <MdCloudDownload/>
                    </BtnSecondaryMd>
                  </ButtonContainer>
                </TabPanelItem>
              </TabPanel>
              <TabPanel whenActive="Estudios"> 
                <TabPanelItem>
                  {studies && 
                    <StudiesList>
                      {studies?.map(({ _key, name, icon, company, urlPreview }) => (
                        <StudiesItem key={_key}>
                          {icon && 
                            <Image 
                              alt={name} 
                              src={icon} 
                              height="20" 
                              width="20"/>
                          }
                          <p>
                            {urlPreview && 
                              <Link href={urlPreview} target="_blank" rel="noreferrer">
                                {name}
                              </Link>
                            }
                            {!urlPreview && name}
                            <CompanyName>&nbsp;-&nbsp;{company}</CompanyName>
                          </p>
                        </StudiesItem>
                      ))}
                    </StudiesList>
                  }
                </TabPanelItem>
              </TabPanel>
              <TabPanel whenActive="Skills">
                <TabPanelItem>
                  {stack && 
                    <SkillsList>
                      {stack?.map(({ _key, name, icon }) => (
                        <SkillsItem key={_key}>
                          {icon && 
                            <Image alt={name} src={icon} height="20" />
                          }
                          {name}
                        </SkillsItem>
                      ))}
                    </SkillsList>
                  }
                </TabPanelItem>
              </TabPanel>
            </div>
          </TabBar>
        </div>
      </Container>
    </ContainerAbout>
  )
}

export default AboutMe
