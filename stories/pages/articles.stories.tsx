import Articles from '../../pages/articles'
import * as ArticleList from '../components/ArticleList.stories'

export default {
  component: Articles,
  title: 'pages/Articles',
}
const Template = (args) => <Articles {...args} />

export const Default = Template.bind({})
Default.args = {
  articles: ArticleList.Default.args.articles,
}
