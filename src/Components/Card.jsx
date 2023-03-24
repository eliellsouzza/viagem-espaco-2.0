import carStyle from "../Components/CardStyle.css";



const Card = (props) => {
   
  
  const { img, name, value, viagem, addToCart,deleteViagemToCard,  } = props
  
 


  return (
  

    <div className="container-card">
   
     
    <div className="card">
      
    <h1>{name}</h1>
    <img src={img} alt={name} width={80}/>
    <h2>{value}</h2>
        <button className="add" onClick={() => addToCart(viagem)}> Adicionar</button>
        <button onClick={()=>deleteViagemToCard(viagem)}>dele</button>
    </div>



 
    </div>
   
  );
};
 
export default Card;
