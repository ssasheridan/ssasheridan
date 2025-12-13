export interface PromotionalAd {
  _key: string
  title: string
  subtitle?: string
  description?: string
  images?: Array<{
    _key: string
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }>
  details?: Array<{
    _key: string
    label: string
    value: string
    icon?: 'clock' | 'location' | 'calendar' | 'info'
  }>
  ctaButton?: {
    text: string
    link: string
  }
  isActive: boolean
  order?: number
}

export interface SiteSettings {
  heroTitle: string
  heroSubtitle: string
  heroImage?: SanityImage
  missionText: string
  joinFormLink: string
  instagram: string
  youtube: string
  email: string
  address: string
  rehrasSahib?: {
    poster?: SanityImage
    roomNumber?: string
    building?: string
    day?: string
    time?: string
    semester?: string
  }
  promotionalAds?: PromotionalAd[]
}

export interface Event {
  _id: string
  title: string
  slug: {
    current: string
  }
  date: string
  description: string
  bannerImage?: SanityImage
  images?: SanityImage[]
  location: string
  youtubeLink?: string
  isUpcoming: boolean
}

export interface TeamMember {
  _id: string
  name: string
  role: string
  image?: SanityImage
  program: string
  academicYear: string
  socialLinks?: {
    instagram?: string
    linkedin?: string
  }
  isCurrent: boolean
}

export interface Gallery {
  _id: string
  title: string
  slug: {
    current: string
  }
  coverImage?: SanityImage
  images?: SanityImageWithCaption[]
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SanityImageWithCaption extends SanityImage {
  caption?: string
}

