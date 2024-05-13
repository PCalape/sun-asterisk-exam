import { useState } from 'react';
import CreateArticleScreen from './components/CreateArticleScreen';
import ArticleDetailScreen from './components/ArticleDetailsScreen';
import EditArticleScreen from './components/EditArticleScreen';
import ArticleList from './components/ArticleList';
import './App.css';

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'What is Lorem Ipsum', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', createdDate: '2024-05-13'}, 
    { id: 2, title: 'Another Article', content: 'Another Content', createdDate: '2024-05-13' }
  ]);
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