import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <nav>
      <h1>seed theory</h1>
      <menu>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        </menu>
    </nav>
  )
}

export default NavBar