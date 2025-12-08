# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for the SSA Sheridan website.

## Step 1: Create a Sanity Account

1. Go to [sanity.io](https://sanity.io)
2. Sign up for a free account
3. Create a new project

## Step 2: Get Your Project Credentials

1. Go to your project dashboard at [sanity.io/manage](https://sanity.io/manage)
2. Copy your **Project ID**
3. Note your **Dataset** name (usually "production")

## Step 3: Configure Environment Variables

Create a `.env.local` file in the root of your project:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://ssa-sheridan.vercel.app
```

## Step 4: Deploy Schemas to Sanity

### Option A: Use Sanity Studio (Recommended)

1. Install Sanity CLI globally:
   ```bash
   npm install -g @sanity/cli
   ```

2. Initialize Sanity in a separate directory:
   ```bash
   mkdir sanity-studio
   cd sanity-studio
   sanity init
   ```

3. Copy the schema files from `src/sanity/schemas/` to your Sanity studio's `schemas/` folder

4. Deploy:
   ```bash
   sanity deploy
   ```

### Option B: Use Sanity's Web Studio

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to "API" → "CORS Origins"
4. Add your development URL: `http://localhost:3000`
5. Add your production URL: `https://ssa-sheridan.vercel.app`

## Step 5: Add Content

### Site Settings
1. Go to your Sanity Studio
2. Create a new "Site Settings" document
3. Fill in:
   - Hero Title: "Sikh Students Association, Sheridan"
   - Hero Subtitle: "Empowering Students, Celebrating Sikhi"
   - Mission Text
   - Join Form Link (Microsoft Form URL)
   - Instagram URL
   - YouTube URL
   - Contact Email
   - Address

### Team Members
1. Create documents for each team member
2. Set `isCurrent: true` for current executives
3. Add order numbers for display sequence

### Events
1. Create event documents
2. Set `isUpcoming: true` for future events
3. Add banner images and gallery photos

### Gallery
1. Create gallery albums
2. Add cover image and photos

## Schema Reference

### Event Schema
```javascript
{
  title: string,
  slug: slug,
  date: datetime,
  description: text,
  bannerImage: image,
  images: image[],
  location: string,
  youtubeLink: url,
  isUpcoming: boolean
}
```

### Team Schema
```javascript
{
  name: string,
  role: string,
  image: image,
  program: string,
  academicYear: string,
  socialLinks: {
    instagram: url,
    linkedin: url
  },
  isCurrent: boolean,
  order: number
}
```

### Gallery Schema
```javascript
{
  title: string,
  slug: slug,
  coverImage: image,
  images: image[] with caption
}
```

### Site Settings Schema
```javascript
{
  heroTitle: string,
  heroSubtitle: string,
  heroImage: image,
  missionText: text,
  joinFormLink: url,
  instagram: url,
  youtube: url,
  email: string,
  address: text
}
```

## Troubleshooting

### CORS Errors
Make sure your domain is added to CORS origins in Sanity dashboard.

### Images Not Loading
Check that you've configured `next.config.js` to allow Sanity CDN images.

### Content Not Updating
The site uses ISR (Incremental Static Regeneration) with 60-second revalidation. Wait a minute and refresh.

## Support

For help, contact the SSA Sheridan tech team or refer to [Sanity Documentation](https://sanity.io/docs).

