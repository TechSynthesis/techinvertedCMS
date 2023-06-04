import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const FeatureGrid: Block = {
  slug: 'featureGrid',
  fields: [
    blockFields({
      name: 'featureGridFields',
      fields: [
        richText(),
        linkGroup({
          appearances: false,
          overrides: {
            admin: {
              description: 'These links will be placed above the card grid as calls-to-action.',
            },
          },
        }),
        {
          name: 'cards',
          type: 'array',
          minRows: 4,
          required: true,
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'enableLink',
              type: 'checkbox',
            },
            link({
              disableLabel: true,
              overrides: {
                admin: {
                  condition: (_, { enableLink }) => enableLink,
                },
              },
            }),
            {
              name: 'cardIcon',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },
        {
          name: 'productPhoto',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    }),
  ],
}
