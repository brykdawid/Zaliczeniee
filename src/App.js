import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { fetchRecipes } from './api';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query) return;
    setIsLoading(true);
    setError(null);
    try {
      const results = await fetchRecipes(query);
      setRecipes(results);
    } catch (err) {
      setError('Wystąpił błąd podczas pobierania danych.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Ładowanie...</p>}
      {error && <p>{error}</p>}
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
