import React from 'react'
import './index.css'

const RecipeItem = ({item}) => {

  console.log(item)
  return (
    <>
    <section className="recipe-container">
      <div className="img-container">
      <img src={item?.image_url} alt= "recipe item"/>
      </div>
      <div>
        <span>
          {item?.publisher}
        </span>
        <h3>
          {item?.title}
        </h3>
      </div>

    </section>
    </>
  )
}

export default RecipeItem
