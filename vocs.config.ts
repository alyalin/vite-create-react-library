import { defineConfig } from 'vocs'

import { version, name, description } from './package.json'
import { resolve } from 'path'

export default defineConfig({
  title: name,
  description: description,

  vite: {
    resolve: {
      alias: [
        { find: '@', replacement: resolve(__dirname, './lib') },
      ]
    }
  },

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

  banner: 'Just launched! Feel free to share your thoughts [Github](#)!',

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
    {
      icon: 'telegram',
      link: '#'
    },
    {
      icon: 'warpcast',
      link: '#'
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

  editLink: { 
    pattern: 'https://github.com/alyalin/vite-create-react-library/edit/main/docs/pages/:path', 
    text: 'Suggest changes to this page'
  },

  // theme: { 
  //   accentColor: '#ff0000', 
  //   variables: { 
  //     color: { 
  //       background: { 
  //         light: 'white', 
  //         dark: 'black'
  //       } 
  //     } 
  //   } 
  // },
})
