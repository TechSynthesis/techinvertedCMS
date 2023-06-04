import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
// import { MenuDescription } from '../blocks/MenuBlocks/MenuDescription'
// import { MenuFeature } from '../blocks/MenuBlocks/MenuFeature'
// import { MenuLink } from '../blocks/MenuBlocks/MenuLink'
// import { MenuTitle } from '../blocks/MenuBlocks/MenuTitle'
import link from '../fields/link'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}

// fields: [
//   {
//     name: 'navItems',
//     type: 'array',
//     fields: [
//       {
//         name: 'type',
//         type: 'radio',
//         defaultValue: 'link',
//         admin: {
//           layout: 'horizontal',
//         },
//         options: [
//           {
//             label: 'Link',
//             value: 'link',
//           },
//           {
//             label: 'Sub-menu',
//             value: 'subMenu',
//           },
//         ],
//       },
//       {
//         name: 'label',
//         type: 'text',
//         required: true,
//       },
//       {
//         name: 'subMenu',
//         label: false,
//         type: 'group',
//         admin: {
//           condition: (_, { type } = {}) => type === 'subMenu',
//         },
//         fields: [
//           {
//             name: 'blocks',
//             label: 'Menu Blocks',
//             labels: {
//               singular: 'Menu Block',
//               plural: 'Menu Blocks',
//             },
//             type: 'blocks',
//             blocks: menuColumnBlocks,
//           },
//         ],
//       },
//       link({
//         appearances: false,
//         disableLabel: true,
//         overrides: {
//           admin: {
//             condition: (_, { type }) => type === 'link',
//           },
//         },
//       }),
//     ],
//   },
// ],
