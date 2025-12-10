export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'youtubeLink',
      title: 'YouTube Link',
      type: 'url',
      description: 'Enter the full YouTube video URL. Accepted formats: https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID or just the 11-character video ID',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }).custom((url: string) => {
          if (!url) return true
          // Allow URLs or just video IDs (11 characters)
          const isUrl = url.startsWith('http://') || url.startsWith('https://')
          const isVideoId = /^[a-zA-Z0-9_-]{11}$/.test(url.trim())
          const isYouTubeUrl = url.includes('youtube.com') || url.includes('youtu.be')
          
          if (isUrl && !isYouTubeUrl) {
            return 'Please enter a valid YouTube URL (youtube.com or youtu.be)'
          }
          if (!isUrl && !isVideoId && url.trim().length > 0) {
            return 'Please enter a full YouTube URL or just the 11-character video ID'
          }
          return true
        }),
    },
    {
      name: 'isUpcoming',
      title: 'Is Upcoming Event',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'bannerImage',
    },
    prepare({ title, date, media }: any) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date set',
        media,
      }
    },
  },
}

