import Team from "../components/Team";
import Partners from "../components/Partners";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"

function Education() {

  useEffect(() => {
    document.title = 'Hemp Education | The Remedy';
  }, []);

  return (
    <>
      <div className="container education">
        <h1 className="store-title">Terms & Policies</h1>
        <div className="text-block">
          <h1>AGE RESTRICTIONS</h1>
          <h2>If you are under the age of 21, by purchasing our products you acknowledge any and all risks and release <i>The Remedy, Majestic Advising, LLC. and its representatives</i> from any and all liability resulting from the purchase of these products.</h2>
        </div>
        <div className="text-block">
          <h1>RETURN POLICY</h1>
          <h2>By making a purchase you are demonstrating a clear understanding that we are selling these products as containing CBD (cannabidiol) from hemp oil. These statements have not been evaluated by the FDA and are not intended to diagnose, treat or cure any disease, always check with your physician before starting a new dietary supplement program. We are committed to complete compliance with FDA regulations and as such, because these products have not been evaluated by the FDA, we make no claims as to any benefits for products containing CBD (cannabidiol). If you decide to purchase our products, you are purchasing these products with the understanding the present status of CBD (cannabidiol) products.</h2>
          <h2>Please email <a href="mailto:ryan@theremedyvi.com">ryan@theremedyvi.com</a> if there are any issues with the product you received and we are more than happy to speak with you!</h2>
          <h2>If you are still wanting to return your unopened product and it is within 7 days of receiving it, please see our Returns Process below.</h2>
          <h2>If you have any questions about whether your product is eligible for Returns, please feel free to email us. Customer is responsible for return shipping costs. <b>**Please also note that we do not have a money back guarantee, as CBD does affect everyone differently. We are not able to accept back any product that has been opened or used**</b></h2>
          <h3>Returns Process:</h3>
          <ol className="numbered-list">
            <li>Email us at <a href="mailto:ryan@theremedyvi.com">ryan@theremedyvi.com</a> ASAP to alert us that you will be returning your UNOPENED product within the 7-day time limit and to request the Return Shipping Address.</li>
            <li>Once you have shipped your product back to us – please also email the tracking number to ryan@theremedyvi.com so we can keep an eye out for it.</li>
            <li>Upon receipt of your package back at our facility and can confirm it’s condition, we will then issue a refund for the unopened product and email you a confirmation. Please allow 7-10 days for the refund to post to your statement.</li>
          </ol>
          <h2>All Remedy products purchased via retail, Your acceptance of the terms of purchase means you agree to and understand the refund policy.</h2>
          <h2>The Remedy will only accept returns and refunds from purchases made on theremedyvi.com/store. The Remedy will not allow returns from a purchase made in a retail store.</h2>
          <h2>Any questions or concerns on how this process works please email us at <a href="mailto:ryan@theremedyvi.com">ryan@theremedyvi.com</a> or call at <a href="tel:340-473-9087">(340) 473-9087</a>. Thank you for trusting The Remedy as your CBD and hemp provider.</h2>
        </div>
        <div className="text-block">
          <h1>RISKS:</h1>
          <h2>​​As with anything that is taken internally or used topically, there are potential risks. We source our oils and flavorings from reputable suppliers, and follow good manufacturing practices in our growing, extracting and formulating operations. We do not use chemicals or harsh biological compounds at any stage in production, and we leave our products in as natural a state as possible. Regardless, you should always pay attention to how you feel when you are using these and any other products internally or topically, and stop using them if you notice anything that doesn’t feel right to you. Please consult with your medical professional before using any of these products.</h2>
          <h2>By purchasing products from our website, you acknowledge any and all risk and release <i>The Remedy, Majestic Advising, LLC. and its representatives</i> from any and all liability resulting from the use of these products.</h2>
        </div>
        <div className="text-block">
          <h1>AND FINALLY:</h1>
          <h2>​These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</h2>
        </div>
        <div className="text-block">
          <h1>PRIVACY POLICY</h1>
          <h3>WHAT DO WE DO WITH YOUR INFORMATION?</h3>
          <h2>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.</h2>
          <h2>When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</h2>
          <h2>Email marketing & Text Messaging: With your permission, we may send you emails about our store, new products and other updates.</h2>
          <h3>CONSENT</h3>
          <h2>How do you get my consent?</h2>
          <h2>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</h2>
          <h2>How do I withdraw my consent?</h2>
          <h2>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at ryan@theremedyvi@gmail.com </h2>
          <h3>DISCLOSURE</h3>
          <h2>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</h2>
          <h3>THIRD-PARTY SERVICES</h3>
          <h2>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</h2>
          <h2>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</h2>
          <h2>As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act. Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</h2>
          <h2>Links</h2>
          <h2>When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements. Google analytics: Our store uses Google Analytics to help us learn about who visits our site and what pages are being looked at.</h2>
          <h3>SECURITY</h3>
          <h2>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</h2>
          <h2>If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.</h2>
          <h3>COOKIES</h3>
          <h2>We use “cookies” to help us provide a better user experience by measuring which website areas are of greatest interest. We may also use cookies when you register for further information. In this situation, a cookie will store useful information that enables our website to remember you when you return. You may choose to disable cookies using the tools in your browser; however, by doing so you may not be able to take advantage of all of the functions of our website.</h2>
          <h3>AGE OF CONSENT</h3>
          <h2>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</h2>
          <h3>CHANGES TO THIS PRIVACY POLICY</h3>
          <h2>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</h2>
          <h3>QUESTIONS AND CONTACT INFORMATION</h3>
          <h2>If you have any questions about this Privacy Policy or the practices described herein, you may contact us through the contact information provided on this website.This product is not for use by or sale to persons under the age of 21. This product should be used only as directed on the label. It should not be used if you are pregnant or nursing. Consult with a physician before use if you have a serious medical condition or use prescription medications. A Doctor’s advice should be sought before using this and any supplemental dietary product. All trademarks and copyrights are property of their respective owners and are not affiliated with nor do they endorse this product. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. Individual weight loss results will vary. By using this site, you agree to follow the Privacy Policy and all Terms & Conditions printed on this site. Void Where Prohibited by Law. The website user agrees that any disagreements, disputes or other actions arising from any transactions originated from the website shall be subject to venue and jurisdiction in state of Illinois. Any controversy or claim arising out of or relating to any such disagreements, disputes or other actions arising from any transactions originated from the website shall be settled by arbitration administered by the American Arbitration Association under its Construction Industry Arbitration Rules. </h2>
          <h2>Disclaimer:</h2>
          <h2>Cannabidiol (CBD) is a natural occurring constituent of industrial hemp. The Remedy does not sell, promote, or distribute any products that are in violation of the United States Controlled Substance Act (USCSA). Hemp products became federally legal in 2018 under the Farm Bill Act. Our products don’t cure, diagnose, treat or prevent any disease. We do sell some full spectrum CBD products that can show up on an employment drug screening or test. Our company does sell and distribute hemp based products. Before taking any of our products you should consult with your medical professional/practitioner.</h2>
        </div>
      </div>
    </>
  )

}

export default Education;
