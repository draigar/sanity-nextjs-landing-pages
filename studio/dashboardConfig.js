export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619cd968adfdbee3d211dbff',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yryyai4b',
                  apiId: 'afc3a2bc-944d-490b-97f0-df4ce2be7a0c'
                },
                {
                  buildHookId: '619cd969a301a3ec75c4cb3f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d83dvvp5',
                  apiId: 'd4559a1c-0940-4537-86e0-6ef06b7acdba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/draigar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d83dvvp5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
