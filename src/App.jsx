
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
// import FormInput from "./components/FormInput";
// import {Routes, Route, createBrowserRouter,createRoutesFromElements, RouterProvider} from "react-router-dom";
import Home from "./pages/home/index";
import Favorites from "./pages/favorites";
import Details from "./pages/details/index";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path ="/" element ={<Navbar />}>
//       <Route index element={<Home />} />
//       <Route path="/favorites" element={<Favorites />} />
//       <Route path="/recipe-item/:id" element={<Details />} />
//     </Route>
//   )
// )


const App = () => {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
