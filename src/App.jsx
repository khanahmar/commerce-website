import Home from "./components/routes/home/Home"
import { Routes, Route } from "react-router-dom"
import Navigation from "./components/routes/navigation/Navigation"
import Authentication from "./components/routes/authentication/Authentication"
import ShopComponent from "./components/routes/shop/ShopComponent"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopComponent />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
