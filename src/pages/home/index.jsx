import React from 'react'
import "./index.css"
import {useContext} from "react"
import {GlobalContext} from "../../context/GlobalState"



export default function Home() {

  const {searchParam, setSearchParam} = useContext(GlobalContext)
  return (
    <>
      <section>
        <form >
         <input
          className="form"
          type="text"
          name="search"
          placeholder="Search Food Any Food ....."
         />
        </form>
      </section>
    </>
  )
}
