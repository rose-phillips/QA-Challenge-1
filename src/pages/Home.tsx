import Plant from '../assets/plants.jpg'
function Home() {
  return (
    <div className="homepage-banner">
      <div>
        <h2>Bring your home to life.</h2>
        <p>Elevate your living space with a touch of nature.</p>
        <p>We offer a range of easy-care houseplants.</p>
        <button>Browse plants</button>
      </div>
      <div>
        <img src={Plant} alt="Pot plants in a sunny room" className='homepage-plants-image'/>
      </div>
    </div>
  )
}

export default Home