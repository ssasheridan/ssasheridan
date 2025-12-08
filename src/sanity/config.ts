const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

// Check if Sanity is properly configured
export const isSanityConfigured = 
  projectId && 
  projectId !== 'your_project_id' && 
  projectId !== 'placeholder-id' &&
  !projectId.includes('_') &&
  projectId.length > 0

// Only show warning in development and if not already configured
if (!isSanityConfigured && typeof window === 'undefined' && process.env.NODE_ENV === 'development') {
  console.warn(
    '⚠️  Sanity Project ID not configured!\n' +
    'Please set NEXT_PUBLIC_SANITY_PROJECT_ID in your .env.local file.\n' +
    'Get your project ID from https://sanity.io/manage\n' +
    'The site will run with placeholder content until configured.'
  )
}

export const sanityConfig = {
  projectId: projectId || 'placeholder-id', // Valid format: lowercase, numbers, dashes only
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
}

