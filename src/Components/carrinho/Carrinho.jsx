


import  CarrinhoStyle from "../carrinho/CarrinhoStyle.css"



const Carrinho = (props) => {

  return (
    <div className="Carrinho">
     < div className="itensCarrinho">
      {
        props.carinho.map(
          (item) => {
            return (
              <>
                <p>{item.name}</p>
                <img src={item.imageUrl} width={30} />             
                 <h5>{item.price}</h5>
                
         <div className="butoon">     
      <button>+</button>
      <button onClick={()=>removeItem(props.item)}>-</button>
     
      </div>
              </>              
              
                
              )
        
          }
        
        )
      
      }

     
      
      
     
      </div>
      <div className="total">
      <h3>TOTAL:</h3></div>
    </div>
  );
};

export default Carrinho;
