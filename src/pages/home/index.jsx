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
          placeholder="Search For Any Food ....."
         />
        </form>
      </section>

      <section>
        <div className="wrapper">

          {recipeList && recipeList.length > 0

          ?

          (recipeList.map((item)  => <RecipeItem  key={item.id} item={item}/> ) )

          :
           (<div className="display-text">
            <p> Nothing to Display Now... Please Search Any Food of Choice</p>
            </div>
          )}


        </div>

      </section>
    </>
  )
}
