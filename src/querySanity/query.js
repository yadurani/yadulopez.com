import groq from 'groq'

const portfolioHomeQuery = groq`
  *[_type == 'portfolio' && important == true] {
    _id,
    name,
    codeUrl,
    previewUrl,
    'images': images[]{
      _key,
      'url': asset->url
    },
    'stack': stack[]{ 
      name,
      _key,
      'icon': icon.asset->url,
    },
  }
`

const aboutQuery = groq`
  *[_type == 'author' && main == true][0] {
    name,
    bio,
    'cv': cv.asset->url,
    'image': {
      'alt': image-alt,
      'url': image.asset->url
    },
    'stack': stack[] {
      _key,
      name,
      'icon': icon.asset->url
    },
    'studies': studies[] {
      company,
      name,
      urlPreview,
      _key,
      'icon': icon.asset->url
    }
  }
`

const projectQuery = groq`
  *[_type == 'project'] {
    description,
    _id,
    name,
    previewUrl,
    'images': images[]{
      _key,
      'url': url.asset->url
    }
  }
`

export const queryGlobal = groq`
  {
    'portfolioHome': ${portfolioHomeQuery},
    'aboutMe': ${aboutQuery},
    'projects': ${projectQuery}
  }
`