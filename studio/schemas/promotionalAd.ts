export default {
  name: 'promotionalAd',
  title: 'Promotional Ad',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading for the ad (e.g., "Weekly Rehras Sahib Path", "Upcoming Event", "Hiring")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle (Optional)',
      type: 'string',
      description: 'Secondary text, can be in Punjabi or English',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Main description text for the ad',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Description of the image for accessibility',
            },
          ],
        },
      ],
      description: 'Add one or more images for this ad',
    },
    {
      name: 'details',
      title: 'Details (Optional)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., "When", "Where", "Time"',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'e.g., "Wednesdays & Thursdays", "Room A123"',
            },
            {
              name: 'icon',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Clock', value: 'clock' },
                  { title: 'Location', value: 'location' },
                  { title: 'Calendar', value: 'calendar' },
                  { title: 'Info', value: 'info' },
                ],
              },
              initialValue: 'info',
            },
          ],
        },
      ],
      description: 'Add key details like time, location, etc.',
    },
    {
      name: 'ctaButton',
      title: 'Call-to-Action Button (Optional)',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          description: 'e.g., "Join Us", "Learn More", "Apply Now"',
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'url',
          description: 'URL to navigate when button is clicked',
        },
      ],
      description: 'Optional button to add to the ad',
    },
    {
      name: 'isActive',
      title: 'Show This Ad',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to show/hide this ad. Uncheck to unlist it.',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      description: 'Lower numbers appear first. Use this to control the order of multiple ads.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      isActive: 'isActive',
    },
    prepare({ title, subtitle, isActive }: any) {
      return {
        title: title || 'Untitled Ad',
        subtitle: subtitle || (isActive ? 'Active' : 'Hidden'),
      }
    },
  },
}

