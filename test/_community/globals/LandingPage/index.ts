import type { GlobalConfig } from 'payload'

import { MetaTitleField } from '@payloadcms/plugin-seo/fields'

export const LandingPage: GlobalConfig = {
  slug: `LandingPage`,
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'heading',
              type: 'text',
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            MetaTitleField({
              hasGenerateFn: true,
              overrides: {
                localized: true,
                minLength: 10,
              },
            }),
          ],
        },
      ],
    },
  ],
}
