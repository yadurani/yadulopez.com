import { BsTag } from 'react-icons/bs'

const tag = {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: BsTag,
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Name of the tag to add to your posts.',
      type: 'string',
    },
  ],
}

export default tag