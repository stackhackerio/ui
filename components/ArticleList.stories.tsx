import ArticleList from "./ArticleList";

export default {
  component: ArticleList,
  title: "components/ArticleList",
};
const Template = (args) => <ArticleList {...args} />;

const users = [
  {
    id: 1,
    avator:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    avator:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 3,
    avator:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export const Default = Template.bind({});
Default.args = {
  articles: [
    {
      id: 1,
      title: "Using Express.js with Vercel",
      description: "Learn how to use Express.js in a Serverless environment.",
      users: [users[0], users[1]],
    },
    {
      id: 2,
      title: "Deploying a Static Nuxt.js App with Vercel",
      description: "Create and deploy your static Nuxt.js app with Vercel.",
      users: [users[1], users[2]],
    },
    {
      id: 3,
      title: "Getting Started with Next.js and Vercel",
      description: "Create a Next.js app and deploy it with Vercel.",
      users: [users[1]],
    },
    {
      id: 4,
      title: "Deploy a React App with Vercel and Create React App",
      description:
        "Create your Create React App project and deploy it with Vercel.",
      users: [users[0], users[1], users[2]],
    },
  ],
};
