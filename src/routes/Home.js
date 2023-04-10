import Team from "../components/Team";
import Partners from "../components/Partners";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="container home">
        <div className="header">
          <h1>Hemp-Derived CBD Products (including Delta 8)</h1>
          <h2>Our mission is to educate and provide quality products to the community.</h2>
          <div className="home-buttons">
            <button onClick={() => navigate("/hemp-education")}>Learn More</button>
            <button onClick={() => navigate("/store")}>Visit Store</button>
          </div>
        </div>
        <img src="/store.png" alt="Store" className="store-image" />
        <h2>We offer the highest quality of legal hemp derived CBD products all with third party lab testing. Full Spectrum & THC free CBD oils, vape oils/cartridges/pods, edibles, flower, topicals/lotions/salves, isolated, shatters & pet treats/oils/topicals.</h2>
        <Team />
      </div>
      <Partners />
    </>
  )

}

export default Home;
