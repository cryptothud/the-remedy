import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Store from "./components/Store"
import IPFS from 'ipfs-http-client';

const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

async function getIpfsContentAddress() {
  const domainName = 'the-remedy.4everland.app'; // Replace with your domain name
  const path = '/'; // Replace with the path to your content
  const result = await ipfs.name.resolve(`${domainName}${path}`);
  const ipfsContentAddress = result.path.replace('/ipfs/', '');
  return ipfsContentAddress;
}

function App() {
  const [ipfsContentAddress, setIpfsContentAddress] = useState('');

  console.log(ipfsContentAddress)

  useEffect(() => {
    async function fetchIpfsContentAddress() {
      const contentAddress = await getIpfsContentAddress();
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
