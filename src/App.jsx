import { useState } from 'react';
import CreateArticleScreen from './components/CreateArticleScreen';
import ArticleDetailScreen from './components/ArticleDetailsScreen';
import EditArticleScreen from './components/EditArticleScreen';
import ArticleList from './components/ArticleList';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // This state is used to determine which screen to display
  const [screen, setScreen] = useState('top');

  const handleDelete = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  const handleDetail = (article) => {
    setSelectedArticle(article);
    setScreen('detail');
  };

  const handleEdit = (article) => {
    setSelectedArticle(article);
    setScreen('edit');
  };

  const handleCreate = () => {
    setScreen('create');
  };

  switch (screen) {
    case 'create':
      return <CreateArticleScreen setScreen={setScreen} setArticles={setArticles} />;
    case 'detail':
      return <ArticleDetailScreen article={selectedArticle} setScreen={setScreen} />;
    case 'edit':
      return <EditArticleScreen article={selectedArticle} setScreen={setScreen} setArticles={setArticles} />;
    default:
      return (
        <div className="container">
          <h1>Top Screen</h1>
          <button onClick={handleCreate}>Create New Article</button>
          <ArticleList articles={articles} handleDetail={handleDetail} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
      );
  }
}

export default App;