import {createContext, useState} from 'react'

export const GlobalContext = createContext(null);

const GlobalState = ({children}) => {
  const [searchParam, setSearchParam] = useState("")
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([])
 
  async function handleSubmit(e){
    e.preventDefault();

    try{
      const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await response.json();
      if(data?.data?.recipes){
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }




    }catch(e){
      console.log(e)
      setLoading(false);
      setSearchParam("");
    }
  }


  const handleAddToFavorite = (currentItem) =>{
    let addToFavoriteList = [...favoritesList];
    const index = addToFavoriteList.findIndex(item => item.id === currentItem.id)

    if(index === -1){
    addToFavoriteList.push(currentItem)
   }else{
    addToFavoriteList.splice(index)
   }

   setFavoritesList(addToFavoriteList)
  }


  return (


    <GlobalContext.Provider
    value={{searchParam, setSearchParam, handleSubmit, loading, recipeList, recipeDetailsData, setRecipeDetailsData, favoritesList, handleAddToFavorite}}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
