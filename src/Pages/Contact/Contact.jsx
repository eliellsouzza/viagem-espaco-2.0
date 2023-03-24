import { useState } from "react";
import foguetescontato from "../../assets/carteiro1.png"
import "./ContactStyle.css";
import foguetescontato3 from "../../assets/foguetecontato.png"
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="moon">
     
      <div className="quad">
      <div className="foguetecontato12">  <img src= {foguetescontato3}alt="foguete"  width={250}/></div> 
        <div className="Contact">
          <h1 className="title">Deixe seu Feedback</h1>

          <form className="form" onSubmit={() => {}}>
            <input
              className="input"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              className="input"
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <textarea
              className="textarea"
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <input className="button" type="submit" value="Enviar" />
          </form>
          <div className="carteiro">  <img src= {foguetescontato}alt="carteiro"  width={400}/></div> 
        </div>
      </div>
    </div>
  );
};

export default Contact;
