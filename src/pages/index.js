import sanityClient from 'sanityClient'
import { queryGlobal } from 'querySanity/query'

import AboutMe from 'components/AboutMe'
import BannerMain from 'components/BannerMain'
import Footer from 'components/Footer'
import Portfolio from 'components/Portfolio'
import { ContainerGradient } from 'styles/CommonComponents'
import GenerateTitlePageSEO from 'helpers/seoPerPage'
import DataSeo from 'constants/dataSeo'

const Home = () => {
  return (
    <>
      <GenerateTitlePageSEO
        title={DataSeo.HomeTitle}
        descriptionPage={DataSeo.HomeDescription}/>
      <BannerMain/>
      <AboutMe/>
      <ContainerGradient>
        <Portfolio/>
        <Footer/>
      </ContainerGradient>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const { portfolioHome, aboutMe, projects } = await sanityClient.fetch(queryGlobal)
    return {
      props: {
        portfolioHome,
        aboutMe,
        projects
      },
      revalidate: 5 * 60
    }
  } catch {
    return {
      props: {},
    }
  }
}

export default Home