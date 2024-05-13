import { useState } from 'react';
import { editArticle } from '../firebase/firestoreQueries';
import './EditArticleScreen.css';

function EditArticleScreen({ article, setScreen, setArticles }) {
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);

  const handleUpdate = () => {
    const updatedArticle = {
      ...article,
      title,
      content,
    };
    setArticles(prevArticles => prevArticles.map(a => a.id === updatedArticle.id ? updatedArticle : a));
    setScreen('top');
    editArticle(article.id, { ...article, title, content });
  };

  return (
    <div className="container">
      <div className="update-form">
        <h1>Edit Article Screen</h1>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={content} onChange={e => setContent(e.target.value)} />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
}

export default EditArticleScreen;