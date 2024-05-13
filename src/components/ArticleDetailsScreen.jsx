import './ArticleDetailsScreen.css';

function ArticleDetailScreen({ article, setScreen }) {
  return (
    <div className="container">
      <div className="article-detail">
        <h1>Article Detail Screen</h1>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <p>Created Date: {article.createdDate}</p>
        <button onClick={() => setScreen('top')}>Back to Top</button>
      </div>
    </div>
  );
}

export default ArticleDetailScreen;