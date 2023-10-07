// base imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

// import layouts and pages
import Layout from "./layouts/Layout"
import Dashboard, { bandsLoader } from "./pages/Dashboard"
import Create from "./pages/Create"
import Profile from "./pages/Profile"

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} loader={bandsLoader} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
