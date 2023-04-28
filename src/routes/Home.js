import Team from "../components/Team";
import Partners from "../components/Partners";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Home | The Remedy';
  }, []);

  console.log(window.location.href)
  console.log(window.location.pathname)

  return (
    <>
      <div className="container home">
        <div className="header-wrapper">
          <div className="header">
            <h1>Hemp-Derived CBD Products (including Delta 8)</h1>
            <h2>Our mission is to educate and provide quality products to the community.</h2>
            <div className="home-buttons">
              <button onClick={() => { navigate("/hemp-education"); window.scrollTo(0, 0) }}>Learn More</button>
              <button onClick={() => { navigate("/store"); window.scrollTo(0, 0) }}>Visit Store</button>
            </div>
          </div>
          <img src="https://nftstorage.link/ipfs/bafybeibhulhxh7bsfkjgkfwfbpruyl4zhphdbjrfg44ic755allsyzfpt4/store.png" alt="Store" className="store-image" />
        </div>
        <h2>We offer the highest quality of legal hemp derived CBD products all with third party lab testing. Full Spectrum & THC free CBD oils, vape oils/cartridges/pods, edibles, flower, topicals/lotions/salves, isolated, shatters & pet treats/oils/topicals.</h2>
        <Team />
      </div>
      <Partners />
    </>
  )

}

export default Home;
