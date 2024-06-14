export const fetchRecipes = async (query) => {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(query)}&app_id=53319cac&app_key=604df2e2f90ef7ebeb487a0b67df7cc5`
  );
  if (!response.ok) {
    console.error(`Network error: ${response.status} - ${response.statusText}`);
    throw new Error('Błąd sieci');
  }
  const data = await response.json();
  return data.hits.map(hit => hit.recipe);
};
