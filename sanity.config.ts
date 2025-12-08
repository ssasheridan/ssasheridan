/**
 * Sanity Studio Configuration
 * 
 * This file is used when running Sanity Studio locally.
 * To use Sanity Studio:
 * 1. Create a Sanity project at https://sanity.io
 * 2. Install Sanity CLI: npm install -g @sanity/cli
 * 3. Initialize Sanity in your project: sanity init
 * 4. Copy the schemas from src/sanity/schemas to your Sanity studio
 * 
 * Alternatively, deploy schemas using:
 * sanity deploy
 */

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './src/sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'ssa-sheridan-studio',
  title: 'SSA Sheridan CMS',
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})

