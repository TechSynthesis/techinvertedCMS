import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'

export const TopBar: GlobalConfig = {
  slug: 'top-bar',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'announcement',
      type: 'relationship',
      relationTo: 'announcements',
    },
  ],
}
