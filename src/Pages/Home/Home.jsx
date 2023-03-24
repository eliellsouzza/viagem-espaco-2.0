import "./HomeStyle.css";
import { FaRocket } from "react-icons/fa";
 
const Home = () => {
  return (
    <body className="moon">
      <div className="Home ">
        <div className="rocket1">
          {" "}
          <img src="/foguete01.png" alt="rocket2" width={350} />
        </div>

        <div className="luaaa">
          <div className="TextHome">
            <h1 className="title1">Viajando pelo</h1>
            <h2 className="title2">Universo</h2>
            <div>
              <p className="title3">
                viva uma grande aventura desvendando os <br />
                segredos que esse grande universo esconde.
              </p>
            </div>

            <div>
              <button className="destinations">
                <li className="rocketbutton">
                  <FaRocket />
                </li>
                DESTINOS
              </button>
            </div>
          </div>
        </div>
        {/*  <div className="lua">  <img src= {lua}alt="lua"  width={1200}/></div>  */}

        <div className="rocket2">
          {" "}
          <img src="/foguete02.png" alt="rocket2" width={300} />
        </div>
      </div>
    </body>
  );
};

export default Home;
