import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'

export const Settings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: () => true,
    update: isAdmin,
  },
  label: 'Settings',
  fields: [
    {
      name: 'companyName',
      label: 'Company Name',
      type: 'text',
      required: true,
    },
    {
      name: 'companyDescription',
      label: 'Company Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'companyEmail',
      label: 'Company Email',
      type: 'email',
      required: true,
    },
    {
      name: 'logo',
      label: 'Company Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'array',
      name: 'socialLinks',
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'select',
              name: 'socialAccountType',
              required: true,
              admin: {
                width: '100%',
              },
              options: [
                {
                  label: 'Facebook',
                  value: 'facebook',
                },
                {
                  label: 'Instagram',
                  value: 'instagram',
                },
                {
                  label: 'Twitter',
                  value: 'twitter',
                },
                {
                  label: 'WhatsApp',
                  value: 'whatsApp',
                },
                {
                  label: 'Youtube',
                  value: 'youtube',
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedIn',
                },
                {
                  label: 'Reddit',
                  value: 'reddit',
                },
              ],
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
                condition: (_, siblingData) => siblingData.socialAccountType !== 'whatsApp',
              },
            },
            {
              name: 'userName',
              label: 'User Name',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
                condition: (_, siblingData) => siblingData.socialAccountType !== 'whatsApp',
              },
            },
            {
              name: 'phoneNumber',
              label: 'Phone Number',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
                condition: (_, siblingData) => siblingData.socialAccountType === 'whatsApp',
              },
            },
          ],
        },
      ],
    },
  ],
}
