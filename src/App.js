import IpfsRouter from 'ipfs-react-router';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Store from "./components/Store"

function App() {
  return (
    <IpfsRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </IpfsRouter>
  )

}

export default App;
