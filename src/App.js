import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React,{useEffect,useState} from 'react';
import Recipe from "./Recipe";
import { Button } from 'react-bootstrap';
import uuid from 'uuid';

const App = () => {
  
    require('dotenv').config();
    const api_id = process.env.API_ID;
    const api_key = process.env.API_KEY;
    const [recipes,setRecipes] = useState([]);
    const [search,setSearch] = useState('');
    const [query, setQuery] = useState('');
    useEffect(() =>{
       getRecipes();
    }, [query]);
    const getRecipes = async () =>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${api_key}`);
        const data = await response.json();
        setRecipes(data.hits);

        
    };
    const updateSearch = e =>{
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }
    return(
       
        <div className="App">
              

            <form onSubmit = {getSearch} className="search-form">
        
                <input className = "search-bar" type="text" value ={search} onChange={updateSearch} placeholder="Search a recipe"/>
                <Button variant="primary" className = "search-button" type="submit">Submit</Button>
            </form>
            <div className="recipes">
            {recipes.map(recipe => (
                <Recipe 
                key = {uuid.v4()} // Generates a new random key everytime
                title = {recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image = {recipe.recipe.image}
                ingredients = {recipe.recipe.ingredients}/>
            ))}
            </div>
        </div>
    );
};
export default App;
