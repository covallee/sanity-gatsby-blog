export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dbdfed970b279aa5178658f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-n883489v',
                  apiId: 'a870c620-98a4-4bb0-94e7-ee21464d4354'
                },
                {
                  buildHookId: '5dbdfed970b279aa51786590',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hqn7927u',
                  apiId: '3024b5e5-a160-42da-8a38-51c69a7c4334'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/covallee/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hqn7927u.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
