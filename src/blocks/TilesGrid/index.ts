import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import richText from '../../fields/richText'

export const TilesGrid: Block = {
  slug: 'tilesGrid',
  fields: [
    blockFields({
      name: 'tilesGridFields',
      fields: [
        richText(),
        {
          name: 'rows',
          type: 'array',
          fields: [
            {
              name: 'layout',
              type: 'select',
              defaultValue: 'oneColumn',
              options: [
                {
                  label: 'One Column',
                  value: 'oneColumn',
                },
                {
                  label: 'Two Columns',
                  value: 'twoColumns',
                },
                {
                  label: 'Two Thirds + One Third',
                  value: 'twoThirdsOneThird',
                },
                {
                  label: 'Half + Half',
                  value: 'halfAndHalf',
                },
                {
                  label: 'Three Columns',
                  value: 'threeColumns',
                },
              ],
              admin: {
                description: 'Choose how to layout the tiles for this row.',
                width: '50%',
              },
            },
            {
              name: 'tileOne',
              type: 'group',

              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'tileColor',
                  type: 'text',
                  required: false,
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'shortDescription',
                      type: 'textarea',
                      admin: {
                        width: '50%',
                      },
                    },
                    {
                      name: 'fullDescription',
                      type: 'textarea',
                      admin: {
                        width: '50%',
                      },
                    },
                  ],
                },
                {
                  name: 'type',
                  type: 'radio',
                  required: true,
                  options: [
                    {
                      label: 'Blockquote',
                      value: 'addBlockquote',
                    },
                    {
                      label: 'Image',
                      value: 'addImage',
                    },
                  ],
                  defaultValue: 'addBlockquote', // The first value in options.
                  admin: {
                    layout: 'horizontal',
                  },
                },
                {
                  name: 'blockquote',
                  type: 'textarea',
                  admin: {
                    condition: (_, { type }) => type === 'addBlockquote',
                  },
                },
                {
                  name: 'media',
                  type: 'upload',
                  relationTo: 'media',
                  admin: {
                    condition: (_, { type }) => type === 'addImage',
                  },
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
            {
              name: 'tileTwo',
              type: 'group',
              admin: {
                condition: (_, siblingData) =>
                  ['twoColumns', 'twoThirdsOneThird', 'halfAndHalf', 'threeColumns'].includes(
                    siblingData.layout,
                  ),
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'tileColor',
                  type: 'text',
                  required: false,
                },
                {
                  name: 'shortDescription',
                  type: 'textarea',
                },
                {
                  name: 'fullDescription',
                  type: 'textarea',
                },
                {
                  name: 'type',
                  type: 'radio',
                  required: true,
                  options: [
                    {
                      label: 'Blockquote',
                      value: 'addBlockquote',
                    },
                    {
                      label: 'Image',
                      value: 'addImage',
                    },
                  ],
                  defaultValue: 'addBlockquote',
                  admin: {
                    layout: 'horizontal',
                  },
                },
                {
                  name: 'blockquote',
                  type: 'textarea',
                  admin: {
                    condition: (_, { type }) => type === 'addBlockquote',
                  },
                },
                {
                  name: 'media',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    condition: (_, { type }) => type === 'addImage',
                  },
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
            {
              name: 'tileThree',
              type: 'group',
              admin: {
                condition: (_, siblingData) => siblingData.layout === 'threeColumns',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'tileColor',
                  type: 'text',
                  required: false,
                },
                {
                  name: 'shortDescription',
                  type: 'textarea',
                },
                {
                  name: 'fullDescription',
                  type: 'textarea',
                },

                {
                  name: 'type',
                  type: 'radio',
                  required: true,
                  options: [
                    {
                      label: 'Blockquote',
                      value: 'addBlockquote',
                    },
                    {
                      label: 'Image',
                      value: 'addImage',
                    },
                  ],
                  defaultValue: 'addBlockquote', // The first value in options.
                  admin: {
                    layout: 'horizontal',
                  },
                },
                {
                  name: 'blockquote',
                  type: 'textarea',
                  admin: {
                    condition: (_, { type }) => type === 'addBlockquote',
                  },
                },
                {
                  name: 'media',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    condition: (_, { type }) => type === 'addImage',
                  },
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
        },
      ],
    }),
  ],
}
