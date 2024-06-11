
import {useContext} from "react"
import {GlobalContext} from "../../context/GlobalState"
import RecipeItem from "../../components/RecipeItem"


import React from 'react'

const Favorites = () => {
  const {favoritesList} = useContext(GlobalContext);
 console.log(favoritesList)

 return (
  <div className="">

    {favoritesList && favoritesList.length > 0

    ?

    (favoritesList.map((item)  => <RecipeItem  key={item.id} item={item}/> ) )

    :
      (<div className= "">
        <p> No Item Found</p>
      </div>
    )}


  </div>
 )
}

export default Favorites
