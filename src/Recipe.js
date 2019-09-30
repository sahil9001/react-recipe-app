import React from 'react';
import style from './recipe.module.css'
const Recipe= ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}> 
            <h1>{title}</h1>
            <p><b>Calories:</b> {Math.round(calories)} cal</p>
            <img className={style.image} src={image} alt=""/>
            <ul className={style.ul}>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <br></br>
        </div>
    );
};

export default Recipe;

