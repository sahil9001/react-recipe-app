import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import style from './recipe.module.css';
import { Badge, ListGroup } from 'react-bootstrap';

const Recipe= ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <img className={style.image} src={image} alt=""/>
            <h1>{title}</h1>
            <p><b>Calories:</b> {Math.round(calories)} cal</p>
            <ListGroup className={style.ul}>
                {ingredients.map((ingredient, i) =>(
                    <ListGroup.Item key={i} variant={getListVariant(i)}>{ingredient.text}</ListGroup.Item>
                ))}
            </ListGroup>
            <br></br>
        </div>
    );
};

const getListVariant = (i) => {
    if (i % 2 == 0) return 'light';
    return 'secondary';
}

export default Recipe;

