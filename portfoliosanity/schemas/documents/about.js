import { BsPerson } from 'react-icons/bs'

const about = {
  name: 'author',
  title: 'Autor',
  type: 'document',
  icon: BsPerson,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          title: 'Alternative Text',
          name: 'alt',
          type: 'string',
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'file',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
    {
      name: 'studies',
      title: 'Educación',
      description: 'Realiza una lista de tus estudios',
      type: 'array',
      of: [{ type: 'education' }],
    },
    {
      name: 'stack',
      title: 'Stack',
      description: 'Agrega las tecnologías que sabes',
      type: 'array',
      of: [{ type: 'technology' }],
    },
    {
      name: 'main',
      title: 'Principal',
      description: 'Este es el perfil principal',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}

export default about