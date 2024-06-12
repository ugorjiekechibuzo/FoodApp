import {GlobalContext} from "../../context/GlobalState";
import { useParams } from "react-router-dom";
import {useContext, useEffect} from "react";
import "./index.css"

export default function Details() {

//  const params = useParams();
 const {id} = useParams();
 const {recipeDetailsData, setRecipeDetailsData, handleAddToFavorite, favoritesList} = useContext(GlobalContext)

 useEffect(() => {
  async function getRecipeDetails(){

   const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)

   const data = await response.json();


   if(data?.data){
    setRecipeDetailsData(data?.data)
   }


  };

  getRecipeDetails();
 }, [])



  return (

    <div className="container-details">
      <div className="image-wrapper">
         <img  src={recipeDetailsData?.recipe?.image_url} className="image"/>
      </div>
      <div className="recipe-info-wrapper">
        <span  className="recipe-publisher">{recipeDetailsData?.recipe?.publisher}</span>
        <h3 className="recipe-title">{recipeDetailsData?.recipe?.title}</h3>
        <div>
         <button className="details-button" onClick={() => {handleAddToFavorite(recipeDetailsData?.recipe)}}>
           {favoritesList && favoritesList.length > 0 && favoritesList.findIndex((item) => item.id === recipeDetailsData?.recipe?.id ) !== -1 ? "Remove from favorites" : "Save As favorite" }
         </button>
        </div>

        <div>
          <span className="ingredients">
            Ingredients:
          </span>

          <ul className="ingredient-list-item">
           {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
            <li>
            <span className="ingredient-quantity-unit"> {ingredient.quantity} {ingredient.unit} </span>
            <span className="ingredient-description"> {ingredient.description} </span>

           </li>
           ))}
          </ul>
        </div>
      </div>


    </div>

  )
}
