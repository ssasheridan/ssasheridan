export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Sikh Students Association, Sheridan',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      initialValue: 'Empowering Students, Celebrating Sikhi',
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'missionText',
      title: 'Mission Statement',
      type: 'text',
      rows: 4,
    },
    {
      name: 'joinFormLink',
      title: 'Join Form Link (Microsoft Form)',
      type: 'url',
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    },
    {
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
    },
    {
      name: 'rehrasSahib',
      title: 'Weekly Rehras Sahib Path Details',
      type: 'object',
      fields: [
        {
          name: 'poster',
          title: 'Rehras Sahib Poster',
          type: 'image',
          description: 'Poster/image for weekly Rehras Sahib Path event',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'roomNumber',
          title: 'Room Number',
          type: 'string',
        },
        {
          name: 'building',
          title: 'Building/Campus',
          type: 'string',
          description: 'e.g., Davis Campus, Room A123',
        },
        {
          name: 'day',
          title: 'Day',
          type: 'string',
          description: 'e.g., Wednesdays and Thursdays',
        },
        {
          name: 'time',
          title: 'Time',
          type: 'string',
          description: 'e.g., 6:15 PM - 9:15 PM',
        },
        {
          name: 'semester',
          title: 'When',
          type: 'string',
          description: 'e.g., Every semester',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
}

