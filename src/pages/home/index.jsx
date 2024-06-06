import React from 'react'
import "./index.css"
import {useContext} from "react"
import {GlobalContext} from "../../context/GlobalState"
import RecipeItem from "../../components/RecipeItem"



export default function Home() {

  const {searchParam, setSearchParam, handleSubmit, recipeList, loading} = useContext(GlobalContext)
  if (loading) return <div>Searching...Please wait!</div>;

  return (
    <>
      <section>
        <form onSubmit={handleSubmit} >
         <input
          className="form"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          type="text"
          name="search"
          placeholder="Search Food Any Food ....."
         />
        </form>
      </section>

      <section>
        <div>

          {recipeList && recipeList.length > 0

          ?

          ( recipeList.map((item) => <RecipeItem item={item}/> ))
          :
           (<div>
            <p> Nothing to Display Now... Please Search Any Food of Choice</p>
            </div>
          )}


        </div>

      </section>
    </>
  )
}
