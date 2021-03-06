import React from 'react'
import { BsCardList } from 'react-icons/bs'

import Preview from './Preview'

const iconList = {
  title: 'Icon List',
  name: 'iconList',
  type: 'object',
  icon: BsCardList,
  fields: [
    {
      title: 'List Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'listItem',
        },
      ],
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare: ({ items }) => {
      return {
        title: 'Icon List',
        media: () => <BsCardList />,
        extendedPreview: <Preview items={items} />,
      };
    },
  },
}

export default iconList