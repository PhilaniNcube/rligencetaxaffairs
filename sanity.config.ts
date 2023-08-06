import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import article from './sanity/schemas/article-schema'
import schemas from './sanity/schemas'


const config = defineConfig({
  projectId: 'ohba0p76',
  dataset: 'production',
  apiVersion: '2023-08-04',
  title: 'Rligence Tax Services',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {types: schemas},
})


export default config
