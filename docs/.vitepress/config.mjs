import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Creative Game: Research, Planning & Documentation',
  description: 'A centralized location to track research, ideas, planning and progress.',
  base: '/IS218-Review-1-Plan-Creative-Game/',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'Creative Game: Research, Planning & Documentation',
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      {
        text: 'Research',
        collapsed: false,
        items: [
          { text: 'The REA Repo', link: '/research/rea-repo' },
          { text: 'Game Concepts', link: '/research/game-concepts' },
          { text: 'Stack & macOS Setup', link: '/research/stack-setup' }
        ]
      },
      {
        text: 'Expanding Ideas',
        collapsed: false,
        items: [
          { text: 'Concept Comparison', link: '/expanding-ideas/concept-comparison' },
          { text: '5-Stage Data Pipeline', link: '/expanding-ideas/data-pipeline' },
          { text: 'Stack & Architecture', link: '/expanding-ideas/architecture' },
          { text: 'User Stories & Experiment', link: '/expanding-ideas/user-stories-experiment' }
        ]
      },
      {
        text: 'Documentation & Record',
        items: [
          {
            text: 'Project Record',
            link: '/record/',
            items: [
              { text: 'Project Change & Verification Log', link: '/record/#project-change-verification-log' },
              { text: 'Game Slice Development', link: '/record/#game-creative-slice-development-quick-links-repository-trackers' },
              { text: 'Initial Website Development Record', link: '/record/#quick-links-repository-trackers' }
            ]
          },
          { text: 'Game Slice Spec', link: '/record/game-slice-spec' }
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    footer: {
      message: '<a href="https://shreek3724.github.io/IS218-003-Review-1-Plan-Portfolio/" target="_blank" rel="noopener noreferrer">Portfolio Planning, Research & Documentation</a>',
      copyright: 'Course planning project'
    }
  }
})
