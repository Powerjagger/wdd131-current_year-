import recipes from './recipes.mjs';

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getRandomListEntry(list) {
    const index = getRandomNumber(list.length);
    return list[index];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating 
            ? `<span aria-hidden="true" class="icon-star">⭐</span>` 
            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

function renderRecipes(recipeList) {
    const container = document.getElementById('recipe-container');
    container.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        const lowerQuery = query.toLowerCase();
        return recipe.name.toLowerCase().includes(lowerQuery) ||
               recipe.description.toLowerCase().includes(lowerQuery) ||
               recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
               recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(lowerQuery));
    }).sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
}

function searchHandler(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    const results = filterRecipes(query);
    renderRecipes(results);
}

document.getElementById('search-form').addEventListener('submit', searchHandler);

init();
