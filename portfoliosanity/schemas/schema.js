// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import portfolio from './documents/portfolio'
import about from './documents/about'
import post from './documents/post'
import tag from './documents/tag'
import project from './documents/project'

import tecnology from './object/tecnology'
import blockContent from './object/blockContent'
import education from './object/education'
import listItem from './object/listItem'
import linkList from './object/linkList/linkList'
import iconList from './object/iconList/iconList'

export default createSchema({
  name: 'Portafolio Yadu',
  types: schemaTypes.concat([
    about,
    portfolio,
    project,
    post,
    tag,
    tecnology,
    blockContent,
    education,
    listItem,
    linkList,
    iconList
  ]),
})
