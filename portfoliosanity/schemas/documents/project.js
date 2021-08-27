import { BsArchive } from 'react-icons/bs'

const project = {
  name: 'project',
  title: 'Proyectos',
  type: 'document',
  icon: BsArchive,
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Nombre del proyecto',
      type: 'string',
      validation: Rule => Rule.required().error('El nombre es obligatorio')
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Slug para la URL. Haz click in "Generar".',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      description:
        'Haz una descripcion corta de tu proyecto',
      type: 'text',
    },
    {
      name: 'previewUrl',
      title: 'Preview URL',
      description: 'Link del demo del proyecto',
      type: 'url',
    },
    {
      name: 'images',
      title: 'Images',
      description: 'Sube las imagénes de tu proyecto',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'stack',
      title: 'Stack',
      description: 'Technologies used in the project.',
      type: 'array',
      of: [{ type: 'technology' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
    },
  },
}

export default project