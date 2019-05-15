export default {
  widgets: [{
      name: 'project-info',
      options: {
        __experimental_before: [{
          name: 'netlify',
          options: {
            description: 'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
            sites: [{
                buildHookId: '5cdc517dc4413cd9302b082b',
                title: 'Sanity Studio',
                name: 'disrupt-web-studio',
                apiId: '54db0676-5ad6-4276-9ff5-eccf63955f85'
              },
              {
                buildHookId: '5cdc517ddd0e5fc653ce2be3',
                title: 'Blog Website',
                name: 'disrupt-web',
                apiId: 'ed5f8dba-058f-49bc-8092-b4be23834a57'
              }
            ]
          }
        }],
        data: [{
            title: 'GitHub repo',
            value: 'https://github.com/frransier/disrupt-web',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://disrupt-web.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {
      name: 'project-users',
      layout: {
        height: 'auto'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Recent blog posts',
        order: '_createdAt desc',
        types: ['post']
      },
      layout: {
        width: 'medium'
      }
    }
  ]
}
