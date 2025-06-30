import "./Footer.css";

import Instagram from "/instagram.webp";
import Whatsapp from "/whatsapp.webp";

function Footer() {
  return (
    <footer id="footer">
      <div className="contato">
        <a href="https://www.instagram.com/nutrijeanlopes?igsh=dGQzMjhoZW00NHc0&utm_source=qr" target="_blank"><img
          src={Instagram}
          loading="lazy"
          alt="instagram"
        /></a>
        <a href="https://api.whatsapp.com/send/?phone=5519991701252&text&type=phone_number&app_absent=0" target="_blank"><img
          src={Whatsapp}
          loading="lazy"
          alt="whatsapp"
        /></a>
      </div>
      <div className="endereco">
        <p>Livance Campinas | Av. Orosimbo Maia, 360 - 6º andar - Vila Mariana, Campinas - SP, 13010-211</p>
      </div>
    </footer>
  );
}

export default Footer;
