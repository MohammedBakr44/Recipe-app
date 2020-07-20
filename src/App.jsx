import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
    const APP_ID = "cbee1b5d";
    const APP_KEY = "fdb84f2c2b3689514b085c0d2b263896";
    // State
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("Chicken");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input
                    type="text"
                    className="search-bar"
                    value={search}
                    onChange={updateSearch}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map((recipe) => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
