// Site Settings
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    heroTitle,
    heroSubtitle,
    heroImage,
    missionText,
    joinFormLink,
    instagram,
    youtube,
    email,
    address,
    rehrasSahib {
      poster,
      roomNumber,
      building,
      day,
      time,
      semester
    }
  }
` as const

// Events
export const upcomingEventsQuery = `
  *[_type == "event" && isUpcoming == true] | order(date asc) {
    _id,
    title,
    slug,
    date,
    description,
    bannerImage,
    location,
    youtubeLink
  }
` as const

export const pastEventsQuery = `
  *[_type == "event" && isUpcoming == false] | order(date desc) {
    _id,
    title,
    slug,
    date,
    description,
    bannerImage,
    images,
    location,
    youtubeLink
  }
` as const

export const allEventsQuery = `
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    slug,
    date,
    description,
    bannerImage,
    images,
    location,
    youtubeLink,
    isUpcoming
  }
` as const

export const eventBySlugQuery = `
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    description,
    bannerImage,
    images,
    location,
    youtubeLink,
    isUpcoming
  }
` as const

// Team
export const currentTeamQuery = `
  *[_type == "team" && isCurrent == true] | order(order asc) {
    _id,
    name,
    role,
    image,
    program,
    academicYear,
    socialLinks
  }
` as const

export const pastTeamQuery = `
  *[_type == "team" && isCurrent == false] | order(academicYear desc) {
    _id,
    name,
    role,
    image,
    program,
    academicYear,
    socialLinks
  }
` as const

// Gallery
export const allGalleriesQuery = `
  *[_type == "gallery"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    coverImage,
    images
  }
` as const

export const galleryBySlugQuery = `
  *[_type == "gallery" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    coverImage,
    images
  }
` as const

