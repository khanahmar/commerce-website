import Home from "./components/routes/home/Home"
import { Routes, Route } from "react-router-dom"
import Navigation from "./components/routes/navigation/Navigation"

const Shop = () => {
  return <div>This is shop component</div>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
