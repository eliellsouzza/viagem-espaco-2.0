import "./CatalogStyle.css";

import Card from "../../Components/Card";
import Filtros from "../../Components/Filtros/Filters";
import Carrinho from "../../Components/carrinho/Carrinho";
import { useState } from "react";

const Catalog = (props) => {
  const { rota } = props;
  const { query, orderParam, carinho } = props.states;

  const { handleInputQuery, handleInputOrderParam, setCarinho } = props.handles;

  const addToCart = (viagem) => {
    const novaViagem = carinho.find((item) => {
      return item.id === viagem.id;
    });

    if (!novaViagem) {
      setCarinho([...carinho, { ...viagem, qtd: 1 }]);
    } else {
      const newCarinho = carinho.map((item) => {
        if (item.id === viagem.id) {
          return { ...novaViagem, qtd: novaViagem.qtd + 1 };
        }
        return item;
      });
      setCarinho(newCarinho);
    }
  };
  console.log(carinho);

  const deleteViagemToCard = (viagem) => {
    const ProductDelete = carinho.find((item) => item.id === viagem.id);
    if (deleteViagemToCard.qtd > 1) {
      const newCarinho = carinho.map((item) => {
        if (item.id === viagem.id) {
          return [{ ...ProductDelete, qtd: ProductDelete.qtd - 1 }];
        }
        return item;
      });

      setCarinho(newCarinho);
    } else {
      const newCart = viagem.filter(() => {
        return item.id !== viagem.id;
      });

      setCarinho(newCart);
    }
  };

  console.log(deleteViagemToCard);

  const renderList = rota

    .filter((data) => query === "" || data.name.toLowerCase().includes(query))

    .sort((a, b) =>
      orderParam === "" || (orderParam === "asc" && a.name > b.name) ? 1 : -1
    )

    .map((data) => {
      return (
        <Card
          key={data.id}
          id={data.id}
          img={data.imageUrl}
          name={data.name}
          value={data.price}
          rota={rota}
          addToCart={addToCart}
          viagem={data}
          deleteViagemToCard={deleteViagemToCard}
        />
      );
    });

  return (
    <div className="Catalog">
      <div className="filters">
        {/*     campo de busca
         */}
        <button onClick={() => deleteViagemToCard(newCart)}>dele</button>

        <h2>BUSCAR</h2>
        <input type="text" value={query} onChange={handleInputQuery} />

        <h2>ORDENAR</h2>
        <select
          name=""
          id=""
          value={orderParam}
          onChange={handleInputOrderParam}
        >
          <option value="asc">CRESCENTE</option>

          <option value="desc">DECRESCETE</option>
        </select>
      </div>
      <Filtros />
      <div className="teste">{renderList}</div>

      <Carrinho carinho={carinho} />
    </div>
  );
};

export default Catalog;
