import { ProductBrowser } from '@ecwid/nextjs-ecwid-plugin'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function Store() {

  useEffect(() => {
    document.title = 'Store | The Remedy';
  }, []);

  const ExtraStoreItems = () => {

    const [cartItems, setCartItems] = useState(0)
    const [url, setUrl] = useState(window.location.pathname + window.location.search)

    useEffect(() => {
      (async () => {
        let found = false
        let tried = 0
        while (!found || tried > 30) {
          await new Promise(resolve => setTimeout(resolve, 500))
          const shoppingCartLink = document.getElementsByClassName("footer__link--shopping-cart")
          if (shoppingCartLink.length > 0) {
            //get amount of items in cart
            setCartItems(shoppingCartLink?.[0]?.innerText?.split("(")[1]?.split(")")[0])
            for (let i = 0; i < shoppingCartLink.length; i++) {
              shoppingCartLink[i].addEventListener("DOMCharacterDataModified", function (event) {
                setCartItems(event?.newValue?.split("(")[1]?.split(")")[0])
              }, false)
            }

            //handle change in url
            async function handleLinkClick(event) {
              await new Promise(resolve => setTimeout(resolve, 50))
              setUrl(window.location.pathname + window.location.search);
            }
            const links = document.getElementsByTagName('div');
            for (let i = 0; i < links.length; i++) {
              links[i].addEventListener('click', handleLinkClick);
            }
            return () => {
              for (let i = 0; i < links.length; i++) {
                links[i].removeEventListener('click', handleLinkClick);
              }
            };
          } else {
            tried++
          }
        }
      })()
    }, [url]);

    return (
      <>
        {url === "/store" && <h1 className="store-title">Store</h1>}
        <button onClick={() => window.location.href = ("#!/~/cart")} className="cart-button">
          {(cartItems && +cartItems > 0) ? <div className="amount">{cartItems}</div> : <></>}
          <svg className="icon-default" width="36" height="30" viewBox="0 0 36 30" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path d="M7 7h22v18a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V7z" stroke="#000" strokeWidth="2" />
              <path d="M13 10V6c0-2.993 2.009-5 5-5s5 2.026 5 5v4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </button>
      </>
    )
  }

  return (
    <div className="container store">
      <ExtraStoreItems />
      <ProductBrowser
        storeId="27683074"
      />
    </div>
  )

}

export default Store;
