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
import Create, { createAction } from "./pages/Create"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} loader={bandsLoader} />
      <Route path="add-band" element={<Create />} action={createAction} />
      <Route path="profile" element={<Profile />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
