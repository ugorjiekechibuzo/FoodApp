import "./index.css"
import {useContext} from "react"
import {GlobalContext} from "../../context/GlobalState"
import RecipeItem from "../../components/RecipeItem"





export default function Home() {

  const {searchParam, setSearchParam, handleSubmit, recipeList, loading} = useContext(GlobalContext)

  if (loading) return <div>Searching...Please wait!</div>;

  return (
    <>
      <section className="container-form">
        <form onSubmit={handleSubmit}  className="home-form">
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
        <div >

          {recipeList && recipeList.length > 0

          ?
           (<div className="wrapper">
          {(recipeList.map((item)  => <RecipeItem  key={item.id} item={item}/> ) )}
           </div>)
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
