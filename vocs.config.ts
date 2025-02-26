import { defineConfig } from 'vocs'

import { version, name, description } from './package.json'

export default defineConfig({
  title: name,
  description: description,
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],

  socials: [
    {
      icon: 'discord',
      link: '#',
    },
    {
      icon: 'github',
      link: '#',
    },
    {
      icon: 'x',
      link: '#',
    },
  ],

  topNav: [
    { text: 'Guide & API', link: '/docs' },
    { text: 'Blog', link: '/blog' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/wevm/vocs/blob/main/src/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md',
        },
      ],
    },
  ],
})
