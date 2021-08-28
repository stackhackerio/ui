import Article from './Article'

export default function ArticleList({ articles }) {
  return (
    <div className="relative py-0 px-6 my-0 mx-auto">
      {articles.map((article) => {
        return <Article key={article.id} article={article} />
      })}
    </div>
  )
}
