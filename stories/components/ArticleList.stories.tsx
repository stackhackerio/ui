import ArticleList from '../../components/ArticleList'

const component = {
  component: ArticleList,
  title: 'components/ArticleList',
}
const Template = (args) => <ArticleList {...args} />

const users = [
  {
    id: 1,
    avator: '/avator1.jpg',
  },
  {
    id: 2,
    avator: '/avator2.jpg',
  },
  {
    id: 3,
    avator: '/avator3.jpg',
  },
]

export const Default = Template.bind({})
Default.args = {
  articles: [
    {
      id: 1,
      title: 'Using Express.js with Vercel',
      description: 'Learn how to use Express.js in a Serverless environment.',
      users: [users[0], users[1]],
    },
    {
      id: 2,
      title: 'Deploying a Static Nuxt.js App with Vercel',
      description: 'Create and deploy your static Nuxt.js app with Vercel.',
      users: [users[1], users[2]],
    },
    {
      id: 3,
      title: 'Getting Started with Next.js and Vercel',
      description: 'Create a Next.js app and deploy it with Vercel.',
      users: [users[1]],
    },
    {
      id: 4,
      title: 'Deploy a React App with Vercel and Create React App',
      description:
        'Create your Create React App project and deploy it with Vercel.',
      users: [users[0], users[1], users[2]],
    },
  ],
}

export default component
