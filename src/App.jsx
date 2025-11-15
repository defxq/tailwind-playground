import Testing from "./pages/Testing"
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import Missing from "./pages/Missing";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="test" element={<Testing />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )
}
export default App