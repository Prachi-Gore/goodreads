import Error from "Pages/Error"
import Home from "Pages/Home"
import { Route, Routes } from "react-router-dom"


const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default MainRouter
