import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home"
import Store from "./routes/Store"

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
  )

}

export default App;
