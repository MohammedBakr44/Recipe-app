import React from "react";
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol className={style.list}>
                {ingredients.map(ingredient => (<li className={style.listItem}>{ingredient.text}</li>))}
            </ol>
            <p>Calories: <span className={style.cal}>{calories}</span></p>
            <img className={style.image} src={image} alt={title} />
        </div>
    );
};

export default Recipe;
