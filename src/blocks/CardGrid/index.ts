import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const CardGrid: Block = {
  slug: 'cardGrid',
  fields: [
    blockFields({
      name: 'cardGridFields',
      fields: [
        {
          name: 'alignment',
          type: 'select',
          defaultValue: 'horizontal',
          options: [
            {
              label: 'Horizontal',
              value: 'horizontal',
            },
            {
              label: 'Vertical',
              value: 'vertical',
            },
          ],
          admin: {
            description: 'Choose how to align the content for this block.',
            width: '50%',
          },
        },
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
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'enableLink',
              type: 'checkbox',
            },
            link({
              disableLabel: true,
              appearances: false,
              overrides: {
                admin: {
                  condition: (_, { enableLink }) => enableLink,
                },
              },
            }),
          ],
        },
      ],
    }),
  ],
}
