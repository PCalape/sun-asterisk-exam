import { useState } from 'react';
import './CreateArticleScreen.css';
import { addDoc, collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebase/firestore.js';

function CreateArticleScreen({ setScreen, setArticles }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = async () => {
    const newArticle = {
      id: Math.random(),
      title,
      content,
      createdDate: new Date().toISOString().slice(0, 10),
    };
    setArticles(prevArticles => [newArticle, ...prevArticles]);
    setScreen('top');

    try {
      const docRef = await addDoc(collection(db, "articles"), {
        title,
        content,
        createdDate: new Date().toISOString().slice(0, 10)
      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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