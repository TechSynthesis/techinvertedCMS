import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import { CardGrid } from '../CardGrid'
import { CodeFeature } from '../CodeFeature'
import { Content } from '../Content'
import { HoverHighlights } from '../HoverHighlights'
import { MediaContent } from '../MediaContent'
import { StickyHighlights } from '../StickyHighlights'

export const Steps: Block = {
  slug: 'steps',
  labels: {
    singular: 'Steps Block',
    plural: 'Steps Blocks',
  },
  fields: [
    blockFields({
      name: 'stepsFields',
      fields: [
        {
          type: 'row',
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
            {
              name: 'useStepsNumbers',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Check this box if you step if you want to use step numbers',
                width: '50%',
                style: {
                  alignSelf: 'flex-end',
                },
              },
            },
          ],
        },
        {
          name: 'steps',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'stepName',
              type: 'text',
              admin: {
                description: 'Set a name for this step.',
                width: '50%',
              },
            },
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CodeFeature,
                Content,
                CardGrid,
                HoverHighlights,
                StickyHighlights,
                MediaContent,
              ],
            },
          ],
        },
      ],
    }),
  ],
}
