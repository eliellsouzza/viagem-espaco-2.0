import "./AboutStyle.css";
import astronaut from "../../assets/astronauta.png";

 
const About = () => {
  return (
    <body className="moonWhite">
      <div className="About">
        <div className="Astronaut1">
          <img src={astronaut} alt="astronaut" width={320} />
        </div>
        <div className="centralizando">
        
        <div className="AboutUs">
          <div className="barraSuperior">  
            <div className="red">.</div>
            <div className="yellow">.</div>
            <div className="green">.</div>
              <div className="quemsomos">QUEM SOMOS?</div>
          </div>
          <p className="paragrafo">
            SOMOS UMA STARTUP VOLTADA A VIAGENS ESPACIAIS, OU SIMPLESMENTE VOO
            ESPACIAIS, NOSSO MÉTODO DE TRANSPORTE É VEÍCULOS TRIPULADOS E
            NÃO-TRIPULADOS NO ESPAÇO SIDERAL. <br />A VIAGEM ESPACIAL ESTÁ
            ASSOCIADA ÀS TECNOLOGIAS DE PROPULSÃO DE ESPAÇONAVES MAIS MORDERNAS
            CONHECIDAS PELO HOMEM, NOSSO OBJETIVO É PROPORCIONAR EXPERIÊNCIAS
            INCRÍVEIS .
          </p>
        </div>
        
        
     
        
         
       

        
        </div>
      </div>
    </body>
  );
};

export default About;
