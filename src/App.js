import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home"
import Store from "./routes/Store"
import Education from "./routes/Education"
import Legal from "./routes/Legal"
import Contact from "./routes/Contact"
import Terms from "./routes/Terms"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/hemp-education" element={<Education />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms-and-policies" element={<Terms />} />
    </Routes>
  )

}

export default App;

/*

  TODO: hook up email to contact page

*/