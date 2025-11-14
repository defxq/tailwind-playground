import Testing from "./pages/Test"
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import Missing from "./pages/Missing";

const App = () => {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Homepage />} />
        <Route path="test" element={<Testing />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )
}
export default App