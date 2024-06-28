const recipes = [
    {
        author: 'Provo High Culinary Students',
        url: '',
        isBasedOn: '',
        cookTime: '30 Min',
        datePublished: '2016-10-16',
        tags: ['Waffles', 'Sweet Potato', 'Side'],
        description: 'Savory waffles made with Sweet potato with a hint of Ginger',
        image: './images/sweet-potato-waffle.jpg',
        recipeIngredient: [
            '2 separated eggs',
            '1/4 C Oil',
            '1/4 tsp salt',
            '1/4 tsp Cayenne pepper',
            '3/4 C milk',
            '1 Tbsp Brown Sugar',
            '2 tsp Shredded Ginger',
            '3/4 C Mashed Sweet Potatoes',
            '1 Tbsp Minced Shallots',
            '1 Tbsp Baking Powder',
            '1 Tbsp Chives',
            '1/4 C Cornmeal',
            '1 C Flour'
        ],
        name: 'Sweet Potato Waffles',
        prepTime: '30 Min',
        recipeInstructions: [
            'Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.',
            'Next add the cornmeal, chives, and flour and baking powder',
            'Whip the egg whites until stiff and fold in',
            'Cook until golden brown in a waffle iron. Serve with butter and Wilted Greens or Honey.'
        ],
        recipeYield: '6-8 Waffles',
        aggregateRating: {
            ratingValue: 5,
            ratingCount: 5
        }
    },
    {
        author: 'Chef John',
        url: '',
        isBasedOn: '',
        cookTime: '50 Min',
        datePublished: '2016-10-15',
        tags: ['Soup', 'Spicy', 'Dinner'],
        description: 'A spicy, hearty soup with a kick of jalapeños',
        image: './images/spicy-soup.jpg',
        recipeIngredient: [
            '2 tbsp Olive Oil',
            '1 Onion, diced',
            '2 Cloves Garlic, minced',
            '2 Carrots, chopped',
            '1 Jalapeño, seeded and chopped',
            '1 Can Diced Tomatoes',
            '4 Cups Chicken Broth',
            '1 Cup Black Beans',
            '1 Cup Corn',
            '1 tsp Chili Powder',
            '1 tsp Cumin',
            'Salt and Pepper to taste'
        ],
        name: 'Spicy Jalapeño Soup',
        prepTime: '20 Min',
        recipeInstructions: [
            'Heat the olive oil in a large pot over medium heat. Add the onion, garlic, and carrots and cook until softened.',
            'Stir in the jalapeño and cook for another minute.',
            'Add the diced tomatoes, chicken broth, black beans, and corn.',
            'Season with chili powder, cumin, salt, and pepper.',
            'Bring to a boil, then reduce heat and simmer for 30 minutes.'
        ],
        recipeYield: '4 Servings',
        aggregateRating: {
            ratingValue: 4.5,
            ratingCount: 8
        }
    }
];

export default recipes;
