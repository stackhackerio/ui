import Article from "./Article";
import * as ArticleList from "./ArticleList.stories";

export default {
  component: Article,
  title: "components/Article",
};
const Template = (args) => <Article {...args} />;

export const Default = Template.bind({});
Default.args = { article: ArticleList.Default.args.articles[0] };
