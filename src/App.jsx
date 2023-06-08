import { BrowserRouter,  Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Movie from "./Pages/Movie"
import Header from "./Components/Header"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movie />} />
        <Route path="/" element={<h1>Error Page</h1>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App