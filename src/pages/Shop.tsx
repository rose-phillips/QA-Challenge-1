import plantData from '../assets/data.json'
import Plant from '../components/Plant'
function Shop() {
  return (
    <div>
      <h2>Our plants</h2>
      <div>
      {
        plantData.map((plant) => {
          return <Plant id={plant.id} name={plant.name} price= {plant.price} imageUrl={plant.imageUrl}/>
        })
      }
      </div>
    </div>
  )
}

export default Shop