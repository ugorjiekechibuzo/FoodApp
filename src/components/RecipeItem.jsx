import React from 'react'

const RecipeItem = ({item}) => {

  console.log(item)
  return (
    <>
    <div>
      <div>
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

    </div>
    </>
  )
}

export default RecipeItem
