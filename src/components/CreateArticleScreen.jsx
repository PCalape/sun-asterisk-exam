import { useState } from 'react';
import './CreateArticleScreen.css';
import { addArticle } from '../firebase/firestoreQueries';

function CreateArticleScreen({ setScreen, setArticles }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = () => {
    const newArticle = {
      id: Math.random(),
      title,
      content,
      createdDate: new Date().toISOString(),
    };
    setArticles(prevArticles => [newArticle, ...prevArticles]);
    setScreen('top');

    addArticle(title, content);
  };

  return (
    <div className="container">
      <h1>Create Article Screen</h1>
      <div className="input-container">
        <input type="text" placeholder="Article Title" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="input-container">
        <textarea placeholder="Article Content" value={content} onChange={e => setContent(e.target.value)} />
      </div>
      <button onClick={handlePost}>Post</button>
    </div>
  );
}

export default CreateArticleScreen;