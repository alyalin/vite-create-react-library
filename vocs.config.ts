import { defineConfig } from 'vocs'

import { version, name, description, repository } from './package.json'
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
      link: '/docs/getting-started',
    },
    {
      text: 'Publish',
      link: '/docs/publish',
    },
  ],

  banner: 'Just launched! Feel free to share your thoughts [Github](#)!',

  socials: [
    {
      icon: 'github',
      link: repository.url,
    },
  ],

  topNav: [
    { text: 'Guide & API', link: '/docs/getting-started' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: `${repository.url}/blob/main/src/CHANGELOG.md`,
        },
        {
          text: 'Contributing',
          link: `${repository.url}/blob/main/.github/CONTRIBUTING.md`,
        },
      ],
    },
  ],

  editLink: { 
    pattern: `${repository.url}/edit/main/docs/pages/docs/:path`, 
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
