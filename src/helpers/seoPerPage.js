import Head from 'next/head'

const GenerateTitlePageSEO = ({ title, children, descriptionPage }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={descriptionPage} />
      {children}
    </Head>
  )
}

export default GenerateTitlePageSEO