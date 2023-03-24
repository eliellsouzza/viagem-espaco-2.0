import "./FooterStyle.css";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="development">
        <h3>DESENVOLVIDO POR ELIEL SOUZA</h3>
        <p>PARA FINS ACADÊMICOS</p>
      </div>
      <div className="pay">
        <h3>FORMAS DE PAGAMENTO</h3>

        <div className="textpay">
          <img src="/payments.png" alt="formas de pagamento" width={150} />
        </div>
      </div>
      <div className="socialNetwork">
        <h3>Entre em Contato</h3>
        <ul className="social_list">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaEnvelope />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
