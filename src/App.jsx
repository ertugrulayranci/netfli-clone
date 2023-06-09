import { BrowserRouter,Routes, Route} from "react-router-dom"
import { useState } from "react"
import MainPage from "./pages/MainPage"
import MovieDetail from "./pages/MovieDetail"
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/movie/:movieId" element={<MovieDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
