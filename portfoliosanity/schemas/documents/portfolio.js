const portfolio = {
  name: 'portfolio',
  title: 'Portafolio',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
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
      name: 'codeUrl',
      title: 'Code URL',
      description: `Link del repositorio del proyecto`,
      type: 'url',
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
      description: 'Sube las imágenes de tu proyecto',
      type: 'array',
      of: [{ 
        type: 'image', 
        fields: [
          {
            title: 'Alternative Text',
            name: 'alt',
            type: 'string',
          },
        ], 
      }]
    },
    {
      name: 'stack',
      title: 'Stack',
      description: 'Agrega las tecnologías usadas',
      type: 'array',
      of: [{ type: 'technology' }],
    },
    {
      name: 'about',
      title: 'Sobre el proyecto',
      description:
        'Describe el proyecto',
      type: 'blockContent',
    },
    {
      name: 'important',
      title: 'Destacado',
      description: 'Este es un portafolio destacado',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
    },
  },
}

export default portfolio