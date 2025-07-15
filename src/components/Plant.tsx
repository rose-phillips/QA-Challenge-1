type Plant = {
  id: string;
  name: string;
  price: number;
  imageUrl: string
}
function Plant({id, name, price, imageUrl}: Plant) {
  return (
    <div key={id}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>£{price.toFixed(2)}</p>
      <button>Add to cart</button>
    </div>
  )
}

export default Plant