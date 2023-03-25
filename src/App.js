import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Store from "./components/Store"
import { create as createIPFS } from 'ipfs-http-client';


async function getIpfsContentAddress() {
  const ipfs = await createIPFS();
  const domainName = 'the-remedy.4everland.app'; // Replace with your domain name
  const path = '/'; // Replace with the path to your content
  const result = await ipfs.name.resolve(`${domainName}${path}`);
  const ipfsContentAddress = result?.path?.replace('/ipfs/', '');
  return ipfsContentAddress;
}

function App() {
  const [ipfsContentAddress, setIpfsContentAddress] = useState('');

  useEffect(() => {
    async function fetchIpfsContentAddress() {
      const contentAddress = await getIpfsContentAddress();
      console.log(contentAddress)
      setIpfsContentAddress(contentAddress);
    }
    fetchIpfsContentAddress();
  }, []);

  return (
    <Routes basename={`/ipfs/${ipfsContentAddress}`}>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  )

}

export default App;
