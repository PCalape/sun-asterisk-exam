import './ArticleList.css';

function ArticleList({ articles, handleEdit, handleDelete, handleDetail }) {
  return (
    <div>
      <h2>Article List</h2>
      {articles.map(article => (
        <div className="article" key={article.id} onClick={() => handleDetail(article)}>
          <h3>{article.title}</h3>
          <p>{article.content?.substring(0, 50)}...</p>
          <p>Created Date: {article.createdDate}</p>
          <div className="article-buttons">
            <button onClick={(e) => { e.stopPropagation(); handleEdit(article); }}>Edit</button>
            <button onClick={(e) => { e.stopPropagation(); handleDelete(article.id); }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;