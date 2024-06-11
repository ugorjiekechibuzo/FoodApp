import React from 'react'
import './index.css'
import {Link} from "react-router-dom"

const RecipeItem = ({item}) => {

  
  return (

    <section className="recipe-container">
      <div className="img-container">
       <img src={item?.image_url} alt= "recipe item" className="recipe-pic"/>
      </div>
      <div>
        <span className="recipe-text">
          {item?.publisher}
        </span>
        <h3 className="recipe-title">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="recipe-details"
        >
          Recipe Details
        </Link>
      </div>

    </section>

  )
}

export default RecipeItem
