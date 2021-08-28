import Head from '../components/Head'
import ArticleList from '../components/ArticleList'

export default function Articles({ articles }) {
  return (
    <>
      <Head />
      <ArticleList articles={articles} />
    </>
  )
}
