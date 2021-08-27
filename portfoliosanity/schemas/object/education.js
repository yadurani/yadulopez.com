const education = {
  name: 'education',
  title: 'Educación',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Compañia',
      type: 'string',
      options: {
        list: [
          {value: 'Platzi', title: 'Platzi'},
          {value: 'Udemy', title: 'Udemy'},
          {value: 'Leonidas Esteban', title: 'Leonidas Esteban'},
          {value: 'Los Libertadores', title: 'Los Libertadores'},
        ]
      }
    },
    {
      name: 'icon',
      title: 'Logo Compañia',
      type: 'image',
    },
    {
      name: 'urlPreview',
      title: 'Url Preview',
      type: 'url',
    },
  ],
}

export default education